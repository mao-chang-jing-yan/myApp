import React, {Fragment} from "react";
import {Image, SwiperItem, Text, View} from "@tarojs/components";
import "./productList3.scss"

const productList3 = (props, products) => {
    const imgurl = "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto"
    return (
        <Fragment>
            <View className="grid">
                {
                    products.map((item, index) => {
                        return (
                            <View
                                className="grid-item flex-col"
                                itemId={index}
                                key={"index" + index}
                                onClick={() => props.sw(item.id)}
                            >
                                <View className="flex-col group_9">
                                    <Image className="image_8" mode="aspectFill"
                                           src={imgurl}/>
                                    <Text className="text_14 text_15 name" decode="decode">椅子</Text>
                                </View>
                                <View className="justify-between group_10">
                                    <View className="left-group">
                                        <Text className="text_16" decode="decode">￥</Text>
                                        <Text className="text_18" decode="decode">300</Text>
                                    </View>
                                    <Text className="text_20" decode="decode">3人喜欢</Text>
                                </View>
                                <View className="bottom-group flex-row">
                                    <Image className="image_10 image_11"
                                           src={imgurl}/>
                                    <View className="right-group flex-col">
                                        <Text className="text_21 nickname" decode="decode">尼</Text>
                                        <Text className="text_23" decode="decode">item.time发布</Text>
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

export default productList3
