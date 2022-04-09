import React, {Component, Fragment} from 'react'
import {Image, Input, Swiper, SwiperItem, Text, View} from '@tarojs/components';
import commentList from "../../components/comment/comment";
import {connect} from "react-redux";
import {AtForm} from "taro-ui";
import "./index2.scss"

class Index2 extends Component {
    render() {
        return (
            <Fragment>
                <View catchreset="formReset" catchsubmit="formSubmit">
                    <View className="weui-cells weui-cells_after-title page">
                        <View className="box">
                            <View className="cu-bar bg-white">
                                <View className="info">
                                    <Text className="cuIcon-titles text-green"> </Text>
                                    <Text className="text-xl text-bold">商品基本信息</Text>
                                </View>
                            </View>
                        </View>
                        <View className="cu-form-group">
                            <View className="title">商品名称</View>
                            <Input  name="name" placeholder="请输入商品的名称"
                                    type={"text"}
                                   value="{{data.name}}"> </Input>
                        </View>
                        {/*<view className="cu-form-group">*/}
                        {/*    <view className="title">原价</view>*/}
                        {/*    <input bindinput="oldpriceInput" name="oldprice" placeholder="最多保留两位小数" type="digit"*/}
                        {/*           value="{{data.oldprice}}"></input>*/}
                        {/*</view>*/}
                        {/*<view className="cu-form-group">*/}
                        {/*    <view className="title">现价</view>*/}
                        {/*    <input bindinput="newpriceInput" name="price" placeholder="最多保留两位小数" type="digit"*/}
                        {/*           value="{{data.price}}"></input>*/}
                        {/*</view>*/}
                        {/*<view className="cu-form-group">*/}
                        {/*    <view className="title">联系电话</view>*/}
                        {/*    <input bindinput="phone" name="phone" placeholder="请输入电话" type="number"*/}
                        {/*           value="{{data.phone}}"></input>*/}
                        {/*</view>*/}
                        {/*<view className="cu-form-group">*/}
                        {/*    <view className="title">新旧程度</view>*/}
                        {/*    <picker bindchange="bindPickerChange" range="{{array}}" value="{{index}}">*/}
                        {/*        <view className="picker">*/}
                        {/*            {{array[index]}}*/}
                        {/*        </view>*/}
                        {/*    </picker>*/}
                        {/*</view>*/}
                        {/*<view className="cu-form-group">*/}
                        {/*    <view className="title">所属分类</view>*/}
                        {/*    <picker bindchange="bindPickerChanges" range="{{cateList}}" rangeKey="{{'name'}}"*/}
                        {/*            value="{{cateList[indexs].id}}">*/}
                        {/*        <view className="picker">*/}
                        {/*            {{cateList[indexs].name}}*/}
                        {/*        </view>*/}
                        {/*    </picker>*/}
                        {/*</view>*/}
                        {/*<view className="cu-form-group  margin-bottom">*/}
                        {/*    <view className="title">具体描述</view>*/}
                        {/*    <textarea autoHeight="true" bindinput="descInput" disabled="{{modalName!=null}}"*/}
                        {/*              maxLength="-1" name="content" placeholder="请输入描述"*/}
                        {/*              value="{{data.content}}"></textarea>*/}
                        {/*</view>*/}
                        {/*<view className="weui-cell weui-cell_input">*/}
                        {/*    <view className="weui-cell__hd">*/}
                        {/*        <view className="weui-label">添加图片</view>*/}
                        {/*    </view>*/}
                        {/*</view>*/}
                        {/*<view className="margin-left" style="">*/}
                        {/*    <addImage addedCount="{{addedCount}}" bind:chooseImage="chooseImages"*/}
                        {/*              bind:deleteImage="deleteImage" count="{{count}}" images="{{images}}"></addImage>*/}
                        {/*</view>*/}
                        {/*<view className="del_remark text-sm margin-left margin-bottom">*长按图片可进行删除</view>*/}
                        {/*<button className="my_button" formType="submit" type="primary">提交</button>*/}
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
export default connect(mapStateToProps, mapDispatchToProp)(Index2);



