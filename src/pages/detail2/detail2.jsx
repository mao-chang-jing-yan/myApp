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
import './detail2.scss'

import {connect} from "react-redux";
import Taro from "_@tarojs_taro@3.3.14@@tarojs/taro";
import {actionCreators as searchActionCreators} from "../../store/searchStore";
import {actionCreators} from "../../store/detailStore";
import commentList from "../../components/comment/comment";
import {getCurrentInstance} from "_@tarojs_runtime@3.3.14@@tarojs/runtime";


const imgUrl = "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto"

class Detail2 extends Component {
    componentDidMount() {
        let product_id = getCurrentInstance().router.params.id
        this.props.getProductInfo(product_id);
    }

    render() {
        return (
            <Fragment>
                <Swiper autoplay={true} className="picture" duration={500}
                        indicatorDots={true} interval={500}>
                    <SwiperItem className="picture-swiper-item">
                        <Image
                            className="slide-Image"
                            // mode="aspectFill"
                            src={imgUrl}
                        />
                    </SwiperItem>
                </Swiper>

                <View className="first clear">
                    <View className="left">
                        <View className="name">{"data.name"}</View>
                        <View className="price">￥{"data.price"}</View>
                        <Text className="oldprice">￥{"data.oldprice"}</Text>
                    </View>
                    <View className="right">
                        <Image
                            style={{width: "20px", height: "20px"}}
                            src={require("../../tmp/imgs/follow2.png")}
                        />
                        <Image
                            style={{width: "20px", height: "20px", marginLeft: "10px"}}
                            src={require("../../tmp/imgs/share.png")}/>
                    </View>
                </View>

                <View className="pj_box">
                    <View className="detail_card detail_border ">
                        <View className="detail_title">发布日期</View>
                        <View className="detail_content">{"data.addtime"}</View>
                    </View>
                    <View className="detail_card detail_border ">
                        <View className="detail_title">新旧程度</View>
                        <View className="detail_content">{"data.degree"}</View>
                    </View>
                    <View className="detail_card detail_border ">
                        <View className="detail_title">详细描述</View>
                        <View className="detail_content_d">{"data.content"}</View>
                    </View>
                </View>

                <View className="comment_box">
                    <View className="name">全部留言</View>
                    {
                        commentList(this.props, [])
                    }
                </View>


                <View className="bottom" >
                    <View className="bottom_left">
                        <View className="t_card">
                            {/*<Text className="cuIcon-message cuIcon"> </Text>*/}
                            <Image
                                className="image"
                                style={{width: "20px", height: "20px"}}
                                src={require("../../tmp/imgs/follow2.png")}
                            />
                            <Text className="text">留言</Text>
                        </View>
                        <View  className="t_card" >
                            {/*<Text className="cuIcon-like cuIcon fav_active"> </Text>*/}
                            <Image
                                className="image"
                                style={{width: "20px", height: "20px"}}
                                src={require("../../tmp/imgs/follow2.png")}
                            />
                            <Text className="text">收藏</Text>
                        </View>
                        <View  className="t_card">
                            {/*<Text className="cuIcon-warn cuIcon"> </Text>*/}
                            <Image
                                className="image"
                                style={{width: "20px", height: "20px"}}
                                src={require("../../tmp/imgs/follow2.png")}
                            />
                            <Text className="text">举报</Text>
                        </View>
                    </View>
                    <View className="add-cart sub f16">
                        <View className="add-cart-btn"
                              >联系卖家
                        </View>
                        <View  className="add-cart-btn"
                               onClick={()=>this.props.pay()}
                               style={{background:"#FF6444"}}>立即购买
                        </View>
                    </View>
                </View>
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    const detail = state.get("detail")
    return {
        // searchStr: search.get("searchStr"),
        product_info: detail.get("product_info").toJS(),
        comment_list: detail.get("comment_list").toJS(),
        // currentPageUrl:state.currentPageUrl
    }
}
const mapDispatchToProp = (dispatch) => {
    return{
        getProductInfo(id) {
            // console.log(id)
            dispatch(actionCreators.getProductData(id))
        },
        pay(){
            Taro.navigateTo({
                url: "/pages/pay/pay"
            }).then(r =>{})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProp)(Detail2);



