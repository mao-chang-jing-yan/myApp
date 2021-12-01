import {constants} from "./index";
import {api, http} from "../../../service/httpServier";
import Taro from "@tarojs/taro";

export const changeAvaUrl = (avaUrl) => {
    return {
        type: constants.CHANGE_AVA_URL,
        value: avaUrl
    }
}

export const uploadAvaUrl = () => {
    return {
        type: constants.UPLOAD_AVA_URL,
        value: ""
    }
}

export const changeToken = (token) => {
    return {
        type: constants.CHANGE_TOKEN,
        value: token
    }
}

export const changeNickName = (userName) => {
    return {
        type: constants.CHANGE_NICK_NAME,
        value: userName
    }
}

export const changeUserInfo = (data) => {
    return {
        type: constants.CHANGE_USER_INFO,
        value: data
    }
}

export const changeOpenID = (open_id) => {
    return {
        type: constants.CHANGE_OPEN_ID,
        value: open_id
    }
}

export const changeIsLogin = (isLogin) => {
    return {
        type: constants.CHANGE_IS_LOGIN,
        value: isLogin
    }
}


export const getUserInfo = () => {
    return {
        type: constants.GET_USER_INFO,
        value: ""
    }
}


// 请求服务端获取openid函数
export const handleLogin = () => {
    return {
        type: constants.USER_LOGIN,
        value: ""
    }
};





