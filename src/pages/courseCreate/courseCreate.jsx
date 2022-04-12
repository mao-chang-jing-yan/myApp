
import React, {Component, Fragment} from "react";
import {
    AtButton,
    AtForm,
    AtImagePicker,
    AtInput,
    AtList,
    AtListItem,
    AtTextarea
} from "taro-ui";
import {connect} from "react-redux";
import {actionCreators} from "../../store/indexStore";
import Taro from "@tarojs/taro";
import {Picker} from "@tarojs/components";



class CourseCreate extends Component{
    render() {
        let product = this.props.product;
        return (
            <Fragment>
                <AtForm
                    // onReset={this.onReset.bind(this)}
                    // onSubmit={}
                >
                    <AtInput
                        name='value'
                        title='课程名称'
                        type='number'
                        placeholder='课程名称'
                        // value={product.old_price}
                        // onChange={()=>{}}
                        onChange={(value, event) =>
                            this.props.changeInput("old_price", event.detail.value, product)}
                    />


                    <AtInput
                        name='value'
                        title='时间'
                        type='number'
                        placeholder='商品价格'
                        // value={product.price}
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


                    <AtButton formType='submit' onClick={() => this.props.submitProduct()}>提交</AtButton>
                    <AtButton formType='reset' onClick={() => {
                        this.props.resetProduct(product)
                    }}>重置</AtButton>
                </AtForm>
            </Fragment>
        );
    }
}
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


export default connect(mapStateToProps, mapDispatchToProp)(CourseCreate);
