import React, {Component, Fragment} from "react";
import {Image, View} from "@tarojs/components";
import Taro from "@tarojs/taro";
import {connect} from "react-redux";
import "./pay.scss"
import {AtInput, AtTextarea} from "taro-ui";

class Pay extends Component {
    render() {
        return (
            <View className={"page"}>
                <View className={"product"}>
                    <Image className={"image"} src={"https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto"}/>
                    <View className={"box"}>
                        <View className={"title"}>
                            桌子
                        </View>
                        <View className={"detail"}>
                            多少疯狂的后果
                        </View>
                    </View>

                </View>
                <View className={"user"}>
                    <AtInput
                        name='value'
                        title='手机号'
                        type='text'
                        placeholder='请输入手机号'
                        // value={this.state.value}
                        // onChange={this.handleChange.bind(this)}
                    />
                    <AtInput
                        name='value'
                        title='联系人'
                        type='text'
                        placeholder='请输入联系人姓名'
                        // value={this.state.value}
                        // onChange={this.handleChange.bind(this)}
                    />
                    <AtTextarea
                        // value={this.state.value}
                        // onChange={this.handleChange.bind(this)}
                        maxLength={200}
                        placeholder='请输入交易地点等其他信息'
                    />
                    <View>
                        {/*123*/}
                    </View>
                </View>


                <View className={"bottom"}>
                    <View className={"left"}>
                        <View className={"tag"}>价格: </View>
                        <View className={"price"}>¥ 300</View>
                    </View>

                    <View className={"right"}>
                        确认购买
                    </View>
                </View>
            </View>
        );
    }

}


const mapStateToProps = (state) => {
    // const detail = state.get("detail")
    return {
        // searchStr: search.get("searchStr"),
        // product_info: detail.get("product_info").toJS(),
        // comment_list: detail.get("comment_list").toJS(),
        // currentPageUrl:state.currentPageUrl
    }
}
const mapDispatchToProp = (dispatch) => {
    return {

        getProductInfo(id) {
            console.log(id)
            // dispatch(actionCreators.getProductData(id))
        },
        pay() {
            Taro.navigateTo({
                url: "/pages/pay/pay"
            }).then(r => {
            })
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProp)(Pay);

