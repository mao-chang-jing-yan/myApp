import React, {Component, Fragment} from 'react'
import './search2.scss'
import {connect} from "react-redux";
import {actionCreators} from "../../store/searchStore";
import Taro from "@tarojs/taro";
import {Image, Input, ScrollView, Text, View} from "@tarojs/components";
import ProductList4 from "../../components/productList3/productList4";


class Search2 extends Component {

    render() {
        return (
            <Fragment>
                <View className="search_bg">
                    <View className="search_box">
                        <Input className="input" placeholder="输入您要搜索的内容"/>
                        <View className="search_icon">
                            <Text className="cuIcon-titles" style={{fontSize:"36px", color:"#d2d2d2", borderLeft: "3px solid '#d2d2d2'"}}> </Text>
                            <Text className="cuIcon-search text-black"> </Text>
                        </View>
                    </View>
                </View>
                <ScrollView scrollIntoView="lists{{current_cate}}" scrollWithAnimation="true" scrollX="true">
                    <View className="cate_box">
                        <View className="cate_item {{current_cate==9999?'cate_active':''}}"
                              data-id="9999" data-index="9999">
                            全部
                        </View>
                        {/*<View className="cate_item {{current_cate==item.id?'cate_active':''}}">*/}
                        {/*    {"{item.name}"}*/}
                        {/*</View>*/}
                    </View>
                </ScrollView>
                {/*{*/}
                {/*    productList4(this.props, this.props.products)*/}
                {/*}*/}
                <ProductList4
                    sw={this.props.sw}
                    products={this.props.products}
                />
                <View className="nomore" >
                    暂无更多数据~
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
                url: "/pages/detail2/detail2"
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

export default connect(mapStateToProps, mapDispatchToProp)(Search2);

