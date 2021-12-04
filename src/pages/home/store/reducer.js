import {fromJS} from "immutable";
import * as constants from "./actionTypes";

const defaultState = fromJS({
    search_str: "",
    list_type: 0,
    products: [
        {
            id: 0,
            img_url: "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto",
            name: "电脑💻",
            user_icon: "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto",
            detail: "ufhgusdighfughfdiughdfiu",
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
        // case constants.CHANGE_LIST_DATA:
        //     // console.log(state, action)
        //     // state = state.set("tableData", action.value)
        //     // console.log(state, action)
        //     // newState.searchParams = action.value
        //     console.log("tableData", action.value)
        //     console.log("state", state)
        //     state.set("tableData", action.value)
        //
        //     state = state.setIn(['tableData'], fromJS(action.value))

        // console.log("state",state.get("tableData"))

        // state.merge({
        //     "tableData":action.value.valueOf()
        // })
        // break

        case constants.CHANGE_LIST_TYPE:
            state = state.setIn(['list_type'], fromJS(action.value))
            break

        case constants.CHANGE_LIST_DATA:
            state = state.setIn(['products'], fromJS(action.value))
            break


        // case constants.CHANGE_SEARCH_PARAMS:
        //     const searchParams = state.get("searchParams").toJS()
        //     searchParams[action.value.key] = action.value.value
        //
        //     return state.set("searchParams", fromJS(searchParams))

        default:
            break
    }

    return state
}
