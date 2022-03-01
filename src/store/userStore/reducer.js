import {fromJS} from "immutable";
import * as constants from "./actionTypes";

const defaultState = fromJS({
    title: "我的",
    is_login: false,
    user_info: {
        open_id: "",
        nick_name: "茅场晶彦",
        avatar_url: "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto",
        token: "",
    },
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    // const newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case constants.SET_DEFAULT_DATA:
            state = defaultState;
            break
        case constants.CHANGE_IS_LOGIN:
            state = state.setIn(['isLogin'], fromJS(action.value))
            break

        case constants.CHANGE_USER_INFO:
            state = state.setIn(['user_info'], fromJS(action.value))
            break

        case constants.CHANGE_AVA_URL:
            state = state.setIn(['user_info', 'avatar_url'], fromJS(action.value))
            break

        case constants.CHANGE_OPEN_ID:
            state = state.setIn(['user_info', 'open_id'], fromJS(action.value))
            break

        case constants.CHANGE_TOKEN:
            state = state.setIn(['user_info', 'token'], fromJS(action.value))
            break

        case constants.CHANGE_NICK_NAME:
            state = state.setIn(['user_info', 'nick_name'], fromJS(action.value))
            break

        default:
            break
    }

    return state
}
