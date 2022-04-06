import React, {Component} from "react";
import {Image, Text, View} from "@tarojs/components";

const imgurl = "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto"

class User2 extends Component {

    settings = [
        {imgUrl: require("../../tmp/imgs/img/icon/publish.png"), name: "我的发布"},
        {imgUrl: require("../../tmp/imgs/img/icon/sale.png"), name: "我卖出的"},
        {imgUrl: require("../../tmp/imgs/img/icon/cart.png"), name: "我买到的"},
        {imgUrl: require("../../tmp/imgs/img/icon/feedback.png"), name: "意见反馈"},
        {imgUrl: require("../../tmp/imgs/img/icon/contact.png"), name: "联系客服"},
    ]

    render() {
        return (
            <View className="flex-col container">
                <View className="flex-col " style={{position:"relative"}}>
                    <Image mode="widthFix" src={imgurl} style={{width:"100%"}}/>
                    <View className="header text-center text-lg text-white align-center flex justify-center"
                          style={{paddingTop:"{{statusBarHeight}}px",height:"{{navHeight}}rpx",lineHeight:"{{navHeight}}rpx"}}>
                        我的
                    </View>
                    <View className="box">
                        {/*<View className="flex justify-between align-center">*/}
                        {/*    <View className="flex-col group_1">*/}
                        {/*        <View bindtap="bindgetuserinfo" className="text" wx:if="{{!islogin}}">点击登录</View>*/}
                        {/*        <View className="text nickname" wx:else>{{loginuserinfo.nickName}}</View>*/}
                        {/*        <text bindtap="phone" className="text_1" decode="decode" wx:if="{{islogin}}">{{*/}
                        {/*            user*/}
                        {/*            .phone ? user.phone : '点击获取手机号'*/}
                        {/*        }}</text>*/}
                        {/*        <text className="text_1" decode="decode" wx:else>您好，欢迎登录二手市场</text>*/}
                        {/*    </View>*/}
                        {/*    <View className="flex-row group_1">*/}
                        {/*        <Image className="image" src="../../../images/img/avatar.png"*/}
                        {/*               wx:if="{{!islogin}}"/>*/}
                        {/*        <Image className="image" src="{{loginuserinfo.avatarUrl}}" wx:else/>*/}
                        {/*    </View>*/}
                        {/*</View>*/}
                        {/*<View className="flex justify-between margin-top-xl" style="padding:0 40rpx;">*/}
                        {/*    <View bindtap="yue" className="flex-col items-center">*/}
                        {/*        <text className="text_2" decode="decode">{123}</text>*/}
                        {/*        <text className="text_3" decode="decode">余额</text>*/}
                        {/*    </View>*/}
                        {/*    <View bindtap="jump" className="flex-col items-center"*/}
                        {/*          data-url="/gc_market/pages/follow/index">*/}
                        {/*        <text className="text_2" decode="decode">{123}</text>*/}
                        {/*        <text className="text_3" decode="decode">关注</text>*/}
                        {/*    </View>*/}
                        {/*    <View bindtap="jump" className="flex-col items-center"*/}
                        {/*          data-url="/gc_market/pages/secondfav/index">*/}
                        {/*        <text className="text_4" decode="decode">{123}</text>*/}
                        {/*        <text className="text_5" decode="decode">收藏</text>*/}
                        {/*    </View>*/}
                        {/*    <View bindtap="jump" className="flex-col items-center"*/}
                        {/*          data-url="/gc_market/pages/secondhand/footprint">*/}
                        {/*        <text className="text_6" decode="decode">{123}</text>*/}
                        {/*        <text className="text_7" decode="decode">足迹</text>*/}
                        {/*    </View>*/}
                        {/*</View>*/}
                    </View>
                    {/*<View className="flex-col group_7">*/}
                    {/*    <Text className="text_8" decode="decode">常用功能</Text>*/}
                    {/*    <View className="flex-col group_8">*/}
                    {/*        <View bindtap="jump" className="justify-between group_9 item"*/}
                    {/*              data-url="/gc_market/pages/secondhand/my">*/}
                    {/*            <View className="flex-row">*/}
                    {/*                <Image className="image_1" src="../../../images/img/icon/publish.png"/>*/}
                    {/*                <Text className="text_9" decode="decode">我的发布</Text>*/}
                    {/*            </View>*/}
                    {/*            <Text className="cuIcon-right icon"> </Text>*/}
                    {/*        </View>*/}
                    {/*        <View bindtap="jump" className="justify-between item"*/}
                    {/*              data-url="/gc_market/pages/secondhand/sale">*/}
                    {/*            <View className="flex-row">*/}
                    {/*                <Image className="image_1" src="../../../images/img/icon/sale.png"/>*/}
                    {/*                <Text className="text_10" decode="decode">我卖出的</Text>*/}
                    {/*            </View>*/}
                    {/*            <Text className="cuIcon-right icon"> </Text>*/}
                    {/*        </View>*/}
                    {/*        <View bindtap="jump" className="justify-between item"*/}
                    {/*              data-url="/gc_market/pages/secondhand/mybuy">*/}
                    {/*            <View className="flex-row">*/}
                    {/*                <Image className="image_1" src="../../../images/img/icon/cart.png"/>*/}
                    {/*                <Text className="text_10" decode="decode">我买到的</Text>*/}
                    {/*            </View>*/}
                    {/*            <Text className="cuIcon-right icon"> </Text>*/}
                    {/*        </View>*/}
                    {/*        <button className="justify-between" openType="feedback"*/}
                    {/*                style="width:100%;background:white;padding:0;">*/}
                    {/*            <View bindtap="jump" className="justify-between item"*/}
                    {/*                  data-url="/gc_market/pages/help/index" style="width:100%;">*/}
                    {/*                <View className="flex-row align-center">*/}
                    {/*                    <Image className="image_1" src="../../../images/img/icon/feedback.png"/>*/}
                    {/*                    <Text className="text_10" decode="decode">意见反馈</Text>*/}
                    {/*                </View>*/}
                    {/*                <Text className="cuIcon-right icon"> </Text>*/}
                    {/*            </View>*/}
                    {/*        </button>*/}
                    {/*        <button className="justify-between" openType="contact"*/}
                    {/*                style="width:100%;background:white;padding:0;">*/}
                    {/*            <View bindtap="jump" className="justify-between item"*/}
                    {/*                  data-url="/gc_market/pages/help/index" style="width:100%;">*/}
                    {/*                <View className="flex-row align-center">*/}
                    {/*                    <Image className="image_1" src="../../../images/img/icon/contact.png"/>*/}
                    {/*                    <text className="text_10" decode="decode">联系客服</text>*/}
                    {/*                </View>*/}
                    {/*                <Text className="cuIcon-right icon"> </Text>*/}
                    {/*            </View>*/}
                    {/*        </button>*/}
                    {/*    </View>*/}
                    {/*</View>*/}
                </View>
            </View>

        );
    }

}


export default User2;
