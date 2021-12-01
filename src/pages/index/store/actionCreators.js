import {constants} from "./index";
import {GET} from "../../../service/httpServier/http";

export const changeSearchStr = (str) => {
    return {
        type: constants.CHANGE_SEARCH_STR,
        value: str
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
