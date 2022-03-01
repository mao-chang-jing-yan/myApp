import React, {Component, Fragment} from 'react'
import {Current} from '@tarojs/taro'

import {View, Text, Image, Swiper, SwiperItem, Button, ScrollView} from '@tarojs/components'
import './detail.scss'
import {actionCreators} from "../../store/detailStore";
import {connect} from "react-redux";
import Taro from "@tarojs/taro";
import {getCurrentInstance} from "@tarojs/runtime";
import {AtDivider} from "taro-ui";
import "taro-ui/dist/style/components/divider.scss";
import "taro-ui/dist/style/components/icon.scss";

class Detail extends Component {
    componentDidMount() {
        let product_id = getCurrentInstance().router.params.id
        this.props.getProductInfo(product_id);
    }


    render() {
        return (
            <Fragment>

                <ScrollView scrollY={true} className={"detail-body"}>

                    <View className={"top"}>
                        <Swiper
                            className={"swiper"}
                            indicatorColor='#999'
                            indicatorActiveColor='#333'
                            // interval={3000}
                            // duration={800}
                            // circular
                            // indicatorDots
                            // autoplay
                        >
                            <SwiperItem
                                itemId={"6"}
                                className={"swiper-item"}
                            >
                                <Image
                                    className={"image"}
                                    src={this.props.product_info.img_url}
                                    // onClick={()=>{this.props.getProductInfo("we")}}
                                    mode={"scaleToFill"}
                                />
                            </SwiperItem>
                        </Swiper>

                        <View className={"describe"}>
                            <View className={"title"}>
                                {this.props.product_info.name}
                            </View>
                            <View className={"price-box"}>
                                <View className={"price"}>
                                    ¥{this.props.product_info.price}
                                </View>
                                <View className={"old-price"}>
                                    ¥{this.props.product_info.old_price}
                                </View>
                            </View>

                        </View>
                    </View>


                    <View className={"detail"}>
                        <View className={"submit-at item"}>
                            <View className={"left"}>发布时间</View> <View className={"right"}>2022/11/08 23:32:23</View>
                        </View>
                        <View className={"new-level item"}>
                            <View className={"left"}>新旧程度</View> <View className={"right"}>6成新</View>
                        </View>
                        <View className={"detail_ item"}>
                            <View className={"left"}>详细描述</View> <View className={"right"}>{this.props.product_info.detail}</View>
                        </View>
                    </View>


                    <View className={"comment-list"}>
                        <View className={"comment-list-title"}>
                            全部留言
                        </View>
                        <View className={"comment-list-list"}>
                            {
                                this.props.comment_list.map((item, index) => {
                                    return (
                                        <View key={item.user_name+index} >
                                            <AtDivider className={"item-divider"}/>
                                            <View className={"comment-item"}>
                                                <View className={"user"}>
                                                    <Image className={"icon"} src={item.user_icon}/>
                                                    <View className={"name"}>
                                                        {item.user_name}
                                                    </View>

                                                </View>
                                                <View className={"text"}>
                                                    {item.text}
                                                </View>

                                            </View>
                                        </View>

                                    )
                                })
                            }

                        </View>
                    </View>


                </ScrollView>

                <View className={"bottom"}>
                    <View className={"liu-yan"}>
                        留言
                    </View>
                    <View className={"shou-cang"}>
                        收藏
                    </View>

                    <View className={"mai_"} onClick={()=>this.props.pay()}>
                        立即购买
                    </View>
                    <View className={"mai"}>
                        联系卖家
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
    return {

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

export default connect(mapStateToProps, mapDispatchToProp)(Detail);
