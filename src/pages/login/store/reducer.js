import {fromJS} from "immutable";
import * as constants from "./actionTypes";

const defaultState = fromJS({
    searchStr: "",
    isFocus: true,
    product: [],
    history: ["ytfdisf", "dhfuhids", "dfhkdf", "dsfh"],
    recommends: ["21324", "34rer", "245fsd", "freg", "rtret"],
    products: [
        {
            id: 0,
            imgUrl: "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto",
            name: "2312",
            userIcon: "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto",
            userName: "2312",
            price: 123,
            oldPrice: 90,
            isLike: 1,
        }, {
            id: 1,
            imgUrl: "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto",
            name: "2312",
            userIcon: "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto",
            userName: "2312",
            price: 123,
            oldPrice: 90,
            isLike: 1,
        },
    ],

})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    // const newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case constants.CHANGE_LIST_DATA:
            // console.log(state, action)
            // state = state.set("tableData", action.value)
            // console.log(state, action)
            // newState.searchParams = action.value
            console.log("tableData", action.value)
            console.log("state", state)
            state.set("tableData", action.value)

            state = state.setIn(['tableData'], fromJS(action.value))

            // console.log("state",state.get("tableData"))

            // state.merge({
            //     "tableData":action.value.valueOf()
            // })
            break

        case constants.CHANGE_FOCUS:
            console.log("2321", action.value)
            return state.setIn(['isFocus'], fromJS(action.value))

        case constants.CHANGE_SEARCH_STR:
            console.log("2321", action.value)
            return state.setIn(['searchStr'], fromJS(action.value))


        case constants.CHANGE_SEARCH_PARAMS:
            const searchParams = state.get("searchParams").toJS()
            searchParams[action.value.key] = action.value.value

            return state.set("searchParams", fromJS(searchParams))
        case constants.CHANGE_VISIBLE:
            return state.set("visible", fromJS(action.value))
        case constants.CHANGE_USER_INFO:
            console.log("dsdfds= ", action.value)
            return state.set("userInfo", fromJS(action.value))

        case constants.LOGIN:
            return state.set("myInfo", fromJS(action.value))
        case constants.CHANGE_DEVICE_INFO:
            return state.set("deviceInfo", fromJS(action.value))

        default:
            break
    }

    return state
}
