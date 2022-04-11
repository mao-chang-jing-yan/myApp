import React, {Fragment} from "react";
import {Image, SwiperItem, Text, View} from "@tarojs/components";
import "./courseCard.scss"


const CourseCard1 = (props) => {
    console.log(props)
    const height = props?.style?.height || "auto";
    const width = props?.style?.width || "auto";
    // const backgroundColor = props?.style?.backgroundColor || "";
    // const color = props?.style?.color || "";
    const showTime = props?.showTime;
    const selected = props?.selected;


    let courseInfo = props?.courseInfo || {};
    courseInfo.id = courseInfo.id ? courseInfo.id : "";
    courseInfo.time = courseInfo.time ? courseInfo.time : "09:30";
    courseInfo.name = courseInfo.name ? courseInfo.name : "Physics";
    courseInfo.teacher = courseInfo.teacher ? courseInfo.teacher : "Alex Jesus";
    courseInfo.chapter = courseInfo.chapter ? courseInfo.chapter : "Chapter 3: Force";
    courseInfo.type = courseInfo.type ? courseInfo.type : "Google Meet";
    courseInfo.imageUrl = courseInfo.imageUrl ? courseInfo.imageUrl : "//img10.360buyimg.com/img/jfs/t1/102569/34/26118/9287/624c2784E41e9be60/fc8f29cbb04f32b3.png";

    return (
        <Fragment>
            <View className='CourseCard1-item'
                  style={{height: height, width: width, backgroundColor: selected?"":"rgb(169,255,253, 0.3)", color: selected?"":"black"}}>
                <View className="CourseCard1-item-container">
                    <View className='text-list'>
                        <Text className='name'>{courseInfo.name}</Text>
                        <Text className='chapter'>{courseInfo.chapter}</Text>
                        {
                            !showTime ? "" : <View className='text-list-item'>
                                <Image
                                    src='//img12.360buyimg.com/img/jfs/t1/204451/11/20764/370/624c2784E749adb03/9449dd5819fbe547.png'
                                    className='icon'
                                />
                                <Text className='text'>{courseInfo.time}</Text>
                            </View>
                        }

                        <View className='text-list-item'>
                            <Image
                                src='//img12.360buyimg.com/img/jfs/t1/134369/33/24426/801/624c2784E7a81476a/182a15a0efd3581b.png'
                                className='icon'
                            />
                            <Text className='text'>{courseInfo.teacher}</Text>
                        </View>
                        <View className='text-list-item'>
                            <Image
                                src='//img10.360buyimg.com/img/jfs/t1/210799/17/19956/807/624c2784E4a3735fb/d78b36e19a95738a.png'
                                className='icon'
                            />
                            <Text className='text'>{courseInfo.type}</Text>
                        </View>
                    </View>
                    <View className={showTime ? "image-list" : "image-list-no-time"}>
                        <Image
                            // src='//img20.360buyimg.com/img/jfs/t1/144074/2/25733/193/624c2784Ed40dc109/782bb7626d501335.png'
                            // src='//img11.360buyimg.com/img/jfs/t1/90056/9/24703/195/6252df93E0e9de164/032458f69c2613f7.png'
                            src={selected?"//img20.360buyimg.com/img/jfs/t1/144074/2/25733/193/624c2784Ed40dc109/782bb7626d501335.png":
                                "//img11.360buyimg.com/img/jfs/t1/90056/9/24703/195/6252df93E0e9de164/032458f69c2613f7.png"
                            }
                            className='img'
                        />
                        <Image
                            src={courseInfo.imageUrl}
                            className='img1'
                        />
                    </View>
                </View>
            </View>

        </Fragment>
    )

}


export default CourseCard1;
