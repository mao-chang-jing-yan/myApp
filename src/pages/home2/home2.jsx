import React, {Component, Fragment} from 'react'
import {
    View,
    Text,
    Swiper,
    SwiperItem,
    Image,
    Input,
    PageMeta,
    NavigationBar,
    ScrollView,
    Video
} from '@tarojs/components'
import './home2.scss'

import {connect} from "react-redux";
import productList3 from "../../components/productList3/productList3";
import {actionCreators as searchActionCreators} from "../../store/searchStore";
import {actionCreators} from "../../store/homeStore";
import Taro from "@tarojs/taro";


class Home2 extends Component {
    swiperImages = [
        require("../../tmp/imgs/img/slide.jpg"),
        "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto",
        "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto",
    ]

    render() {
        return (
            <View className={"flex-col container"}>
                <View className={"flex-col group"}>
                    <View className={"flex-col section_1"}>
                        <View bindtap={"toCate"}
                              className={"justify-center button"}
                              onClick={() => this.props.goTo1()}
                              data-id={"9999"}>
                            <Image className={"image"}
                                   src={"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/610d0ce185e9bd00112839ac/61517902d1ba840011cca07e/16327294049089168805.png"}/>
                            <Text className={"text"} decode={"decode"}>搜索关键词</Text>
                        </View>
                        <View className={"section_2 swiper"}>
                            <Swiper autoplay={false} indicatorActiveColor={"#FF6344"} indicatorColor={"#fff"}
                                    indicatorDots={true}
                                    style={{height: "120px", overflow: "hidden"}}>
                                {
                                    this.swiperImages.map((item, index) => {
                                        console.log(item)
                                        return (
                                            <SwiperItem itemId={index} key={"index" + index} style={{height: "100%"}}>
                                                <Image src={item}
                                                       style={{height: "100%", width: "100%"}}/>
                                            </SwiperItem>
                                        )
                                    })
                                }

                                {/*<block wx:else>*/}
                                {/*    <SwiperItem style="height:280px;" wx:for="{{slideList}}">*/}
                                {/*        <Image bindtap="slideJump" data-type="{{item.url_type}}" data-url="{{item.url}}"*/}
                                {/*               src="{{item.img}}" style="height:270px;"/>*/}
                                {/*    </SwiperItem>*/}
                                {/*</block>*/}
                            </Swiper>
                        </View>
                    </View>

                    <View className={"flex-col group_1"}>
                        <View className={"flex-col section_3"}>
                            <View className={"flex-row equal-division"}>
                                <View className={"flex-col items-center equal-division-item"}
                                      data-id="9999">
                                    <Image className={"image_1"} src={require("../../tmp/imgs/img/all.png")}/>
                                    <Text className={"text_1"} decode="decode">全部</Text>
                                </View>
                            </View>
                            {/*<View className={"flex-col group_5"}>*/}
                            {/*    <View className={"flex-row group_6"}>*/}
                            {/*        <View className={"text-bold text-lg text-black"} style={{fontStyle: "oblique"}}>*/}
                            {/*             学生都爱买</View>*/}
                            {/*         <View className="center-section View"/>*/}
                            {/*         <Text className="text_6" decode="decode">火爆分类</Text>*/}
                            {/*    </View>*/}
                            {/*    <View className={"flex equal-division_1"} style={{overflowX:"scroll"}}>*/}
                            {/*        <View bindtap="toCate" className={"flex-col equal-division-item_2"}*/}
                            {/*              // data-id="{{item.id}}"*/}
                            {/*              // data-index="{{index}}"*/}
                            {/*              // style={{backgroundImage: `url("https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto")`}}*/}
                            {/*              // wx:if="{{item.is_hot==1}}" wx:for="{{cateList}}"*/}
                            {/*        >*/}
                            {/*            <Text className="text_7" decode="decode">"item.name"</Text>*/}
                            {/*            <Text className="text_8" decode="decode">"item.brief"</Text>*/}
                            {/*        </View>*/}
                            {/*    </View>*/}
                            {/*</View>*/}
                            <View className="flex-col group_7">
                                {/*<View className="flex-row group_8">*/}
                                {/*    <View className="text-bold text-lg text-black" style={{fontStyle: "oblique"}}>*/}
                                {/*        <Text className="text-orange">最新</Text>*/}
                                {/*        发布*/}
                                {/*    </View>*/}
                                {/*    <View className="center-section View_1"> </View>*/}
                                {/*    <Text className="text_13" decode="decode">最新二手信息</Text>*/}
                                {/*</View>*/}
                                <View style={{fontSize: "15px", fontWeight: "450", fontStyle: "oblique"}}>
                                    <View style={{
                                        float: "left",
                                        fontStyle: "italic",
                                        color: "#f37f66",
                                    }}
                                    >最新</View>发布|最新二手信息
                                </View>
                                {/*<block >*/}
                                {/*    <Image className="empty" src="../../../images/img/empty.png"/>*/}
                                {/*    <View className="text-center text-df margin-top">暂无数据~</View>*/}
                                {/*</block>*/}
                                {
                                        productList3(this.props, this.props.products)
                                }
                            </View>
                        </View>
                    </View>
                </View>
            </View>

        )
    }
}

const mapStateToProps = (state) => {
    const home = state.get("home")
    return {
        // searchStr: home.get("searchStr"),
        products: home.get("products").toJS(),
        listType: home.get("list_type"),
        // currentPageUrl:state.currentPageUrl7
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        changeCurrentUrl(e) {
            // const action = CreateChangeCurrentUrl()
            // action.value = JSON.parse(JSON.stringify(e.keyPath)).reverse()
            //
            // console.log(action, e.keyPath.reverse())
            //
            // dispatch(action)
        },
        changeSearchStr(e) {
            // dispatch(actionCreators.changeSearchStr(e.detail.value))
        },
        sw(id) {
            Taro.navigateTo({
                url: "/pages/detail/detail?id=" + id
            }).then()
        },
        goTo1() {
            Taro.navigateTo({
                url: "/pages/search/search"
            }).then(r=>{
                dispatch(searchActionCreators.changeFocus(true))
            })
        },
        changeListType(listType) {
            dispatch(actionCreators.getListData())

            if (listType === 0) {
                dispatch(actionCreators.changeListType(1))
            } else {
                dispatch(actionCreators.changeListType(0))
            }
        },
        switchToSearch() {
            dispatch(searchActionCreators.changeFocus(false))
            Taro.navigateTo({
                url: "/pages/search/search"
            }).then(r=>{
                dispatch(searchActionCreators.changeFocus(false))
            })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(Home2);
