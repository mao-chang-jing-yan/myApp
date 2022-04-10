import React, {Fragment} from "react";
import {Image, SwiperItem, Text, View} from "@tarojs/components";
import "./courseCard.scss"


const CourseCard1 = (props) => {
    console.log(props)
    let height = props?.style?.height || "auto";
    let width = props?.style?.width || "auto";

    return (
        <Fragment>
            <View className='CourseCard1-item' style={{height: height, width:width}}>
                <View className="CourseCard1-item-container">
                    <View className='text-list'>
                        <Text className='name'>Physics</Text>
                        <Text className='chapter'>Chapter 3: Force</Text>
                        <View className='cnt5'>
                            <Image
                                src='//img12.360buyimg.com/img/jfs/t1/204451/11/20764/370/624c2784E749adb03/9449dd5819fbe547.png'
                                className='icon2'
                            />
                            <Text className='time'>09:30</Text>
                        </View>
                        <View className='cnt6'>
                            <Image
                                src='//img12.360buyimg.com/img/jfs/t1/134369/33/24426/801/624c2784E7a81476a/182a15a0efd3581b.png'
                                className='icon2'
                            />
                            <Text className='teacher'>Alex Jesus</Text>
                        </View>
                        <View className='cnt7'>
                            <Image
                                src='//img10.360buyimg.com/img/jfs/t1/210799/17/19956/807/624c2784E4a3735fb/d78b36e19a95738a.png'
                                className='icon3'
                            />
                            <Text className='type'>Google Meet</Text>
                        </View>
                    </View>
                    <View className='image-list'>
                        <Image
                            src='//img20.360buyimg.com/img/jfs/t1/144074/2/25733/193/624c2784Ed40dc109/782bb7626d501335.png'
                            className='img'
                        />
                        <Image
                            src='//img10.360buyimg.com/img/jfs/t1/102569/34/26118/9287/624c2784E41e9be60/fc8f29cbb04f32b3.png'
                            className='img1'
                        />
                    </View>
                </View>
            </View>

        </Fragment>
    )

}


export default CourseCard1;
