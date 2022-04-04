import React, {Fragment} from "react";
import {Image, SwiperItem, Text, View} from "@tarojs/components";
import "./comment.scss"


const commentList = (props, comments) => {
    const imgurl = "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto"

    comments = [
        {
            id: "",
            text: "efusfuyiwfe",
            user_info: {id: "", nick_name: "efwefew", avatar_url: imgurl},
            time: "efwef",
            show: false,
            child_comments: [
                {id: "", user_info: {id: "", nick_name: "efwefew", avatar_url: imgurl}, text: "4524", time: ""},
                {id: "", user_info: {id: "", nick_name: "efwefew", avatar_url: imgurl}, text: "324", time: ""},
            ]
        },
    ]
    return (
        <Fragment>
            {
                comments.map((first_comment_item, first_comment_index) => {
                    return (
                        <View key={"comment" + first_comment_index}>
                            <View className="comment_item_first">
                                <View className="top">
                                    <Image
                                        className="ava_image"
                                        src={first_comment_item.user_info.avatar_url}> </Image>
                                    <View className="nickname"> {first_comment_item.user_info.nick_name}</View>
                                    {/*<Text className="cuIcon-delete"*/}
                                    {/*> </Text>*/}
                                </View>
                                <View className="content">{first_comment_item.text}</View>
                                <View className="time">{first_comment_item.time}</View>
                            </View>
                            {
                                first_comment_item.child_comments.length > 0 && !first_comment_item.show ?
                                    <View className="more" onClick={() => {
                                        comments[first_comment_index].show = true
                                    }}>展开
                                        <Text className="cuIcon-unfold"> </Text>
                                    </View> : ""
                            }
                            {
                                first_comment_item.child_comments.length <= 0 || !first_comment_item.show ? "" :
                                    <Fragment>
                                        {
                                            first_comment_item.child_comments.map((child_comment_item, child_comment_index) => {
                                                return (
                                                    <Fragment key={"comment_child" + child_comment_index}>
                                                        <View className="comment_item_child">
                                                            <View className="top">
                                                                <Image
                                                                    className="ava_image"
                                                                    src={child_comment_item.user_info.avatar_url}> </Image>
                                                                <View
                                                                    className="nickname">{child_comment_item.user_info.nick_name}</View>
                                                                {/*<Text className="cuIcon-delete"*/}
                                                                {/*> </Text>*/}
                                                            </View>
                                                            <View className="content">{child_comment_item.text}</View>
                                                            <View className="time">{child_comment_item.time}</View>
                                                        </View>
                                                        {/*<View className="comment_item_child">*/}
                                                        {/*    <View className="top">*/}
                                                        {/*        <Image style={{width: "20px", height: "20px"}}*/}
                                                        {/*               src={imgUrl}/>*/}
                                                        {/*        <View className="nickname">{"{child.nickname}"}</View>*/}
                                                        {/*        <Text className="cuIcon-delete"> </Text>*/}
                                                        {/*    </View>*/}
                                                        {/*    <View className="content">{"{child.content}"}</View>*/}
                                                        {/*    <View className="time">{"{child.time}"}</View>*/}
                                                        {/*</View>*/}
                                                        {
                                                            first_comment_item.child_comments.length - 1 !== child_comment_index ? "" :
                                                                <View className="more" onClick={() => {
                                                                    comments[first_comment_index].show = false
                                                                }}>收起
                                                                    <Text className="cuIcon-fold"> </Text>
                                                                </View>
                                                        }

                                                    </Fragment>
                                                )
                                            })
                                        }
                                    </Fragment>
                            }
                        </View>
                    )
                })
            }
            {
                comments.length > 0 ? "" :
                    <View className="nocontent">
                        <Image lazyLoad className="nocontent-image" mode="aspectFit"
                               src={require("../../tmp/imgs/empty.png")}/>
                        <View className="blank_text">暂无留言哦~</View>
                    </View>
            }


        </Fragment>

    )
}

export default commentList
