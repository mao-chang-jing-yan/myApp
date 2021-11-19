import {fromJS} from "immutable";
import * as constants from "./actionTypes";

const defaultState = fromJS({
    title: "我的",
    name: "茅场晶彦",
    openid: "6786",
    avaUrl: "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto",
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    // const newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case constants.CHANGE_LIST_DATA:
            state = state.setIn(['openid'], fromJS(action.value))
            break

        case constants.CHANGE_PAGINATION:
            return state.setIn(['pagination'], fromJS(action.value))



        default:
            break
    }

    return state
}
