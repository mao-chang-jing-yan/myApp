import React, {Component, Fragment} from "react";
import {AtMessage} from "taro-ui";
import Taro from "@tarojs/taro";


class Message extends Component {
    handleClick (type) {
        Taro.atMessage({
            'message': '消息通知',
            'type': type,
        })
    }

    render() {
        return (
            <Fragment>
                <AtMessage />
                {this.props.children}
            </Fragment>
        );
    }
}



export default Message;







