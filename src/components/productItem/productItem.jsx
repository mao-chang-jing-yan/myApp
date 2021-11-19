import {Fragment} from "react";
import {Image, View} from "@tarojs/components";
import "./productItem.scss"

const productItem = (props, products) => {
    const imgurl = "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto"

    return (
        <Fragment>
            {
                products.map((item, index) => {
                    return (
                        <view className={"item-box"} key={index} onClick={props.sw}>
                            <Image className={"image"} src={item.imgUrl}/>
                            <View className={"name"}>{item.name}</View>
                            <View className={"bottom"}>
                                <View>
                                    <View className={"price"}>¥ {item.price}</View>
                                    <View className={"oldprice"}>¥ {item.oldPrice}</View>
                                </View>
                                <View>
                                    <View className={"user"}>
                                        <Image className={"icon"} src={item.userIcon}/>
                                        <View className={"name"}>{item.userName}</View>
                                    </View>
                                    <View className={"like"}>
                                        <Image className={"icon"} src={imgurl}/>
                                    </View>
                                </View>

                            </View>
                        </view>
                    )
                })
            }

        </Fragment>
    )

}
// <view className={"item-box"} id={index}>
//     <Image className={"image"} src={this.imgurl}/>
//     <View className={"name"}>2314324</View>
//     <View className={"bottom"}>
//         <View>
//             <View className={"price"}>¥ 300</View>
//             <View className={"oldprice"}>¥ 200</View>
//         </View>
//         <View>
//             <View className={"user"}>
//                 <Image className={"icon"} src={this.imgurl}/>
//                 <View>name</View>
//             </View>
//             <View className={"like"}>
//                 <Image className={"icon"} src={this.imgurl}/>
//             </View>
//         </View>
//
//     </View>
// </view>


export default productItem
