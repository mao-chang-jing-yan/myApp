import React, {Component} from 'react'
import {View, Text} from '@tarojs/components'
import './index.scss'
import {AtAvatar, AtButton, AtForm, AtInput} from 'taro-ui'
import "taro-ui/dist/style/components/form.scss";

import {GET, Patch, POST} from "../../service/httpServier/http";
import {api, http} from "../../service/httpServier";
import {actionCreators} from "../home/store";
import Taro from "@tarojs/taro";
import {connect} from "react-redux";

class Index extends Component {


    componentWillMount() {
    }

    componentDidMount() {
        // this.inti()

    }

    componentWillUnmount() {

    }

    componentDidShow() {

    }

    componentDidHide() {

    }

    async req() {
        // let data = await http.Patch(api.testPatch, {"23": 1})
        // console.log(data)
    }




    render() {
        return (
            <View className={"index"}>
                <View style={{
                    // float: "left",
                    // width: "50px",
                    height: "25px",
                    fontSize: "20px",
                    // display:"box",
                    // borderRadius: "2px",
                    // backgroundColor: "green",
                    // textAlign: "center",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "left",
                }}>
                    <View style={{
                        // float: "left",
                        height: "80%",
                        width: "3px",
                        marginTop: "2.2%",
                        backgroundColor: "green",
                        color: "green",
                        overflow: "hidden",
                        // borderRadius: "3px",
                    }}>
                        1
                    </View>

                    <View style={{
                        // float: "left"
                    }}>&nbsp;商品基本信息</View>
                </View>


                <AtForm
                    // onSubmit={this.onSubmit.bind(this)}
                    // onReset={this.onReset.bind(this)}
                >
                    <AtInput
                        name='value'
                        title='文本'
                        type='text'
                        placeholder='单行文本'
                        // value={this.state.value}
                        // onChange={this.handleChange.bind(this, 'value')}
                    />
                    <AtInput
                        name='value'
                        title='文本'
                        type='text'
                        placeholder='单行文本'
                        // value={this.state.value}
                        // onChange={this.handleChange.bind(this, 'value')}
                    />
                    <AtButton formType='submit'>提交</AtButton>
                    <AtButton formType='reset'>重置</AtButton>
                </AtForm>


            </View>
        )
    }
}



const mapStateToProps = (state) => {
    const home = state.get("home")
    return {
        // searchStr: home.get("searchStr"),
        // products: home.get("products").toJS()
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

    }
}

export default connect(mapStateToProps, mapDispatchToProp)(Index);

