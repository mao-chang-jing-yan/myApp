import {fromJS} from "immutable";
import * as constants from "./actionTypes";

const defaultState = fromJS({
    search_str: "",
    is_focus: false,
    list_type: 0,
    history: ["ytfdisf", "dhfuhids", "dfhkdf", "dsfh"],
    recommends: ["21324", "34rer", "245fsd", "freg", "rtret"],
    products: [
        {
            id: 0,
            img_url: "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto",
            name: "2312",
            user_icon: "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto",
            user_name: "2312",
            price: 123,
            old_price: 90,
            is_like: 1,
        },{
            id: 1,
            img_url: "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto",
            name: "2312",
            user_icon: "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto",
            user_name: "2312",
            price: 123,
            old_price: 90,
            is_like: 1,
        },
    ],

})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    // const newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case constants.CHANGE_FOCUS:
            state = state.setIn(['is_focus'], fromJS(action.value))
            break

        case constants.CHANGE_SEARCH_STR:
            state = state.setIn(['search_str'], fromJS(action.value))
            break

        case constants.CHANGE_LIST_TYPE:
            state = state.setIn(['list_type'], fromJS(action.value))
            break

        case constants.CHANGE_HISTORY_LIST:
            state = state.setIn(['history'], fromJS(action.value))
            break

        case constants.GET_RECOMMENDS_LIST:
            state = state.setIn(['recommends'], fromJS(action.value))
            break

        case constants.CHANGE_LIST_DATA:
            state = state.setIn(['products'], fromJS(action.value))
            break

        default:
            break
    }

    return state
}
