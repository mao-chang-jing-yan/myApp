import {Component, Fragment} from 'react'
import {View, Text, Swiper, SwiperItem, Image, Input, PageMeta, NavigationBar, ScrollView} from '@tarojs/components'
import './home.scss'
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {actionCreators} from "./store";
import Taro from "@tarojs/taro";
import productItem from "../../components/productItem/productItem";

// require("../../tmp/imgs/img/slide.jpg")

class Home extends Component {
    swiperImages = [
        require("../../tmp/imgs/img/slide.jpg"),
        "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto",
        "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto",
    ]

    render() {
        return (
            <Fragment>
                <View className={"top"}>

                    <View className={"search"}>
                        <Input
                            className={"input"}
                            type={"text"}
                            value={this.props.searchStr}
                            onInput={(e) => this.props.changeSearchStr(e)}
                            placeholder={"搜索关键词"}
                        />
                    </View>

                    <View className="swiper-box">

                        <Swiper
                            className='test-h'
                            indicatorColor='#999'
                            indicatorActiveColor='#333'
                            interval={3000}
                            duration={800}
                            circular
                            indicatorDots
                            autoplay>

                            {this.swiperImages.map((item, index) => {
                                return (
                                    <SwiperItem itemId={index} key={index}>
                                        <View className='demo'>
                                            <Image
                                                className={"image"}
                                                src={item}
                                                onClick={this.props.sw1}
                                            />
                                        </View>
                                    </SwiperItem>
                                )

                            })}


                        </Swiper>
                    </View>
                </View>


                <ScrollView scrollY={"true"}>

                    {
                        productItem(this.props, this.props.products)
                    }
                </ScrollView>


            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    const home = state.get("home")
    return {
        searchStr: home.get("searchStr"),
        products: home.get("products").toJS()
        // currentPageUrl:state.currentPageUrl
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        changeCurrentUrl(e) {
            // const action = CreateChangeCurrentUrl()
            // action.value = JSON.parse(JSON.stringify(e.keyPath)).reverse()
            //
            // console.log(action, e.keyPath.reverse())
            //
            // dispatch(action)
        },
        changeSearchStr(e) {
            dispatch(actionCreators.changeSearchStr(e.detail.value))
        },
        sw(){
            Taro.navigateTo({
                url: "/pages/detail/detail"
            }).then()
        },
        sw1(){
            Taro.navigateTo({
                url: "/pages/search/search"
            }).then()
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(Home);

