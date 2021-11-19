import {Component, Fragment} from 'react'
import {View, Text, Input, Image, ScrollView} from '@tarojs/components'
import './search.scss'
import {connect} from "react-redux";
import {actionCreators} from "./store";
import Taro from "@tarojs/taro";
import productItem from "../../components/productItem/productItem";


class Search extends Component {
    imgurl = "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto"

    render() {
        return (
            <Fragment>

                <View className={"search"}>
                    <Input
                        className={"input"}
                        type={"text"}
                        value={this.props.searchStr}
                        onInput={(e) => this.props.changeSearchStr(e)}
                        placeholder={"请输入"}
                    />
                    <Image className={"icon"} src={"https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto"}/>
                </View>

                <ScrollView scrollY={"true"}>
                    {/*{*/}
                    {/*    this.props.products.map((item, index) => {*/}
                    {/*        return (*/}
                    {/*            <Fragment>*/}
                    {/*                <view className={"item-box"} id={index} onClick={this.props.sw}>*/}
                    {/*                    <Image className={"image"} src={item.imgUrl}/>*/}
                    {/*                    <View className={"name"}>{item.name}</View>*/}
                    {/*                    <View className={"bottom"}>*/}
                    {/*                        <View>*/}
                    {/*                            <View className={"price"}>¥ {item.price}</View>*/}
                    {/*                            <View className={"oldprice"}>¥ {item.oldPrice}</View>*/}
                    {/*                        </View>*/}
                    {/*                        <View>*/}
                    {/*                            <View className={"user"}>*/}
                    {/*                                <Image className={"icon"} src={item.userIcon}/>*/}
                    {/*                                <View>{item.userName}</View>*/}
                    {/*                            </View>*/}
                    {/*                            <View className={"like"}>*/}
                    {/*                                <Image className={"icon"} src={this.imgurl}/>*/}
                    {/*                            </View>*/}
                    {/*                        </View>*/}

                    {/*                    </View>*/}
                    {/*                </view>*/}
                    {/*            </Fragment>*/}
                    {/*        )*/}
                    {/*    })*/}
                    {/*}*/}

                    {
                        productItem(this.props, this.props.products)
                    }
                    <View
                        hidden={this.props.products.length !== 0 ? 'true' : 'false'}
                        className={this.props.products.length === 0 ? "bottom_" : "None"}
                    >
                        --------暂无更多数据---------
                    </View>
                </ScrollView>


            </Fragment>

        )
    }
}

const mapStateToProps = (state) => {
    const search = state.get("search")
    return {
        searchStr: search.get("searchStr"),
        products: search.get("products").toJS(),
        // currentPageUrl:state.currentPageUrl
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        changeSearchStr(e) {
            dispatch(actionCreators.changeSearchStr(e.detail.value))
        },
        sw(){
            Taro.navigateTo({
                url: "/pages/detail/detail"
            }).then()
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProp)(Search);

