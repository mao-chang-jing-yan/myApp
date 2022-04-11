import React, {Fragment} from "react";
import {View} from "@tarojs/components";
import CourseCard1 from "../courseCard/courseCard";

import "./courseTimeLine.scss"

const TimeLineItem = (props) => {
    const courseInfo = props?.courseInfo || {};
    const selected = courseInfo?.selected;
    const isLast = props?.isLast;

    return (
        <Fragment>
            <View className={selected?"time-line-item-selected":"time-line-item"} style={{marginTop: "5px"}}>
                <View className={"time"}>
                    9:00~10:30
                </View>
                <View style={{display: "flex", flexDirection: "column", alignItems: "center", width: "5%"}}>
                    <View className='wrapper'>
                        <View className='color_view'> </View>
                    </View>
                    {
                        isLast?"":<View className='split_hor'> </View>
                    }
                </View>
                <CourseCard1 courseInfo={courseInfo} style={{width: "70%"}} selected={selected} showTime={false}/>
            </View>
        </Fragment>
    )
}


const TimeLine = (props) => {
    const courseList = props?.courseList || [];
    return (
        <Fragment>
            {
                courseList.map((item, index)=>{
                    const isLast = index === courseList.length - 1;
                    return(
                        <TimeLineItem key={item + index} courseInfo={item} isLast={isLast}/>
                    )
                })
            }

        </Fragment>
    )
}


export default TimeLine;
