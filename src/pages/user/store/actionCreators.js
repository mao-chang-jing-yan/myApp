import {constants} from "./index";
import {api, http} from "../../../service/httpServier";
import Taro from "@tarojs/taro";

export const changeAvaUrl = (avaUrl) => {
    return {
        type: constants.CHANGE_AVA_URL,
        value: avaUrl
    }
}

export const changeToken = (token) => {
    return {
        type: constants.CHANGE_TOKEN,
        value: token
    }
}

export const changeUserName = (userName) => {
    return {
        type: constants.CHANGE_USER_NAME,
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
    return (dispatch, getState) => {
        let user = http.GET(api.getUserInfo, {});
        if (user === null) {
            return
        }
        dispatch(changeUserInfo(user));
    }
}


// 请求服务端获取openid函数
export const handleLogin = name => {

    return async (dispatch, getData) => {

        console.log("getData", getData)
        // let res = await Taro.login({});
        // console.log("code", res.code)
        // if (res.code === undefined) {
        //     return
        // }
        //
        // let data = await http.GET(api.login, {code: res.code, name: "name"});
        // if (data === null) {
        //     return
        // }
        // console.log("data = - ", data)
        //
        // dispatch(changeOpenID(data.openid))
    }
};





