import React, {Fragment} from "react";
import {Image, View} from "@tarojs/components";
import "./productList.scss"

const productList = (props, products) => {
    // const imgurl = "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto"

    return (
        <Fragment>
            <View className={"product"}>
                {
                    products.map((item, index) => {
                        return (
                            <View
                                className='
                                at-row
                                product-item'
                                style={{textAlign: "center"}}
                                onClick={() => props.sw(item.id)}
                                key={item.name + item.id + index}
                            >
                                <View className='at-col at-col-3 image-box'>
                                    <Image className={"image"} src={item.img_url}/>
                                </View>
                                <View className='at-col at-col-9 detail'>
                                    <View className={"title"}>
                                        {item.name}
                                    </View>
                                    <View className={"detail-detail"}>
                                        detail {item.detail}
                                    </View>
                                    <View className={"detail-it"}>
                                        1fsjghd
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

export const productList2 = (props, products) => {
    const imgurl = "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto"

    return (
        <View className={"product2"}>
            {
                products.map((item, index) => {
                    return (
                        <View className={"item-box"} style={{marginLeft: index % 2 === 1 ? "2%" : "0",}} key={index}
                              onClick={()=>props.sw(item.id)}>
                            <Image className={"image"} src={item.img_url}/>
                            <View className={"name"}>{item.name}</View>
                            <View className={"bottom"}>
                                <View>
                                    <View className={"price"}>¥ {item.price}</View>
                                    <View className={"oldprice"}>¥ {item.old_price}</View>
                                </View>
                                <View>
                                    <View className={"user"}>
                                        <Image className={"icon"} src={item.user_icon}/>
                                        <View className={"name"}>{item.user_name}</View>
                                    </View>
                                    <View className={"like"}>
                                        <Image className={"icon"} src={imgurl}/>
                                    </View>
                                </View>

                            </View>
                        </View>
                    )
                })
            }

        </View>
    )

}
//<View className='at-row at-row--wrap'>
//   <View className='at-col at-col-4'>A</View>
//   <View className='at-col at-col-4'>B</View>
//   <View className='at-col at-col-4'>C</View>
//   <View className='at-col at-col-4'>D</View>
//   <View className='at-col at-col-4'>E</View>
// </View>

export default productList
