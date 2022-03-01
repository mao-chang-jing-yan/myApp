import {constants} from "./index";
import {api, http} from "../../service/httpServier";

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

export const getProductData = (id)=>{
    return{
        type: constants.GET_PRODUCT_INFO,
        value: id
    }
}

