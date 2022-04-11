import React from 'react'
import Taro from '@tarojs/taro'
import {View, Text, Image, ScrollView, Video, SwiperItem, Swiper} from '@tarojs/components'
import './courseDetail.scss'
import {AtCalendar, AtTabs, AtTabsPane} from "taro-ui";
import CommentList from "../../components/comment/comment";


const item_info_list = [
    {
        text: "Physics",
        imgUrl: "//img10.360buyimg.com/img/jfs/t1/217441/4/17046/492/62527ca7Ed725abe5/0369689fbac0873b.png"
    },
    {
        text: "Chapter 3: Force",
        imgUrl: "//img30.360buyimg.com/img/jfs/t1/122042/37/25562/504/62527ca7E20a3661a/5273bc5398150d0c.png"
    },
    {
        text: "Alex Jesus",
        imgUrl: "//img14.360buyimg.com/img/jfs/t1/197749/18/21611/801/62527ca7E4214794e/a44710b276f80d43.png"
    },
    {
        text: "45 Inrolled",
        imgUrl: "//img12.360buyimg.com/img/jfs/t1/85201/2/26611/334/62527ca7E41bd6b23/f86a71c6378cee50.png"
    },
]

const item_info = (props, index) => {
    return (
        <View className='at-row at-row__justify--center' style={{
            // border: "1px solid red",
            // width: "100%"

        }}>
            <View className='at-col at-col-3'
                  style={{
                      lineHeight: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      // alignContent: "center",
                      // width: "100px"
                  }}
            >
                <Image
                    src={item_info_list[index].imgUrl}
                    // className='icon2'
                    // mode="aspectFill"
                    style={{
                        width: "15px",
                        height: "15px",
                        // border: "1px solid red",
                        display: "flex"
                    }}
                />
            </View>
            <Text className='at-col at-col-10' style={{
                // border: "1px solid red"
                // marginLeft: "10px"
            }}>
                {item_info_list[index].text}
            </Text>
        </View>
    )
}


const item_info_list_elem = (props) => {
    return (
        <View className='at-row at-row__justify--around' style={{fontSize: "15px", marginTop: "10px"}}>
            <View className='at-col at-col-5' style={{
                // border:"1px solid red"
            }}>
                <View>
                    {
                        item_info(props, 0)
                    }
                    {
                        item_info(props, 1)
                    }
                </View>

            </View>
            <View className='at-col at-col-5' style={{
                // border:"1px solid red"
            }}>
                <View>
                    {
                        item_info(props, 2)
                    }
                    {
                        item_info(props, 3)
                    }
                </View>
            </View>
        </View>
    )
}

class Index extends React.Component {
    constructor() {
        super(...arguments)
        this.state = {
            current: 0,
        }
    }

    handleClick(value) {
        this.setState({
            current: value
        })
    }

    render() {
        return (
            <View className="page">
                <View
                    src='//img12.360buyimg.com/img/jfs/t1/194915/18/22791/197737/62527ca6E20be24fa/0e8ce48c159e9602.jpg'
                    className='index'
                >


                    {/*<View className='cnt'>*/}
                    {/*    <View className='cnt_col'>*/}
                    {/*        <Text className='txt'>Today, 17 Sept</Text>*/}
                    {/*        <Text className='tit'>Classroom</Text>*/}
                    {/*    </View>*/}
                    {/*    <View className='cnt1'>*/}
                    {/*        <Image*/}
                    {/*            src='//img20.360buyimg.com/img/jfs/t1/185286/4/22815/231/62527ca7E95b48761/82c78f6a92c536d2.png'*/}
                    {/*            className='icon'*/}
                    {/*        />*/}
                    {/*        <Text className='tit1'>Add Class</Text>*/}
                    {/*    </View>*/}
                    {/*</View>*/}

                    <Swiper
                        autoplay={false}
                        indicatorActiveColor={"#FF6344"}
                        indicatorColor={"#fff"}
                        indicatorDots={true}
                        style={{height: "300px", marginTop: "7px", borderRadius: "5px", overflow: "hidden"}}
                    >
                        <SwiperItem style={{height: "100%"}}>
                            <Image
                                src='//img10.360buyimg.com/img/jfs/t1/178242/7/22527/103326/62527ca7E89531a67/0fe01dfc4cf9ca08.png'
                                className='main_img'
                                style={{width: "100%", height: "100%"}}
                            />
                        </SwiperItem>
                        <SwiperItem
                            // itemId={index} key={"index" + index}
                            style={{height: "100%"}}
                        >
                            <Video
                                // id='video'
                                src='https://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
                                // src=''
                                poster='//img20.360buyimg.com/img/jfs/t1/185286/4/22815/231/62527ca7E95b48761/82c78f6a92c536d2.png'
                                initialTime='0'
                                controls={true}
                                autoplay={false}
                                loop={false}
                                muted={false}
                                style={{width: "100%", height: "100%"}}
                            />
                        </SwiperItem>


                    </Swiper>
                    {/*<View className='wrapper'>*/}
                    {/*    <View className='cnt2'>*/}


                    {/*    </View>*/}
                    {/*</View>*/}

                    {
                        item_info_list_elem(this.props)
                    }

                    <AtTabs
                        current={this.state.current}
                        scroll
                        tabList={[
                            {title: '描述'},
                            {title: '讨论'},
                            {title: '资源'},
                        ]}
                        onClick={this.handleClick.bind(this)}>
                        <AtTabsPane current={this.state.current} index={0}>
                            <View style={{fontSize: "18px", textAlign: "left", height: "100px"}}>
                                <View className='at-article__h2'>
                                    关于本课程
                                </View>
                                <View className='at-article__p'>
                                    力是一种能够改变特定物体静止或运动状态的外部因素。
                                    它有大小和方向。施加力的方向称为力的方向和施力是施力的点。
                                </View>

                            </View>
                        </AtTabsPane>
                        <AtTabsPane current={this.state.current} index={1}>
                            <CommentList comments={""}/>
                            {/*<View style='font-size:18px;text-align:center;height:100px;'>标签页二的内容</View>*/}
                        </AtTabsPane>
                        <AtTabsPane current={this.state.current} index={2}>
                            <View style='font-size:18px;text-align:center;height:100px;'>标签页三的内容</View>
                        </AtTabsPane>
                    </AtTabs>


                    {/*<View className='wrapper2'>*/}
                    {/*    <View className='cnt9'>*/}
                    {/*        <View className='cnt_col5'>*/}
                    {/*            <Image*/}
                    {/*                src='//img30.360buyimg.com/img/jfs/t1/186990/27/23182/1031/62527ca7Eee45bb60/7233c45c1145347a.png'*/}
                    {/*                className='icon4'*/}
                    {/*            />*/}
                    {/*            <Text className='txt12'>Home</Text>*/}
                    {/*        </View>*/}
                    {/*        <View className='cnt_col5'>*/}
                    {/*            <View className='cnt10'>*/}
                    {/*                <Image*/}
                    {/*                    src='//img13.360buyimg.com/img/jfs/t1/100523/7/27821/193/62527ca7E39ad7bea/7f02e6a5add00768.png'*/}
                    {/*                    className='img2'*/}
                    {/*                />*/}
                    {/*                <Image*/}
                    {/*                    src='//img30.360buyimg.com/img/jfs/t1/179673/37/23190/190/62527ca7E451e9dec/c1f44c340d5a4a21.png'*/}
                    {/*                    className='img3'*/}
                    {/*                />*/}
                    {/*                <Image*/}
                    {/*                    src='//img10.360buyimg.com/img/jfs/t1/131740/26/20818/195/62527ca7E87552fb2/50f019b859008077.png'*/}
                    {/*                    className='img4'*/}
                    {/*                />*/}
                    {/*                <Image*/}
                    {/*                    src='//img20.360buyimg.com/img/jfs/t1/208191/26/20539/162/62527ca7E0a2af9f8/3726e03c8bad683c.png'*/}
                    {/*                    className='img5'*/}
                    {/*                />*/}
                    {/*                <Image*/}
                    {/*                    src='//img13.360buyimg.com/img/jfs/t1/91263/39/26540/174/62527ca7Ea3137522/d021b128caa9b60e.png'*/}
                    {/*                    className='img6'*/}
                    {/*                />*/}
                    {/*                <Image*/}
                    {/*                    src='//img10.360buyimg.com/img/jfs/t1/104971/15/27012/174/62527ca7Ef088e472/91f864b2b20b1d21.png'*/}
                    {/*                    className='img7'*/}
                    {/*                />*/}
                    {/*            </View>*/}
                    {/*            <Text className='txt12'>Tasks</Text>*/}
                    {/*        </View>*/}
                    {/*        <View className='cnt_col5'>*/}
                    {/*            <Image*/}
                    {/*                src='//img14.360buyimg.com/img/jfs/t1/120696/33/25975/442/62527ca7E465626ec/f29fc1942ff34ca8.png'*/}
                    {/*                className='icon5'*/}
                    {/*            />*/}
                    {/*            <Text className='txt13'>Classroom</Text>*/}
                    {/*        </View>*/}
                    {/*        <View className='cnt_col5'>*/}
                    {/*            <Image*/}
                    {/*                src='//img10.360buyimg.com/img/jfs/t1/140119/8/25698/611/62527ca7E47477f3c/76702d3be353a64f.png'*/}
                    {/*                className='icon6'*/}
                    {/*            />*/}
                    {/*            <Text className='txt12'>Chat</Text>*/}
                    {/*        </View>*/}
                    {/*    </View>*/}
                    {/*</View>*/}
                </View>
            </View>
        )
    }
}

export default Index
