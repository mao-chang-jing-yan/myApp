import React, {Component, Fragment} from 'react'
import Taro from '@tarojs/taro'
import {View, Text, Image, Picker, ScrollView} from '@tarojs/components'
import './tasks.scss'
import './tasks2.scss'
import {AtCalendar, AtList, AtListItem, AtTabs, AtTabsPane, AtTimeline} from "taro-ui";
import CourseCard1 from "../../components/courseCard/courseCard";
import TimeLine from "../../components/courseTimeLine/courseTimeLine";
import {connect} from "react-redux";
import * as utils from "../../utils";
import {actionCreators} from "../../store/tasks";


class Index extends Component {
    constructor() {
        super(...arguments)
        this.props.switchTab(null, this.props.tab_info);

    }

    componentDidMount() {

    }


    render() {
        return (
            <View
                src='//img14.360buyimg.com/img/jfs/t1/119751/24/23868/108987/6252df93E1d890cb3/b52b331a3d7a80ef.jpg'
                className='index'
            >
                {/*<View className='cnt'>*/}
                {/*    <View className='cnt_col'>*/}
                {/*        <Text className='tab_hd_txt'>17 September</Text>*/}
                {/*        <Text className='txt'>Today</Text>*/}
                {/*    </View>*/}
                {/*    <View className='cnt1'>*/}
                {/*        <Image*/}
                {/*            src='//img20.360buyimg.com/img/jfs/t1/185286/4/22815/231/62527ca7E95b48761/82c78f6a92c536d2.png'*/}
                {/*            className='icon'*/}
                {/*        />*/}
                {/*        <Text className='txt1'>Add Task</Text>*/}
                {/*    </View>*/}
                {/*</View>*/}
                {/*<View className='cnt2'>*/}
                {/*    <View className='cnt3'>*/}
                {/*        <Text className='txt2'>Mon</Text>*/}
                {/*        <Text className='txt3'>Tue</Text>*/}
                {/*        <Text className='txt3'>Wed</Text>*/}
                {/*    </View>*/}
                {/*    <Text className='txt4'>Thu</Text>*/}
                {/*    <View className='cnt4'>*/}
                {/*        <Text className='txt2'>Fri</Text>*/}
                {/*        <Text className='txt5'>Sat</Text>*/}
                {/*        <Text className='txt3'>Sun</Text>*/}
                {/*    </View>*/}
                {/*</View>*/}
                {/*<View className='cnt5'>*/}
                {/*    <Text className='number'>14</Text>*/}
                {/*    <Text className='number1'>15</Text>*/}
                {/*    <Text className='number2'>16</Text>*/}
                {/*    <Text className='number3'>17</Text>*/}
                {/*    <Text className='number4'>18</Text>*/}
                {/*    <Text className='number5'>19</Text>*/}
                {/*    <Text className='number6'>20</Text>*/}
                {/*</View>*/}
                {/*<View className='tab_active'> </View>*/}
                {/*<View className='cnt6'>*/}
                {/*    <View className='cnt7'>*/}
                {/*        <View className='cnt_col1'>*/}
                {/*            <Text className='txt6'>9:30</Text>*/}
                {/*            <Text className='txt7'>10:20</Text>*/}
                {/*        </View>*/}
                {/*        <View className='view'> </View>*/}
                {/*        <View className='cnt_col2'>*/}
                {/*            <Text className='txt6'>11:00</Text>*/}
                {/*            <Text className='txt7'>11:50</Text>*/}
                {/*        </View>*/}
                {/*        <View className='view1'> </View>*/}
                {/*        <View className='cnt_col3'>*/}
                {/*            <Text className='txt6'>12:20</Text>*/}
                {/*            <Text className='txt7'>13:00</Text>*/}
                {/*        </View>*/}
                {/*    </View>*/}
                {/*    <View className='cnt_col4'>*/}
                {/*        <View className='wrapper'>*/}
                {/*            <View className='color_view'> </View>*/}
                {/*        </View>*/}
                {/*        <View className='split_hor'> </View>*/}
                {/*        <View className='view2'> </View>*/}
                {/*        <View className='split_hor1'> </View>*/}
                {/*        <View className='view2'> </View>*/}
                {/*    </View>*/}
                {/*    <View className='wrapper1'>*/}
                {/*        <View className='cnt_col5'>*/}
                {/*            <View className='wrapper2'>*/}
                {/*                <View className='cnt8'>*/}
                {/*                    <View className='cnt_col6'>*/}
                {/*                        <Text className='txt8'>Physics</Text>*/}
                {/*                        <Text className='txt9'>Chapter 3: Force</Text>*/}
                {/*                        <View className='cnt9'>*/}
                {/*                            <Image*/}
                {/*                                src='//img14.360buyimg.com/img/jfs/t1/197749/18/21611/801/62527ca7E4214794e/a44710b276f80d43.png'*/}
                {/*                                className='icon1'*/}
                {/*                            />*/}
                {/*                            <Text className='txt10'>Alex Jesus</Text>*/}
                {/*                        </View>*/}
                {/*                        <View className='cnt10'>*/}
                {/*                            <Image*/}
                {/*                                src='//img10.360buyimg.com/img/jfs/t1/102125/18/27036/807/6252df93Ed2cc9660/742a062b8319d41d.png'*/}
                {/*                                className='icon2'*/}
                {/*                            />*/}
                {/*                            <Text className='txt11'>Google Meet</Text>*/}
                {/*                        </View>*/}
                {/*                    </View>*/}
                {/*                    <View className='cnt_col7'>*/}
                {/*                        <Image*/}
                {/*                            src='//img12.360buyimg.com/img/jfs/t1/127253/28/28249/186/6252df93Ecfdc753b/da70aa4bc939b9f1.png'*/}
                {/*                            className='img'*/}
                {/*                        />*/}
                {/*                        <Image*/}
                {/*                            src='//img14.360buyimg.com/img/jfs/t1/216245/5/17023/5878/6252df93E7a994545/ad519017043d687a.png'*/}
                {/*                            className='img1'*/}
                {/*                        />*/}
                {/*                    </View>*/}
                {/*                </View>*/}
                {/*            </View>*/}
                {/*            <View className='wrapper3'>*/}
                {/*                <View className='wrapper4'>*/}
                {/*                    <View className='cnt_col_list'>*/}
                {/*                        <View className='wrapper_item'>*/}
                {/*                            <View className='cnt11'>*/}
                {/*                                <View className='cnt_col8'>*/}
                {/*                                    <Text className='txt12'>Geography</Text>*/}
                {/*                                    <Text className='txt13'>*/}
                {/*                                        Chapter 12: Soil Profile*/}
                {/*                                    </Text>*/}
                {/*                                    <View className='cnt12'>*/}
                {/*                                        <Image*/}
                {/*                                            src='//img30.360buyimg.com/img/jfs/t1/100839/10/26541/818/6252df93E0e5fc400/70fce51f5766e4fb.png'*/}
                {/*                                            className='icon1'*/}
                {/*                                        />*/}
                {/*                                        <Text className='txt14'>Jenifer Clark</Text>*/}
                {/*                                    </View>*/}
                {/*                                    <View className='cnt13'>*/}
                {/*                                        <Image*/}
                {/*                                            src='//img10.360buyimg.com/img/jfs/t1/93629/14/27938/863/6252df93E34f212cc/df4ef1a57c8f8861.png'*/}
                {/*                                            className='icon3'*/}
                {/*                                        />*/}
                {/*                                        <Text className='txt15'>Zoom</Text>*/}
                {/*                                    </View>*/}
                {/*                                </View>*/}
                {/*                                <Image*/}
                {/*                                    src='//img13.360buyimg.com/img/jfs/t1/90888/34/27280/195/6252df93E60d46f8f/f4f4e7342cb02ebe.png'*/}
                {/*                                    className='img2'*/}
                {/*                                />*/}
                {/*                            </View>*/}
                {/*                        </View>*/}
                {/*                        <View className='wrapper_item1'>*/}
                {/*                            <View className='cnt11'>*/}
                {/*                                <View className='cnt_col9'>*/}
                {/*                                    <Text className='txt12'>Assignment</Text>*/}
                {/*                                    <Text className='txt13'>World Regional Pattern</Text>*/}
                {/*                                    <View className='cnt14'>*/}
                {/*                                        <Image*/}
                {/*                                            src='//img30.360buyimg.com/img/jfs/t1/124173/10/26761/823/6252df93Ef35adf02/a650ba949181f82f.png'*/}
                {/*                                            className='icon1'*/}
                {/*                                        />*/}
                {/*                                        <Text className='txt14'>Alexa Tenorio</Text>*/}
                {/*                                    </View>*/}
                {/*                                    <View className='cnt15'>*/}
                {/*                                        <Image*/}
                {/*                                            src='//img13.360buyimg.com/img/jfs/t1/97608/25/26700/291/6252df93E2d27990f/943f2345dd9e7d72.png'*/}
                {/*                                            className='icon4'*/}
                {/*                                        />*/}
                {/*                                        <Text className='txt16'>Google Docs</Text>*/}
                {/*                                    </View>*/}
                {/*                                </View>*/}
                {/*                                <Image*/}
                {/*                                    src='//img11.360buyimg.com/img/jfs/t1/90056/9/24703/195/6252df93E0e9de164/032458f69c2613f7.png'*/}
                {/*                                    className='img2'*/}
                {/*                                />*/}
                {/*                            </View>*/}
                {/*                        </View>*/}
                {/*                    </View>*/}
                {/*                </View>*/}
                {/*            </View>*/}
                {/*        </View>*/}
                {/*    </View>*/}
                {/*</View>*/}

                {/*<AtTimeline*/}
                {/*    customStyle={{width: "100%"}}*/}
                {/*    pending*/}
                {/*    items={[*/}
                {/*        {title: '刷牙洗脸', content: ['大概8:00'], icon: 'check-circle'},*/}
                {/*        {title: "9:00", content: [<CourseCard1/>], icon: 'clock'},*/}
                {/*        {title: '上班', content: ['查看邮件', '写PPT', '发送PPT给领导'], icon: 'clock'},*/}
                {/*        {title: '睡觉', content: ['不超过23:00'], icon: 'clock'}*/}
                {/*    ]}*/}
                {/*>*/}
                {/*</AtTimeline>*/}
                <AtTabs
                    current={this.props.tab_info.current}
                    scroll
                    // tabList={[
                    //     {title: '1'},
                    //     {title: '2'},
                    //     {title: '1月1日'},
                    //     {title: '资源'},
                    //     // {title: '资源'},
                    //     // {title: '资源'},
                    //     // {title: '资源'},
                    //     // {title: '资源'},
                    // ]}
                    tabList={this.props.tab_info.titles}
                    onClick={(index) => {
                        this.props.switchTab(index, this.props.tab_info);
                    }}
                >
                    {
                        this.props.tab_info.titles.map((item, index) => {
                            return (
                                <AtTabsPane current={this.props.tab_info.current} index={index} key={item + index}>
                                    <ScrollView scrollY={true}>
                                        <View style={{marginTop: "20px"}}>
                                            <TimeLine courseList={this.props.course_info_list}/>
                                        </View>
                                    </ScrollView>

                                </AtTabsPane>
                            )
                        })
                    }


                </AtTabs>
                {/*<View>*/}
                {/*    <Picker mode='date' onChange={this.onDateChange}>*/}
                {/*        <AtList>*/}
                {/*            <AtListItem title='请选择日期' extraText={this.state.dateSel}/>*/}
                {/*        </AtList>*/}
                {/*    </Picker>*/}
                {/*</View>*/}
                {/*<AtCalendar />*/}

            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const index = state.get("tasks")
    return {
        // searchStr: home.get("searchStr"),
        course_info_list: index.get("course_info_list").toJS() || [],
        tab_info: index.get("tab_info").toJS(),
        // currentPageUrl:state.currentPageUrl7
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        initData() {

        },
        switchTab(index, tab_info) {
            dispatch(actionCreators.getCourseInfoList(index, tab_info))
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProp)(Index);
