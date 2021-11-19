import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './detail.scss'
import {actionCreators} from "../search/store";
import {connect} from "react-redux";

class Detail extends Component {



    render () {
        return (
            <View className='index'>
                <Text>Hello world!</Text>
            </View>
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

    }
}

export default connect(mapStateToProps, mapDispatchToProp)(Detail);
