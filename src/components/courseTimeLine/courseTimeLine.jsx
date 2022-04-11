import React, {Fragment} from "react";
import {Text, View} from "@tarojs/components";
import CourseCard1 from "../courseCard/courseCard";

import "./courseTimeLine.scss"

const TimeLineItem = (props) => {
    const courseInfo = props?.courseInfo || {};
    const selected = courseInfo?.selected;
    const isLast = props?.isLast;

    return (
        <Fragment>
            <View className='at-row at-row__justify--start time-line-item'
                // style={{width: "100%", border: "1px solid red"}}
            >
                <View className='at-col at-col-2 time-line-item-time'
                    // style={{border: "1px solid red"}}
                >
                    <View style={{width: "100%", overflow: "hidden", textAlign: "center"}}>
                        9:00
                    </View>
                    <View style={{width: "100%", overflow: "hidden", textAlign: "center", opacity: 0.6}}>
                        10:30
                    </View>
                </View>
                <View className='at-col at-col-1 time-line-item-icons'
                    // style={{border: "1px solid red"}}
                >
                    <View className='wrapper'>
                        {
                            !selected ? "" : <View className='color_view'> </View>
                        }
                    </View>
                    {
                        isLast ? "" : <View className='split_hor'> </View>
                    }
                </View>
                <View className='at-col at-col-9'
                    // style={{border: "1px solid red"}}
                >
                    <CourseCard1 courseInfo={courseInfo} selected={selected} showTime={false}/>
                </View>
            </View>
        </Fragment>
    )
}


const TimeLine = (props) => {
    const courseList = props?.courseList || [];
    return (
        <Fragment>
            {
                courseList.map((item, index) => {
                    const isLast = index === courseList.length - 1;
                    item.selected = true;
                    return (
                        <TimeLineItem key={item + index} courseInfo={item} isLast={isLast}/>
                    )
                })
            }

        </Fragment>
    )
}


export default TimeLine;
