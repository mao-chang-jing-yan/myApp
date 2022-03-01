import {constants} from "./";
import {GET} from "../../service/httpServier/http";

export const changeProduct = (data) => {
    return {
        type: constants.CHANGE_PRODUCT,
        value: data
    }
}

export const submitProduct = () => {
    return {
        type: constants.SUBMIT_PRODUCT,
        value: ""
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
