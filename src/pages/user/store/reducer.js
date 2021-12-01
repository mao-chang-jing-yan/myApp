import {fromJS} from "immutable";
import * as constants from "./actionTypes";

const defaultState = fromJS({
    title: "我的",
    isLogin: false,
    userInfo: {
        openid: "",
        nickName: "茅场晶彦",
        avatarUrl: "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto",
        token: "",
    },
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    // const newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case constants.CHANGE_USER_INFO:
            state = state.setIn(['userInfo'], fromJS(action.value))
            break

        case constants.CHANGE_AVA_URL:
            state = state.setIn(['userInfo', 'avaUrl'], fromJS(action.value))
            break

        case constants.CHANGE_OPEN_ID:
            state = state.setIn(['userInfo', 'openid'], fromJS(action.value))
            break

        case constants.CHANGE_IS_LOGIN:
            state = state.setIn(['isLogin'], fromJS(action.value))
            break

        case constants.CHANGE_TOKEN:
            state = state.setIn(['userInfo', 'token'], fromJS(action.value))
            break


        default:
            break
    }

    return state
}
