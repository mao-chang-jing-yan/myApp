import {Component, Fragment} from 'react'
import './search.scss'
import {connect} from "react-redux";
import {actionCreators} from "./store";
import Taro from "@tarojs/taro";
import {Image, Input, ScrollView, View} from "@tarojs/components";
import productList from "../../components/productList/productList";
import {AtTabs, AtTabsPane} from "taro-ui";
import "taro-ui/dist/style/components/tabs.scss";


class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {
            current: 0,
        }
    }

    handleClick(value) {
        this.setState({
            current: value
        })
    }

    componentDidMount() {
        // const isf = document.getElementById("input-1").focus()
        // console.log(isf)
    }

    render() {
        return (
            <Fragment>
                <View className={"body1"}>

                    <View className={"search"}>
                        <Input
                            id={"input-1"}
                            className={"input"}
                            type={"text"}
                            value={this.props.searchStr}
                            onInput={(e) => this.props.changeSearchStr(e)}
                            focus={this.props.isFocus}
                            onFocus={() => {
                                this.props.changeFocus(true)
                                console.log(this.props.isFocus)
                            }}
                            onBlur={() => {
                                setTimeout( () => {
                                    this.props.changeFocus(false)
                                }, 10)
                                console.log(this.props.isFocus)
                            }}
                            placeholder={"请输入"}
                        />
                        <Image className={"icon"}
                               src={"https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto"}/>
                    </View>

                    {/* 历史记录*/}

                    {
                        this.props.isFocus !== true ? "" :
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
                        this.props.isFocus === true ? "" :
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
    const search = state.get("search")
    return {
        searchStr: search.get("searchStr"),
        products: search.get("products").toJS(),
        history: search.get("history").toJS(),
        recommends: search.get("recommends").toJS(),
        isFocus: search.get("isFocus"),
        // currentPageUrl:state.currentPageUrl
    }
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
        sw() {
            Taro.navigateTo({
                url: "/pages/detail/detail"
            }).then()
        },
        changeFocus(focus) {
            dispatch(actionCreators.changeFocus(focus))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProp)(Search);

