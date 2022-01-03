import React, {Component} from 'react'
import {View, Text, Image, Video} from '@tarojs/components'
import './index.scss'
import {AtAvatar, AtButton, AtForm, AtImagePicker, AtInput, AtTextarea} from 'taro-ui'
import "taro-ui/dist/style/components/form.scss";
import "taro-ui/dist/style/components/image-picker.scss";
import "taro-ui/dist/style/components/icon.scss";
import {actionCreators} from "./store";
import Taro from "@tarojs/taro";
import {connect} from "react-redux";
import {api} from "../../service/httpServier";

class Index extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            files: []
        }
    }

    onChange(files) {
        this.setState({
            files
        })
    }

    onFail(mes) {
        console.log(mes)
    }

    onImageClick(index, file) {
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
                        title='名称'
                        type='text'
                        placeholder='商品名称'
                        value={product.name}
                        // onChange={()=>{}}
                        onChange={(value, event) =>
                            this.props.changeInput("name", event, product)}
                    />


                    <AtInput
                        name='value'
                        title='价格'
                        type='number'
                        placeholder='商品价格'
                        value={product.price}
                        // onChange={()=>{}}
                        onChange={(value, event) =>
                            this.props.changeInput("price", event, product)}
                    />

                    {/*<AtInput*/}
                    {/*    name='value'*/}
                    {/*    title='描述'*/}
                    {/*    type='text'*/}
                    {/*    placeholder='商品描述'*/}
                    {/*    disabled={true}*/}
                    {/*    value={product.name}*/}
                    {/*    // onChange={()=>{}}*/}
                    {/*    onChange={(value, event) =>*/}
                    {/*        this.props.changeInput("name", event, product)}*/}
                    {/*/>*/}
                    <AtTextarea
                        value={product.detail}
                        maxLength={200}
                        placeholder='详细描述'
                        onChange={(value, event) =>
                            this.props.changeInput("detail", event, product)}
                    />

                    <AtImagePicker
                        customStyle={{"border": "1px solid #d6e4ef", "border-radius": "3px"}}
                        files={product.images}
                        onChange={(value, event, index) => {
                            // console.log(value, event, index)
                            this.props.changeImages(event, value, product)
                        }}
                    />


                    <AtButton formType='submit' onClick={() => this.props.submitProduct()}>提交</AtButton>
                    <AtButton formType='reset' onClick={() => {
                        this.props.resetProduct(product)
                    }}>重置</AtButton>
                </AtForm>

                {/*<Video  src={api.base+"/images/get"}/>*/}

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
        resetProduct(newProduct) {
            // console.log(Taro.getEnv() === Taro.ENV_TYPE.WEAPP)
            newProduct.images = []
            newProduct.price = null
            newProduct.old_price = null
            newProduct.name = ""
            newProduct.detail = ""
            dispatch(actionCreators.changeProduct(newProduct))
        },
        changeImages(k, e, newProduct) {
            if (k === "remove") {
                newProduct.images = e
                console.log(e, newProduct)
                dispatch(actionCreators.changeProduct(newProduct))
                return;
            }
            if (k === "add") {
                const le = e.length - 1
                if (e.length <= 0 || e[le].file === undefined) {
                    return;
                }
                newProduct.images.push(
                    {"url": e[le].url}
                )
                console.log(k, e, newProduct.images)
                // newProduct.images.append(e[0].url)
                dispatch(actionCreators.changeProduct(newProduct))
            }
        },
        changeInput(k, e, newProduct) {
            // console.log(k, e)

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

