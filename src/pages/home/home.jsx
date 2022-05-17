import React, {Component, Fragment} from 'react'
import {
    View,
    Text,
    Swiper,
    SwiperItem,
    Image,
    Input,
    PageMeta,
    NavigationBar,
    ScrollView,
    Video
} from '@tarojs/components'
import './home.scss'
import {connect} from "react-redux";
import {actionCreators} from "../../store/homeStore";
import {actionCreators as searchActionCreators} from "../../store/searchStore";
import Taro from "@tarojs/taro";
import productList, {productList2} from "../../components/productList/productList";

class Home extends Component {
    swiperImages = [
        require("../../tmp/imgs/img/slide.jpg"),
        "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto",
        "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto",
    ]
    tuijianListd = [
        {name: "闲置数码", img_url: "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto"},
        {name: "书籍教材", img_url: "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto"},
        {name: "鞋服配饰", img_url: "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto"},
        {name: "全部", img_url: require("../../tmp/imgs/img/all.png")},
    ]

    render() {
        return (
            <Fragment>

                <ScrollView scrollY={true}>

                    <View className={"top"}>


                        <View className={"search"}>
                            <Input
                                className={"input"}
                                type={"text"}
                                value={""}
                                onClick={() => this.props.goTo1()}
                                onInput={() => this.props.goTo1()}
                                placeholder={"🔍搜索关键词"}
                            />
                            {/*<AtSearchBar*/}
                            {/*    className={"input"}*/}
                            {/*    actionName='搜一下'*/}
                            {/*    value={""}*/}
                            {/*    onChange={() => this.props.goTo1()}*/}
                            {/*    onActionClick={() => this.props.goTo1()}*/}
                            {/*    onFocus={() => this.props.goTo1()}*/}
                            {/*/>*/}
                        </View>

                        <Swiper
                            className={"swiper"}
                            indicatorColor='#999'
                            indicatorActiveColor='#333'
                            interval={3000}
                            duration={800}
                            circular
                            indicatorDots
                            autoplay>

                            {this.swiperImages.map((item, index) => {
                                return (
                                    <SwiperItem itemId={index} key={"index" + index}>
                                        <Image
                                            className={"swiper-item-image"}
                                            src={item}
                                            onClick={this.props.sw1}
                                            // style={{height: "100%",width:"100%"}}
                                        />
                                    </SwiperItem>
                                )

                            })}


                        </Swiper>
                    </View>

                    <View className={"inner1"}>


                        {
                            tuijianList(this.props, this.tuijianListd)
                        }

                        <View style={{fontSize: "15px", fontWeight: "500"}}>
                            <View style={{
                                float: "left",
                                fontStyle: "italic",
                                color: "#f37f66",
                            }}
                            >最新</View>发布｜最新二手信息
                            <View style={{float: "right"}} onClick={() => {
                                this.props.changeListType(this.props.listType)
                            }}>
                                修改列表格式
                            </View>
                        </View>

                        <View className={"products"}>
                            {
                                this.props.listType === 0 ?
                                    productList2(this.props, this.props.products)
                                    : productList(this.props, this.props.products)
                            }

                        </View>


                    </View>

                </ScrollView>


            </Fragment>
        )
    }
}


const tuijianList = (props, List) => {
    return (
        <View className='at-row at-row__justify--around tuijianList'>
            {
                List.map((item, index) => {
                    if (index < 4) {
                        return (
                            <View
                                key={item.name + index}
                                className='at-col at-col-2 tuijianList-item'
                                onClick={()=>props.switchToSearch()}
                            >
                                <View className={"image-box"}>
                                    <Image className={"image"} src={item.img_url}/>
                                </View>
                                <View className={"text"}>
                                    {item.name}
                                </View>
                            </View>
                        )
                    }
                })
            }
        </View>
    )
}

const mapStateToProps = (state) => {
    const home = state.get("home")
    return {
        // searchStr: home.get("searchStr"),
        products: home.get("products").toJS(),
        listType: home.get("list_type"),
        // currentPageUrl:state.currentPageUrl7
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
            // dispatch(actionCreators.changeSearchStr(e.detail.value))
        },
        sw(id) {
            Taro.navigateTo({
                url: "/pages/detail/detail?id=" + id
            }).then()
        },
        goTo1() {
            Taro.navigateTo({
                url: "/pages/search/search"
            }).then(r=>{
                dispatch(searchActionCreators.changeFocus(true))
            })
        },
        changeListType(listType) {
            dispatch(actionCreators.getListData())

            if (listType === 0) {
                dispatch(actionCreators.changeListType(1))
            } else {
                dispatch(actionCreators.changeListType(0))
            }
        },
        switchToSearch() {
            dispatch(searchActionCreators.changeFocus(false))
            Taro.navigateTo({
                url: "/pages/search/search"
            }).then(r=>{
                dispatch(searchActionCreators.changeFocus(false))
            })
        },
        // getListData(){
        //   dispatch(actionCreators.getListData())
        // },
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(Home);

