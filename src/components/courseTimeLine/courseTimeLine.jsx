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
                    <View style={{width: "100%", overflow: "hidden"}}>
                        9:00
                    </View>
                    <View style={{width: "100%", overflow: "hidden", opacity: 0.6}}>
                        10:30
                    </View>
                </View>
                <View className='at-col at-col-1 time-line-item-icons'
                    // style={{border: "1px solid red"}}
                >
                    <View className='wrapper'>
                        <View className='color_view'> </View>
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

            {/*<View className={selected ? "time-line-item-selected" : "time-line-item"} style={{*/}
            {/*    marginTop: "5px",*/}
            {/*    marginLeft: 0,*/}
            {/*    display: "flex",*/}
            {/*    flexDirection: "row",*/}
            {/*    border: "1px solid red",*/}
            {/*}}>*/}


            {/*    <View className={"time"} style={{*/}
            {/*        width: "15%",*/}
            {/*        border: "1px solid red",*/}
            {/*        float: "left",*/}
            {/*        height: "100%",*/}
            {/*        left: 0,*/}

            {/*    }}>*/}
            {/*        <View style={{width: "100%", overflow: "hidden"}}>*/}
            {/*            9:00*/}
            {/*        </View>*/}
            {/*        <View style={{width: "100%", overflow: "hidden", opacity: 0.6}}>*/}
            {/*            10:30*/}
            {/*        </View>*/}
            {/*    </View>*/}
            {/*    <View style={{*/}
            {/*        display: "flex", flexDirection: "column", alignItems: "center", width: "15%",*/}
            {/*        border: "1px solid red",*/}
            {/*        left: "15%",*/}
            {/*    }}>*/}
            {/*        <View className='wrapper'>*/}
            {/*            <View className='color_view'> </View>*/}
            {/*        </View>*/}
            {/*        {*/}
            {/*            isLast ? "" : <View className='split_hor'> </View>*/}
            {/*        }*/}
            {/*    </View>*/}
            {/*    <CourseCard1 courseInfo={courseInfo} style={{width: "70%"}} selected={selected} showTime={false}/>*/}
            {/*</View>*/}
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
                    return (
                        <TimeLineItem key={item + index} courseInfo={item} isLast={isLast}/>
                    )
                })
            }

        </Fragment>
    )
}


export default TimeLine;
