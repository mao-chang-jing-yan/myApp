import React, {Component, Fragment} from 'react'
import './search.scss'
import {connect} from "react-redux";
import {actionCreators} from "../../store/searchStore";
import Taro from "@tarojs/taro";
import {Image, Input, ScrollView, View} from "@tarojs/components";
import productList from "../../components/productList/productList";
import {AtTabs, AtTabsPane} from "taro-ui";
import "taro-ui/dist/style/components/tabs.scss";


class Search extends Component {

    render() {
        return (
            <Fragment>
                <View className={"body1"}>

                    <View className={"search"}>
                        <Input
                            id={"input-1"}
                            className={"input"}
                            type={"text"}
                            value={this.props.search_str}
                            onInput={(e) => this.props.changeSearchStr(e)}
                            focus={this.props.is_focus}
                            onFocus={() => {
                                this.props.changeFocus(true)
                                console.log(this.props.is_focus)
                            }}
                            onBlur={() => {
                                setTimeout(() => {
                                    this.props.changeFocus(false)
                                }, 10)
                                console.log(this.props.is_focus)
                            }}
                            placeholder={"请输入"}
                        />
                        <Image className={"icon"}
                               onClick={this.props.search({search_str: this.props.search_str})}
                               src={"https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto"}/>
                    </View>

                    {/* 历史记录*/}

                    {
                        this.props.is_focus !== true ? "" :
                            <View className={"search-history-box"}>
                                {
                                    this.props.history.map((item, index) => {
                                        return (
                                            <View
                                                className={"search-history-item"}
                                                key={item + index}
                                                onClick={() => {
                                                    this.props.changeSearchStr(item)
                                                    this.props.changeFocus(false)
                                                }
                                                }>
                                                {item}
                                            </View>
                                        )
                                    })
                                }

                            </View>
                    }
                    {
                        this.props.is_focus === true ? "" :
                            <View>
                                {
                                    productList(this.props, this.props.products)
                                }
                            </View>
                    }


                </View>


            </Fragment>

        )
    }
}

const mapStateToProps = (state) => {
    const search = state.get("search");
    const res_ =
        {
            search_str: search.get("search_str"),
            products: search.get("products")?.toJS() || [],
            history: search.get("history")?.toJS() || [],
            recommends: search.get("recommends")?.toJS() || [],
            is_focus: search.get("is_focus"),
            list_type: search.get("list_type"),
            // currentPageUrl:state.currentPageUrl
        }
        console.log("res_", res_)
    return res_
}
const mapDispatchToProp = (dispatch) => {
    return {
        changeSearchStr(e) {
            let value = e;
            // console.log("value1", value)
            if (e.detail !== undefined) {
                value = e.detail.value
            }
            // console.log("value", value)
            dispatch(actionCreators.changeSearchStr(value))
        },
        search(filter) {
            dispatch(actionCreators.getList(filter))
        },
        sw() {
            Taro.navigateTo({
                url: "/pages/detail/detail"
            }).then()
        },
        changeFocus(focus) {
            dispatch(actionCreators.changeFocus(focus))
        },
        changeListType(listType) {
            if (listType === 0) {
                dispatch(actionCreators.changeListType(1))
            } else {
                dispatch(actionCreators.changeListType(0))
            }
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProp)(Search);

