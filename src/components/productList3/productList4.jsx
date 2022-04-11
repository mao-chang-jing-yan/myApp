import React, {Fragment} from "react";
import {Image, SwiperItem, Text, View} from "@tarojs/components";
import "./productList4.scss"

const imgurl = "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto"


const ProductItem4 = (props) => {
    const {productInfo} = props;
    return (
        <Fragment>
            <View
                className="goods_item"
                onClick={() => props.sw(productInfo.id)}
            >
                <Image mode="aspectFill" src={imgurl} style={{width: "100%", height: "200px"}}> </Image>
                <View className="name">椅子</View>
                <View className="price">
                    <View className="price_item">￥{300}</View>
                    <View className="">￥{400}</View>
                </View>
                <View className="userInfo">
                    <View className="left">
                        <Image className="avatar" src={imgurl}> </Image>
                        <View className="nickname">{"茅场晶彦"}</View>
                    </View>
                    <View className="right">
                        {/*<Text className="cuIcon-likefill text-orange"> </Text>*/}
                        {30}人喜欢
                    </View>
                </View>
            </View>
        </Fragment>
    )
}


const ProductList4 = (props) => {
    const {products} = props;
    return (
        <Fragment>
            <View className="goods_line">
                {
                    products.map((item, index) => {
                        return (
                            <ProductItem4
                                key={"index" + index}
                                productInfo={item}
                                sw = {props.sw}
                            />
                        )
                    })
                }
            </View>
        </Fragment>
    )

}

export default ProductList4
