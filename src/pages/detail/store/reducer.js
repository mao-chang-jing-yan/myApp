import {fromJS} from "immutable";
import * as constants from "./actionTypes";

const defaultState = fromJS({
    productInfo: {
        id: 0,
        imgUrl: "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto",
        name: "电脑💻",
        userIcon: "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto",
        detail: "ufhgusdighfughfdiughdfiu",
        userName: "2312",
        price: 123,
        oldPrice: 90,
        isLike: 1,
    },



})

export default (state = defaultState, action) => {

    switch (action.type) {
        case constants.CHANGE_PRODUCT_INFO:
            state = state.set("productInfo", fromJS(action.value));
            break

        default:
            break
    }

    return state
}
