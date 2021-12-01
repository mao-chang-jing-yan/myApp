import {Component} from 'react'
import {Current} from '@tarojs/taro'

import {View, Text, Image} from '@tarojs/components'
import './detail.scss'
import {actionCreators} from "./store";
import {connect} from "react-redux";
import Taro from "@tarojs/taro";
import {getCurrentInstance} from "@tarojs/runtime";

class Detail extends Component {
    product_id = 0

    componentDidMount() {
        // this.product_id = getCurrentInstance().router.params.id
        // this.props.getProductInfo(this.product_id);
    }


    render() {
        return (
            <View className='index'>
                <Image src={this.props.productInfo.imgUrl}/>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const detail = state.get("detail")
    return {
        // searchStr: search.get("searchStr"),
        productInfo: detail.get("productInfo").toJS(),
        // currentPageUrl:state.currentPageUrl
    }
}
const mapDispatchToProp = (dispatch) => {
    return {

        getProductInfo(id) {
            dispatch(actionCreators.getProductData(id))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProp)(Detail);
