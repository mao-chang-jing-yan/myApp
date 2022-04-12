
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
import {Picker, View} from "@tarojs/components";



class CourseCreate extends Component{
    render() {
        let product = this.props.product;
        return (
            <Fragment>
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
                    }}>&nbsp;课程基本信息</View>
                </View>

                <AtForm
                    // onReset={this.onReset.bind(this)}
                    // onSubmit={}
                >
                    <AtInput
                        name='value'
                        title='课程名称'
                        type='text'
                        placeholder='课程名称'
                        // value={product.old_price}
                        // onChange={()=>{}}
                        onChange={(value, event) =>
                            this.props.changeInput("name", event.detail.value, product)}
                    />


                    <AtInput
                        name='value'
                        title='老师'
                        type='text'
                        placeholder='老师'
                        // value={product.price}
                        // onChange={()=>{}}
                        onChange={(value, event) =>
                            this.props.changeInput("teacher", event.detail.value, product)}
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
                    <Picker mode='date' onChange={(event)=>{this.props.changeInput("startDate", event.detail.value, product)}}>
                        <AtList>
                            <AtListItem title='开始日期' extraText={product.startDate} />
                        </AtList>
                    </Picker>
                    <Picker mode='date' onChange={(event)=>{this.props.changeInput("endDate", event.detail.value, product)}}>
                        <AtList>
                            <AtListItem title='结束日期' extraText={product.startDate} />
                        </AtList>
                    </Picker>

                    <Picker mode='time' onChange={(event)=>{this.props.changeInput("startTime", event.detail.value, product)}}>
                        <AtList>
                            <AtListItem title='开始时间' extraText={product.startTime} />
                        </AtList>
                    </Picker>
                    <Picker mode='time' onChange={(event)=>{this.props.changeInput("endTime", event.detail.value, product)}}>
                        <AtList>
                            <AtListItem title='结束时间' extraText={product.endTime} />
                        </AtList>
                    </Picker>

                    <Picker range={["周一","周二","周三","周四","周五","周六","周日",]} onChange={(event)=>{this.props.changeInput("week", event.detail.value, product)}}>
                        <AtList>
                            <AtListItem title='周几' extraText={product.week} />
                        </AtList>
                    </Picker>

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
            // // console.log(Taro.getEnv() === Taro.ENV_TYPE.WEAPP)
            // newProduct.images = []
            // newProduct.price = null
            // newProduct.old_price = null
            // newProduct.name = ""
            // newProduct.detail = ""
            // dispatch(actionCreators.changeProduct(newProduct))
        },
        changeImages(k, e, newProduct) {
            // if (k === "remove") {
            //     newProduct.images = e
            //     console.log(e, newProduct)
            //     dispatch(actionCreators.changeProduct(newProduct))
            //     return;
            // }
            // if (k === "add") {
            //     const le = e.length - 1
            //     if (e.length <= 0 || e[le].file === undefined) {
            //         return;
            //     }
            //     newProduct.images.push(
            //         {"url": e[le].url}
            //     )
            //     console.log(k, e, newProduct.images)
            //     // newProduct.images.append(e[0].url)
            //     dispatch(actionCreators.changeProduct(newProduct))
            // }
        },
        changeSelect(key, value, newProduct) {

        },
        changeInput(key, value, newProduct) {
            console.log(key, value);
            //
            // newProduct[key] = value
            // // console.log(newProduct)
            // // console.log(k, e, e.detail.value)
            // dispatch(actionCreators.changeProduct(newProduct))
        },
        submitProduct() {
            // Taro.atMessage({
            //     'message': "123",
            //     'type': "error",
            // })
            // dispatch(actionCreators.submitProduct())
        },

    }
}


export default connect(mapStateToProps, mapDispatchToProp)(CourseCreate);
