import React, {Component, Fragment} from 'react'
import Taro from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import './test1.scss'
import CourseCard1 from "../../components/courseCard/courseCard";

class Index extends Component {
    render() {
        return (
            <View
                // src='//img14.360buyimg.com/img/jfs/t1/113685/12/23544/109189/624c2783Ea6f16c75/e86e0830d0e2dca3.jpg'
                className='index'
            >
                <View className='cnt_col'>
                    <View className='cnt'>
                        <View className='cnt_col1'>
                            <Text className='txt'>Hello Liana</Text>
                            <View className='cnt1'>
                                <Text className='txt1'>You’ve got&</Text>
                                <Text className='txt2'>lt;br/>4 t</Text>
                            </View>
                        </View>
                        <View className='cnt2'>
                            <View src='' className='icon_wrap'>
                                <Image
                                    src='//img13.360buyimg.com/img/jfs/t1/217882/24/16841/5069/624c2784E75ddb45e/26d370ab14dd0d2d.png'
                                    className='icon'
                                > </Image>
                            </View>
                            <View className='wrapper'>
                                <View className='wrapper1'>
                                    <View className='section_wrap'>
                                        <Text className='section'>3</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <Text className='txt3'>课程列表</Text>
                    <Text className='txt4'>进行中的课程</Text>
                    <CourseCard1 />


                    {/*<View className='cnt3'>*/}
                    {/*    <Text className='txt5'>Mathematics</Text>*/}
                    {/*    <Text className='txt6'>Chemistry</Text>*/}
                    {/*    <View className='cnt_col2'>*/}
                    {/*        <Image*/}
                    {/*            src='//img30.360buyimg.com/img/jfs/t1/136693/27/26531/195/624c2784E48a29a43/249a3398bb01e244.png'*/}
                    {/*            className='icon1'*/}
                    {/*        ></Image>*/}
                    {/*        <Text className='txt7'>Literature</Text>*/}
                    {/*    </View>*/}
                    {/*</View>*/}
                    {/*<Text className='txt8'>Your schedule</Text>*/}
                    {/*<Text className='txt4'>Upcoming classes and tasks</Text>*/}
                    {/*<View className='cnt4'>*/}
                    {/*    <View className='cnt_col3'>*/}
                    {/*        <Text className='txt9'>Physics</Text>*/}
                    {/*        <Text className='txt10'>Chapter 3: Force</Text>*/}
                    {/*        <View className='cnt5'>*/}
                    {/*            <Image*/}
                    {/*                src='//img12.360buyimg.com/img/jfs/t1/204451/11/20764/370/624c2784E749adb03/9449dd5819fbe547.png'*/}
                    {/*                className='icon2'*/}
                    {/*            ></Image>*/}
                    {/*            <Text className='txt11'>09:30</Text>*/}
                    {/*        </View>*/}
                    {/*        <View className='cnt6'>*/}
                    {/*            <Image*/}
                    {/*                src='//img12.360buyimg.com/img/jfs/t1/134369/33/24426/801/624c2784E7a81476a/182a15a0efd3581b.png'*/}
                    {/*                className='icon2'*/}
                    {/*            ></Image>*/}
                    {/*            <Text className='txt12'>Alex Jesus</Text>*/}
                    {/*        </View>*/}
                    {/*        <View className='cnt7'>*/}
                    {/*            <Image*/}
                    {/*                src='//img10.360buyimg.com/img/jfs/t1/210799/17/19956/807/624c2784E4a3735fb/d78b36e19a95738a.png'*/}
                    {/*                className='icon3'*/}
                    {/*            ></Image>*/}
                    {/*            <Text className='txt13'>Google Meet</Text>*/}
                    {/*        </View>*/}
                    {/*    </View>*/}
                    {/*    <View className='cnt_col4'>*/}
                    {/*        <Image*/}
                    {/*            src='//img20.360buyimg.com/img/jfs/t1/144074/2/25733/193/624c2784Ed40dc109/782bb7626d501335.png'*/}
                    {/*            className='img'*/}
                    {/*        ></Image>*/}
                    {/*        <Image*/}
                    {/*            src='//img10.360buyimg.com/img/jfs/t1/102569/34/26118/9287/624c2784E41e9be60/fc8f29cbb04f32b3.png'*/}
                    {/*            className='img1'*/}
                    {/*        ></Image>*/}
                    {/*    </View>*/}
                    {/*</View>*/}
                    {/*<View className='cnt8'>*/}
                    {/*    <View className='cnt_col5'>*/}
                    {/*        <Image*/}
                    {/*            src='//img30.360buyimg.com/img/jfs/t1/123765/5/26946/1118/624c2784Edf984cbd/1b0c7262db8c9107.png'*/}
                    {/*            className='icon4'*/}
                    {/*        ></Image>*/}
                    {/*        <Text className='txt14'>Home</Text>*/}
                    {/*    </View>*/}
                    {/*    <View className='cnt_col6'>*/}
                    {/*        <Image*/}
                    {/*            src='//img10.360buyimg.com/img/jfs/t1/111869/39/26767/592/624c2784Eece9557f/853da201b6f9718f.png'*/}
                    {/*            className='icon5'*/}
                    {/*        ></Image>*/}
                    {/*        <Text className='txt15'>Tasks</Text>*/}
                    {/*    </View>*/}
                    {/*    <View className='wrapper2'>*/}
                    {/*        <View className='cnt9'>*/}
                    {/*            <View className='wrapper3'>*/}
                    {/*                <View className='cnt_col7'>*/}
                    {/*                    <Image*/}
                    {/*                        src='//img11.360buyimg.com/img/jfs/t1/178313/6/22800/357/624c2784E116905a2/d6ae450ca6faaad5.png'*/}
                    {/*                        className='icon6'*/}
                    {/*                    ></Image>*/}
                    {/*                    <Text className='txt16'>Classroom</Text>*/}
                    {/*                </View>*/}
                    {/*            </View>*/}
                    {/*            <View className='wrapper4'>*/}
                    {/*                <View className='cnt_col8'>*/}
                    {/*                    <Image*/}
                    {/*                        src='//img30.360buyimg.com/img/jfs/t1/198293/9/21564/611/624c2784Ec872c5e9/d57a9c06b85d4e23.png'*/}
                    {/*                        className='icon7'*/}
                    {/*                    ></Image>*/}
                    {/*                    <Text className='txt17'>Discuss</Text>*/}
                    {/*                </View>*/}
                    {/*            </View>*/}
                    {/*        </View>*/}
                    {/*    </View>*/}
                    {/*</View>*/}
                </View>
                {/*<View className='wrapper5'>*/}
                {/*    <View className='cnt10'>*/}
                {/*        <View className='cnt_col9'>*/}
                {/*            <View className='icon_wrap1'>*/}
                {/*                <Image*/}
                {/*                    src='//img14.360buyimg.com/img/jfs/t1/103150/15/26260/316/624c2784E46046bad/8f909e9ad6f9b26e.png'*/}
                {/*                    className='icon8'*/}
                {/*                ></Image>*/}
                {/*            </View>*/}
                {/*            <Image*/}
                {/*                src='//img20.360buyimg.com/img/jfs/t1/98958/27/27020/392/624c2784E1cea510f/777b3c1d913623fd.png'*/}
                {/*                className='icon9'*/}
                {/*            ></Image>*/}
                {/*        </View>*/}
                {/*        <View className='cnt_col10'>*/}
                {/*            <Image*/}
                {/*                src='//img11.360buyimg.com/img/jfs/t1/184909/17/22200/174/624c2784Ea179998d/73a9f6ee698f17db.png'*/}
                {/*                className='icon10'*/}
                {/*            ></Image>*/}
                {/*            <View className='cnt_col11'>*/}
                {/*                <Image*/}
                {/*                    src='//img12.360buyimg.com/img/jfs/t1/184411/28/22666/263/624c2784E65b789cd/15f683b2d1e2beb3.png'*/}
                {/*                    className='icon11'*/}
                {/*                ></Image>*/}
                {/*                <Image*/}
                {/*                    src='//img13.360buyimg.com/img/jfs/t1/107750/34/28528/238/624c2784E62b162c1/69aea021b0808bc6.png'*/}
                {/*                    className='img2'*/}
                {/*                ></Image>*/}
                {/*                <Image*/}
                {/*                    src='//img10.360buyimg.com/img/jfs/t1/104705/3/27287/178/624c2784Ed0e142a0/4e7febc073df3fc1.png'*/}
                {/*                    className='img3'*/}
                {/*                ></Image>*/}
                {/*                <Image*/}
                {/*                    src='//img12.360buyimg.com/img/jfs/t1/116451/38/21990/179/624c2784E83226aed/ad8811a0ef30bd07.png'*/}
                {/*                    className='img4'*/}
                {/*                ></Image>*/}
                {/*                <Image*/}
                {/*                    src='//img20.360buyimg.com/img/jfs/t1/149602/20/25159/206/624c2784Ec02994f4/08200b8b284b3996.png'*/}
                {/*                    className='img5'*/}
                {/*                ></Image>*/}
                {/*                <Image*/}
                {/*                    src='//img30.360buyimg.com/img/jfs/t1/220884/15/16701/178/624c2784Ea74a3c4e/46d769a7f99b0cc6.png'*/}
                {/*                    className='img6'*/}
                {/*                ></Image>*/}
                {/*            </View>*/}
                {/*        </View>*/}
                {/*    </View>*/}
                {/*</View>*/}
                {/*<View className='icon_wrap2'>*/}
                {/*    <Image*/}
                {/*        src='//img13.360buyimg.com/img/jfs/t1/135232/25/27683/2203/624c2784E1147f2f4/9376f1299a8126f4.png'*/}
                {/*        className='icon12'*/}
                {/*    ></Image>*/}
                {/*</View>*/}
                {/*<View className='cnt_col12'>*/}
                {/*    <Image*/}
                {/*        src='//img11.360buyimg.com/img/jfs/t1/129421/39/26527/191/624c2784E54cf2187/00c115dbec8d05bc.png'*/}
                {/*        className='icon13'*/}
                {/*    ></Image>*/}
                {/*    <Text className='txt18'>Biology</Text>*/}
                {/*</View>*/}
                {/*<View className='cnt_col13'>*/}
                {/*    <Image*/}
                {/*        src='//img11.360buyimg.com/img/jfs/t1/217267/18/16844/191/624c2784Ea516bd92/c6a6f0e1dfd3098e.png'*/}
                {/*        className='icon14'*/}
                {/*    ></Image>*/}
                {/*    <Text className='txt18'>Physics</Text>*/}
                {/*</View>*/}
            </View>
        )
    }
}

export default Index
