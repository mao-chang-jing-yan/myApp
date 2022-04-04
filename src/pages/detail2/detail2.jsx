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
import {actionCreators} from "../../store/homeStore";
import commentList from "../../components/comment/comment";


const imgUrl = "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto"

class Detail2 extends Component {
    render() {
        return (
            <Fragment>
                <Swiper autoplay={true} className="picture" duration={500}
                        indicatorDots={true} interval={500}>
                    <SwiperItem>
                        <Image
                            className="slide-Image"
                            mode="aspectFill"
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
                            <Text>留言</Text>
                        </View>
                        <View  className="t_card" >
                            {/*<Text className="cuIcon-like cuIcon fav_active"> </Text>*/}
                            <Text>收藏</Text>
                        </View>
                        <View  className="t_card">
                            {/*<Text className="cuIcon-warn cuIcon"> </Text>*/}
                            <Image
                                style={{width: "20px", height: "20px"}}
                                src={require("../../tmp/imgs/follow2.png")}
                            />
                            <Text>举报</Text>
                        </View>
                    </View>
                    <View className="add-cart sub f16">
                        <View className="add-cart-btn"
                              >联系卖家
                        </View>
                        <View  className="add-cart-btn"
                               style={{background:"#FF6444"}}>立即购买
                        </View>
                    </View>
                </View>
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return{

    }

}
const mapDispatchToProp = (dispatch) => {
    return{

    }
}
export default connect(mapStateToProps, mapDispatchToProp)(Detail2);



