import {Component, Fragment} from 'react'
import {View, Text, Image, ScrollView} from '@tarojs/components'
import './user.scss'
import {connect} from "react-redux";
import {actionCreators} from "./store";
import {http} from "../../service/httpServier";
import Taro from "@tarojs/taro";
// require("../../tmp/imgs/img/icon/publish.png")
// require("../../tmp/imgs/img/icon/sale.png")
// require("../../tmp/imgs/img/icon/cart.png")
// require("../../tmp/imgs/img/icon/feedback.png")
// require("../../tmp/imgs/img/icon/contact.png")


class User extends Component {
    settings = [
        {imgUrl: require("../../tmp/imgs/img/icon/publish.png"), name: "我的发布"},
        {imgUrl: require("../../tmp/imgs/img/icon/sale.png"), name: "我卖出的"},
        {imgUrl: require("../../tmp/imgs/img/icon/cart.png"), name: "我买到的"},
        {imgUrl: require("../../tmp/imgs/img/icon/feedback.png"), name: "意见反馈"},
        {imgUrl: require("../../tmp/imgs/img/icon/contact.png"), name: "联系客服"},
    ]

    componentDidMount() {
        // Taro.getUserInfo({
        //
        // }).then(r =>{
        //     console.log(r)
        // }).catch(err=>{
        //     console.log(err)
        // })
        this.props.login();

    }


    render() {
        return (
            <Fragment>
                <ScrollView scrollY={"true"}>

                    <View className={"topBar"}>
                        <View className="title">{this.props.title}</View>
                        <View className="top">
                            <Image className="ava" onClick={() => this.props.changeAvaUrl()} src={this.props.avatarUrl}/>
                            <View className="name">{this.props.nickName}</View>
                        </View>
                        <View className={"list"}>
                            <View className={"item"}>
                                <View className={"num"}>123</View>
                                <View className={"name_"}>余额</View>
                            </View>
                            <View className={"item"}>
                                <View className={"num"}>123</View>
                                <View className={"name_"}>关注</View>
                            </View>
                            <View className={"item"}>
                                <View className={"num"}>123</View>
                                <View className={"name_"}>收藏</View>
                            </View>
                            <View className={"item"}>
                                <View className={"num"}>123</View>
                                <View className={"name_"}>足迹</View>
                            </View>
                        </View>

                    </View>

                    {
                        this.settings.map((item, index) => {
                            return (
                                <View className={"she_zhi_item"} key={item.name + index}>
                                    <Image className={"img"} src={item.imgUrl}/>
                                    <View className={"text"}>{item.name}</View>
                                    <View className={"right"}>
                                        {">"}
                                    </View>
                                </View>
                            )
                        })
                    }

                    {/*<View className={"she_zhi_item"}>*/}
                    {/*    <Image className={"img"} src={this.props.avaUrl}/>*/}
                    {/*    <View className={"text"}>设置1</View>*/}
                    {/*    <View className={"right"}>*/}
                    {/*        {">"}*/}
                    {/*    </View>*/}
                    {/*</View>*/}


                </ScrollView>
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    const userData = state.get("user")
    const userInfo = userData.get("userInfo")

    return {
        openid: userInfo.get("openid"),
        avatarUrl: userInfo.get("avatarUrl"),
        nickName: userInfo.get("nickName"),
        title: userData.get("title"),
        isLogin: userData.get("isLogin"),
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
        changeUserInfo() {
            dispatch(actionCreators.getUserInfo())
        },
        login() {
            dispatch(actionCreators.handleLogin())
        },
        changeAvaUrl(e) {
            // http.UploadImage()
            console.log("changeAvaUrl")
            // dispatch(actionCreators.changeAvaUrl("123"))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(User);

