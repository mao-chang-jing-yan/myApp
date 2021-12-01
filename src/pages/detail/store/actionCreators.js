import {constants} from "./index";
import {api, http} from "../../../service/httpServier";

// export const changeSearchStr = (str) => {
//     return {
//         type: constants.CHANGE_SEARCH_STR,
//         value: str
//     }
// }


export const changeProductItemInfo = (data) => {
    return {
        type: constants.CHANGE_PRODUCT_INFO,
        value: data
    }
};


export const getProductData = (id) => {
    return async (dispatch, getState) => {
        //异步在这个函数里面去做的
        let data = await http.GET(api.testGet, {123: "213"});
        console.log("data", data)
        if (data === null) {
            return
        }
        dispatch(changeProductItemInfo(data.data));
    }
}
