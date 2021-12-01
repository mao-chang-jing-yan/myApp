import React, {Component} from 'react'
import {View, Text} from '@tarojs/components'
import './index.scss'
import {AtAvatar, AtButton, AtForm, AtImagePicker, AtInput} from 'taro-ui'
import "taro-ui/dist/style/components/form.scss";
import "taro-ui/dist/style/components/image-picker.scss";
import "taro-ui/dist/style/components/icon.scss";
import {GET, Patch, POST} from "../../service/httpServier/http";
import {api, http} from "../../service/httpServier";
import {actionCreators} from "./store";
import Taro from "@tarojs/taro";
import {connect} from "react-redux";
import {changeProduct} from "./store/actionCreators";

class Index extends Component {
    constructor () {
        super(...arguments)
        this.state = {
            files: []
        }
    }
    onChange (files) {
        this.setState({
            files
        })
    }
    onFail (mes) {
        console.log(mes)
    }
    onImageClick (index, file) {
        console.log(index, file)
    }

    render() {
        let product = this.props.product;

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
                    // onReset={this.onReset.bind(this)}
                    // onSubmit={}
                >
                    <AtInput
                        name='value'
                        title='文本'
                        type='text'
                        placeholder='单行文本'
                        value={product.detail}
                        // onChange={()=>{}}
                        onChange={(value, event) =>
                            this.props.changeProductInfo("detail", event, product)}
                    />

                    <AtInput
                        name='value'
                        title='文本'
                        type='text'
                        placeholder='单行文本'
                        value={product.name}
                        // onChange={()=>{}}
                        onChange={(value, event) =>
                            this.props.changeProductInfo("name", event, product)}
                    />
                    <AtInput
                        name='value'
                        title='文本'
                        type='number'
                        placeholder='单行文本'
                        value={product.price}
                        // onChange={()=>{}}
                        onChange={(value, event) =>
                            this.props.changeProductInfo("price", event, product)}
                    />




                    <AtButton formType='submit' onClick={() => this.props.submitProduct()}>提交</AtButton>
                    <AtButton formType='reset' onClick={() => {
                        this.props.resetProduct()
                    }}>重置</AtButton>
                </AtForm>

                {/*<AtImagePicker*/}
                {/*    files={this.state.files}*/}
                {/*    onChange={(files, operationType, index)=>this.onChange(files)}*/}
                {/*    onImageClick={(index, file)=>{}}*/}
                {/*/>*/}

                {/*<AtImagePicker*/}
                {/*    mode='top'*/}
                {/*    files={this.state.files}*/}
                {/*    onChange={this.onChange.bind(this)}*/}
                {/*    onFail={this.onFail.bind(this)}*/}
                {/*    onImageClick={this.onImageClick.bind(this)}*/}
                {/*/>*/}
            </View>
        )
    }
}

//img_url: "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto",
//         name: "电脑💻",
//         detail: "ufhgusdighfughfdiughdfiu",
//         user_name: "2312",
//         price: 123,

const mapStateToProps = (state) => {
    const index = state.get("index")
    return {
        // searchStr: home.get("searchStr"),
        product: index.get("product").toJS()
        // currentPageUrl:state.currentPageUrl7
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        resetProduct() {
            console.log(Taro.getEnv()=== Taro.ENV_TYPE.WEAPP)
            dispatch(actionCreators.changeProduct({}))
        },
        changeProductInfo(k, e, newProduct) {
            newProduct[k] = e.detail.value
            // console.log(newProduct)
            // console.log(k, e, e.detail.value)
            dispatch(actionCreators.changeProduct(newProduct))
        },
        submitProduct() {
            dispatch(actionCreators.submitProduct())
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProp)(Index);

