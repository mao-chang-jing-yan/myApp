import React from 'react'
import Taro from '@tarojs/taro'
import {View, Text, Image, ScrollView} from '@tarojs/components'
import './classRoomTest.scss'

class Index extends React.Component {
    render() {
        return (
            <View className="page">
                <View
                    src='//img12.360buyimg.com/img/jfs/t1/194915/18/22791/197737/62527ca6E20be24fa/0e8ce48c159e9602.jpg'
                    className='index'
                >
                    <View className='cnt'>
                        <View className='cnt_col'>
                            <Text className='txt'>Today, 17 Sept</Text>
                            <Text className='tit'>Classroom</Text>
                        </View>
                        <View className='cnt1'>
                            <Image
                                src='//img20.360buyimg.com/img/jfs/t1/185286/4/22815/231/62527ca7E95b48761/82c78f6a92c536d2.png'
                                className='icon'
                            />
                            <Text className='tit1'>Add Class</Text>
                        </View>
                    </View>
                    <View className='wrapper'>
                        <View className='cnt2'>
                            <Image
                                src='//img10.360buyimg.com/img/jfs/t1/178242/7/22527/103326/62527ca7E89531a67/0fe01dfc4cf9ca08.png'
                                className='main_img'
                            />
                            <View className='cnt3'>
                                <View className='cnt4'>
                                    <Image
                                        src='//img12.360buyimg.com/img/jfs/t1/207500/33/19477/353/62527ca7E1e969b94/83c7ac60865cb932.png'
                                        className='icon1'
                                    />
                                    <Text className='txt1'>Live</Text>
                                </View>
                                <View className='wrapper1'>
                                    <View className='section_wrap'>
                                        <Text className='section'>HD</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View className='cnt5'>
                        <View className='cnt6'>


                            {/*<View className='cnt_col_item'>*/}
                            {/*    <Image src={"//img10.360buyimg.com/img/jfs/t1/217441/4/17046/492/62527ca7Ed725abe5/0369689fbac0873b.png"} className="icon"/>*/}
                            {/*    <View>Physics</View>*/}
                            {/*</View>*/}

                            <View className='cnt_col1'>
                                <Image
                                    src='//img10.360buyimg.com/img/jfs/t1/217441/4/17046/492/62527ca7Ed725abe5/0369689fbac0873b.png'
                                    className='icon2'
                                />
                                <Image
                                    src='//img13.360buyimg.com/img/jfs/t1/209896/7/20215/181/62527ca7E1fcd2221/6fa59149fd409451.png'
                                    className='img'
                                />
                                <Image
                                    src='//img30.360buyimg.com/img/jfs/t1/122042/37/25562/504/62527ca7E20a3661a/5273bc5398150d0c.png'
                                    className='icon2'
                                />
                            </View>
                            <View className='cnt_col2'>
                                <Text className='txt2'>Physics</Text>
                                <Text className='txt3'>Chapter 3: Force</Text>
                            </View>
                        </View>
                        <View className='cnt7'>
                            <View className='cnt_col3'>
                                <Image
                                    src='//img14.360buyimg.com/img/jfs/t1/197749/18/21611/801/62527ca7E4214794e/a44710b276f80d43.png'
                                    className='icon2'
                                />
                                <Image
                                    src='//img12.360buyimg.com/img/jfs/t1/85201/2/26611/334/62527ca7E41bd6b23/f86a71c6378cee50.png'
                                    className='icon3'
                                />
                            </View>
                            <View className='cnt_col4'>
                                <Text className='txt4'>Alex Jesus</Text>
                                <Text className='txt5'>45 Inrolled</Text>
                            </View>
                        </View>
                    </View>
                    <View className='cnt8'>
                        <Text className='txt6'>Description</Text>
                        <Text className='select_tab'>Discussion</Text>
                        <Text className='txt8'>Resources</Text>
                    </View>
                    {/*<Image*/}
                    {/*    src='//img14.360buyimg.com/img/jfs/t1/166052/30/22747/177/62527ca7E90c22e67/a06a9614057ef00f.png'*/}
                    {/*    className='img1'*/}
                    {/*/>*/}
                    <Text className='txt9'>About this class</Text>
                    <Text className='txt10'>
                        Force: The push or pull on an object with mass that causes it to
                        change its velocity.
                    </Text>
                    <Text className='txt11'>
                        Force is an external agent capable of changing the state of rest or motion of a particular body.
                        It has a magnitude and a direction. The direction towards which the force is applied is known as
                        the direction of the force and the application of force is the point where force is applied.
                    </Text>

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
