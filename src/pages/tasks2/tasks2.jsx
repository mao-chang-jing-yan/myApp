import React from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './tasks2.scss'

class Tasks2 extends React.Component {
  render() {
    return (
      <View
        src='//img10.360buyimg.com/img/jfs/t1/80325/6/18032/183716/62810c2fEbfb82d13/d12c88f4ebd56e8c.jpg'
        className='index'
      >
        <View className='cnt'>
          <Text className='txt'>日程</Text>
          <Image
            src='//img14.360buyimg.com/img/jfs/t1/109494/30/28097/1647/62810c2fE30b1e525/5ded3165a71443b5.png'
            className='icon'
          ></Image>
        </View>
        <View className='cnt1'>
          <Text className='txt1'>周一</Text>
          <Text className='txt2'>周二</Text>
          <Text className='txt3'>周三</Text>
          <Text className='txt4'>周四</Text>
          <Text className='txt5'>周五</Text>
        </View>
        <View className='cnt2'>
          <Text className='txt6'>09/01</Text>
          <Text className='txt7'>09/02</Text>
          <Text className='txt8'>09/03</Text>
          <Text className='txt9'>09/04</Text>
          <Text className='txt10'>09/05</Text>
        </View>
        <View className='split_ver'></View>
        <View className='cnt3'>
          <Text className='txt11'>活动</Text>
          <Image
            src='//img30.360buyimg.com/img/jfs/t1/206965/1/22113/599/62810c2fE61cf2efe/49d5eee3a9821c6d.png'
            className='icon1'
          ></Image>
        </View>
        <View className='cnt4'>
          <Image
            src='//img20.360buyimg.com/img/jfs/t1/179252/21/24296/683/62810c2fEbf708543/cf6b478c42752391.png'
            className='icon2'
          ></Image>
          <View className='wrapper'>
            <View className='color_view'></View>
          </View>
          <View className='cnt_col'>
            <Text className='instruction'>8:00</Text>
            <Text className='txt12'>A M</Text>
            <Text className='txt13'>9:00</Text>
            <Text className='txt12'>A M</Text>
          </View>
          <View className='cnt_col1'>
            <Text className='txt14'>课程名称</Text>
            <View className='wrapper1'>
              <View className='cnt_col2'>
                <View className='wrapper2'>
                  <View className='cnt5'>
                    <Image
                      src='//img11.360buyimg.com/img/jfs/t1/62458/20/17387/1619/62810c2fE64f48ad1/a331b258267c5971.png'
                      className='icon3'
                    ></Image>
                    <Text className='instruction1'>教师</Text>
                  </View>
                </View>
                <View className='wrapper3'>
                  <View className='cnt6'>
                    <Text className='txt15'>地点</Text>
                    <View className='icon_wrap'>
                      <Image
                        src='//img13.360buyimg.com/img/jfs/t1/624/28/17210/1066/62810c2fEa7e1bedd/3ee8f57033ea0d4e.png'
                        className='icon4'
                      ></Image>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View className='cnt7'>
              <Text className='txt16'>备注</Text>
              <View className='icon_wrap'>
                <Image
                  src='//img10.360buyimg.com/img/jfs/t1/47601/10/17270/797/62810c2fE135becec/33dc227ed983bbaa.png'
                  className='icon5'
                ></Image>
              </View>
            </View>
          </View>
        </View>
        <View className='cnt8'>
          <Image
            src='//img30.360buyimg.com/img/jfs/t1/15382/27/16110/683/62810c2fE082c6b89/ac3ace8e79450dcd.png'
            className='icon2'
          ></Image>
          <View className='wrapper'>
            <View className='color_view'></View>
          </View>
          <View className='cnt_col'>
            <Text className='instruction'>8:00</Text>
            <Text className='txt12'>A M</Text>
            <Text className='txt13'>9:00</Text>
            <Text className='txt12'>A M</Text>
          </View>
          <View className='cnt_col3'>
            <Text className='txt17'>课程名称</Text>
            <View className='wrapper1'>
              <View className='cnt_col2'>
                <View className='wrapper2'>
                  <View className='cnt5'>
                    <Image
                      src='//img20.360buyimg.com/img/jfs/t1/190997/11/24083/1518/62810c2fEd213a009/7b9b36f67ce90200.png'
                      className='icon3'
                    ></Image>
                    <Text className='instruction1'>教师</Text>
                  </View>
                </View>
                <View className='wrapper3'>
                  <View className='cnt6'>
                    <Text className='txt15'>地点</Text>
                    <View className='icon_wrap'>
                      <Image
                        src='//img11.360buyimg.com/img/jfs/t1/58658/37/18619/992/62810c2fEd259d8ef/2adf22244b0757f9.png'
                        className='icon4'
                      ></Image>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View className='cnt7'>
              <Text className='txt16'>备注</Text>
              <View className='icon_wrap'>
                <Image
                  src='//img14.360buyimg.com/img/jfs/t1/125033/9/26095/662/62810c2fE4265453d/bc9defa42f4f5c75.png'
                  className='icon5'
                ></Image>
              </View>
            </View>
          </View>
        </View>
        <View className='cnt9'>
          <Image
            src='//img11.360buyimg.com/img/jfs/t1/222992/5/10770/685/62810c2fE7d70bcfa/d6ac95fff2d7b74f.png'
            className='icon2'
          ></Image>
          <View className='wrapper4'>
            <View className='color_view'></View>
          </View>
          <View className='cnt_col4'>
            <Text className='instruction'>8:00</Text>
            <Text className='txt12'>A M</Text>
          </View>
          <View className='cnt10'>
            <View className='wrapper5'>
              <View className='cnt11'>
                <View className='cnt_col5'>
                  <Image
                    src='//img20.360buyimg.com/img/jfs/t1/194226/34/23522/1708/62810c2fE49708ae1/a90e2fdcfde9e495.png'
                    className='icon6'
                  ></Image>
                  <Text className='txt18'>首页</Text>
                </View>
                <View className='cnt_col5'>
                  <Image
                    src='//img14.360buyimg.com/img/jfs/t1/221503/28/11849/1171/62810c2fEb321ff72/68d56186f4421f89.png'
                    className='img'
                  ></Image>
                  <Text className='txt19'>课程</Text>
                </View>
                <View className='cnt_col5'>
                  <Image
                    src='//img30.360buyimg.com/img/jfs/t1/124529/4/26953/1682/62810c2fE08aef6ad/3cf83a65cafd0d79.png'
                    className='icon6'
                  ></Image>
                  <Text className='txt18'>发布</Text>
                </View>
                <View className='cnt_col5'>
                  <Image
                    src='//img13.360buyimg.com/img/jfs/t1/179948/12/24735/1530/62810c2fEdb90fce4/8d1994872ef64e2f.png'
                    className='img1'
                  ></Image>
                  <Text className='txt18'>我的</Text>
                </View>
              </View>
            </View>
            <Image
              src='//img30.360buyimg.com/img/jfs/t1/184755/15/24089/1398/62810c2fE53bef335/b45bf2c9ac3a1812.png'
              className='icon7'
            ></Image>
            <Text className='txt20'>课程名称</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default Tasks2
