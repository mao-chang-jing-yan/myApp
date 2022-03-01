import {fromJS} from "immutable";
import * as constants from "./actionTypes";

const defaultState = fromJS({
    login_type: "0",// 登陆方式
    user_name: "",
    password: "",
    phone: "",
    code: "",

})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    // const newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {

        // case constants.CHANGE_FOCUS:
        //     console.log("2321", action.value)
        //     return state.setIn(['isFocus'], fromJS(action.value))
        //
        // case constants.CHANGE_SEARCH_STR:
        //     console.log("2321", action.value)
        //     return state.setIn(['searchStr'], fromJS(action.value))
        //
        //
        // case constants.CHANGE_SEARCH_PARAMS:
        //     const searchParams = state.get("searchParams").toJS()
        //     searchParams[action.value.key] = action.value.value
        //
        //     return state.set("searchParams", fromJS(searchParams))
        // case constants.CHANGE_VISIBLE:
        //     return state.set("visible", fromJS(action.value))
        // case constants.CHANGE_USER_INFO:
        //     console.log("dsdfds= ", action.value)
        //     return state.set("userInfo", fromJS(action.value))
        //
        // case constants.LOGIN:
        //     return state.set("myInfo", fromJS(action.value))
        // case constants.CHANGE_DEVICE_INFO:
        //     return state.set("deviceInfo", fromJS(action.value))

        default:
            break
    }

    return state
}
