import React, {Fragment} from "react";
import {Image, SwiperItem, Text, View} from "@tarojs/components";
import "./productList4.scss"

const productList4 = (props, products) => {
    const imgurl = "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto"
    return (
        <Fragment>
            <View className="goods_line">
                {
                    products.map((item, index) => {
                        return (

                            <View
                                className="goods_item"
                                key={"index" + index}
                                onClick={() => props.sw(item.id)}
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
                                    <View>
                                        <Text className="cuIcon-likefill text-orange"> </Text>
                                        {3000}人喜欢
                                    </View>
                                </View>
                            </View>

                        )
                    })
                }

            </View>

        </Fragment>


    )

}

export default productList4
