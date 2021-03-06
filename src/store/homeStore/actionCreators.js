import {constants} from "./index";
import {GET} from "../../service/httpServier/http";

// export const changeSearchStr = (str) => {
//     return {
//         type: constants.CHANGE_SEARCH_STR,
//         value: str
//     }
// }

export const changeListType = (type = 0) => {
    return {
        type: constants.CHANGE_LIST_TYPE,
        value: type
    }
}

export const changeListData = (data = []) => {
    return {
        type: constants.CHANGE_LIST_DATA,
        value: data
    }
}

export const getListData = (filter = {}) => {
    return {
        type: constants.GET_LIST_DATA,
        value: filter
    }
}

// export const getData = ()=>{
//
//     const changeDeviceInfo1 = (data) => {
//         return {
//             type: constants.CHANGE_DEVICE_INFO,
//             value: data
//         }
//     };
//
//     return async (dispatch, getState) => {
//         //异步在这个函数里面去做的
//         let data = await GET("",{});
//         console.log(getState)
//         dispatch(changeDeviceInfo1(data.data));
//     }
// }
