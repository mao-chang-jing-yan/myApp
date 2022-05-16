import React, {Component} from 'react'
import {View, Text, Image, Video, Picker} from '@tarojs/components'
import './index.scss'
import {
    AtAvatar,
    AtMessage,
    AtButton,
    AtForm,
    AtImagePicker,
    AtInput,
    AtTextarea,
    AtList,
    AtListItem,
    AtCalendar
} from 'taro-ui'
import {actionCreators} from "../../store/indexStore/index";
import Taro from "@tarojs/taro";
import {connect} from "react-redux";
import {api} from "../../service/httpServier";
import './index.scss'


class Index extends Component {
    old_new_type = ["全新", "九成新", "五成新"]
    typeL = ["1", "2", "3"]
    constStr = ""

    render() {
        let product = this.props.product;
        let focus = false;

        return (
            <View className={"index"}>
                <AtCalendar />

                <AtMessage />
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
                    margin: "10px 0 12px 0",
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
                        title='商品名称'
                        type='text'
                        placeholder='商品名称'
                        value={product.name}
                        // onChange={()=>{}}
                        onChange={(value, event) =>
                            this.props.changeInput("name", event.detail.value, product)}
                    />
                    <AtInput
                        name='value'
                        title='原价'
                        type='number'
                        placeholder='商品价格'
                        value={product.old_price}
                        // onChange={()=>{}}
                        onChange={(value, event) =>
                            this.props.changeInput("old_price", event.detail.value, product)}
                    />


                    <AtInput
                        name='value'
                        title='现价'
                        type='number'
                        placeholder='商品价格'
                        value={product.price}
                        // onChange={()=>{}}
                        onChange={(value, event) =>
                            this.props.changeInput("price", event.detail.value, product)}
                    />
                    <AtInput
                        name='value'
                        title='电话'
                        type='text'
                        placeholder='商品价格'
                        value={product.price}
                        // onChange={()=>{}}
                        onChange={(value, event) =>
                            this.props.changeInput("price", event.detail.value, product)}
                    />
                    {/*
                    新旧程度、所属分类
                    */}
                    <Picker
                        mode='selector'
                        range={this.old_new_type}
                        onChange={
                            (event) => {
                                // console.log(value, event)
                                this.props.changeInput("old_new_type", this.old_new_type[event.detail.value], product)
                            }
                        }
                    >
                        <AtList>
                            <AtListItem
                                title='新旧程度'
                                extraText={product.old_new_type}
                            />
                        </AtList>
                    </Picker>

                    <Picker
                        mode='selector'
                        range={this.typeL}
                        onChange={
                            (event) => {
                                // console.log(value, event)
                                this.props.changeInput("type", this.typeL[event.detail.value], product)
                            }
                        }
                    >
                        <AtList>
                            <AtListItem
                                title='所属类型'
                                extraText={product.type}
                            />
                        </AtList>
                    </Picker>

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
                    <Picker
                        mode='selector'
                        range={[]}
                        onChange={
                            (event) => {}
                        }
                        disabled={true}
                    >
                        <AtList>
                            <AtListItem
                                title='详细描述'
                                extraText={""}
                            />
                        </AtList>
                    </Picker>
                    <AtTextarea
                        value={product.detail}
                        maxLength={200}
                        placeholder='详细描述'
                        onChange={(value, event) =>
                            this.props.changeInput("detail", event.detail.value, product)}
                    />

                    {/*<AtInput*/}
                    {/*    name='value'*/}
                    {/*    title='上传图片'*/}
                    {/*    type='text'*/}
                    {/*    placeholder=''*/}
                    {/*    value={this.constStr}*/}
                    {/*    focus={false}*/}
                    {/*    onChange={() => {*/}
                    {/*        this.constStr = ""*/}
                    {/*    }}*/}
                    {/*    onfocus={() => {*/}
                    {/*        focus = false*/}
                    {/*    }}*/}
                    {/*    style={{width: "200px", height: "30px", overflow: "hidden", border: "1px solid red"}}*/}
                    {/*/>*/}
                    <Picker
                        mode='selector'
                        range={[]}
                        onChange={
                            (event) => {}
                        }
                        disabled={true}
                    >
                        <AtList>
                            <AtListItem
                                title='上传图片'
                                extraText={""}
                            />
                        </AtList>
                    </Picker>


                    <AtImagePicker
                        customStyle={{"border": "1px solid #d6e4ef", "border-radius": "3px"}}
                        files={product.images}
                        onChange={(value, event, index) => {
                            // console.log(value, event, index)
                            this.props.changeImages(event, value, product)
                        }}
                    />


                    <AtButton onClick={() => this.props.submitProduct()}>提交</AtButton>
                    <AtButton onClick={() => {
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
        changeSelect(key, value, newProduct) {

        },
        changeInput(key, value, newProduct) {
            // console.log(k, e)

            newProduct[key] = value
            // console.log(newProduct)
            // console.log(k, e, e.detail.value)
            dispatch(actionCreators.changeProduct(newProduct))
        },
        submitProduct() {
            Taro.atMessage({
                'message': "123",
                'type': "error",
            })
            dispatch(actionCreators.submitProduct())
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProp)(Index);

