import {fromJS} from "immutable";
import * as constants from "./actionTypes";

const defaultState = fromJS({
    searchStr: "",
    listType: 0,
    products: [
        {
            id: 0,
            imgUrl: "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto",
            name: "电脑💻",
            userIcon: "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto",
            detail: "ufhgusdighfughfdiughdfiu",
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
        }, {
            id: 1,
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
        }, {
            id: 1,
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
            state = state.setIn(['listType'], fromJS(action.value))
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
