import {fromJS} from "immutable";
import * as constants from "./actionTypes";

const defaultState = fromJS({
    product_info: {
        id: 0,
        img_url: "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto",
        name: "电脑💻",
        user_icon: "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto",
        detail: "看立法机构开放",
        user_name: "2312",
        price: 300.00,
        old_price: 400.00,
        is_like: 1,
    },

    comment_list: [
        {
            user_name: "茅场晶彦",
            user_icon: "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto",
            text: "多少钱？",
            comments: [
                {
                    user_name: "茅场晶彦1",
                    user_icon: "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto",
                    text: "多少钱？",
                },
                {
                    user_name: "茅场晶彦2",
                    user_icon: "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto",
                    text: "多少钱？",
                },
            ],
        },
        {
            user_name: "茅场晶彦",
            user_icon: "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto",
            text: "多少钱？",
            comments: [
                {
                    user_name: "茅场晶彦1",
                    user_icon: "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto",
                    text: "多少钱？",
                },
                {
                    user_name: "茅场晶彦2",
                    user_icon: "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto",
                    text: "多少钱？",
                },
            ],
        },


    ]


})

export default (state = defaultState, action) => {

    switch (action.type) {
        case constants.CHANGE_PRODUCT_INFO:
            state = state.set("product_info", fromJS(action.value));
            break

        default:
            break
    }

    return state
}
