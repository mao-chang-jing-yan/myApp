// import axios,{AxiosRequestConfig} from "axios";
//
// export const we = ()=>{
//     return (dispatch)=>{
//
//         axios.defaults.headers.common.Authorization = "my-awesome-token";
//         axios.defaults.baseURL = "http://127.0.0.1:8002/api";
//         axios.get("/v1/web/user/query",{
//             method: "GET",
//             // url: `http://127.0.0.1:8002/api/v1`,
//             // data: null,
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             }
//         } ).then(res => {
//             console.log(res)
//         }).catch(err => {
//             console.log(err)
//         })
//     }
// }


import {constants} from "./index";

export const changeSearchStr = (str) => {
    return {
        type: constants.CHANGE_SEARCH_STR,
        value: str
    }
}


export const changeFocus = (focus) => {
    if (focus === true || focus === false) {
        console.log("focus", focus)

        return {
            type: constants.CHANGE_FOCUS,
            value: focus
        }
    }
    console.log("focus", focus)

}

export const changeSearchParams = (key, value) => {
    let params = {
        key: key,
        value: value
    }

    return {
        type: constants.CHANGE_SEARCH_PARAMS,
        value: params
    }
}
export const changePagination = (index, size, total) => {
    const p = {
        current: index,
        pageSize: size,
        total: total
    }
    return {
        type: constants.CHANGE_PAGINATION,
        value: p
    }
}

export const changeList = (data) => {
    // console.log(data)

    return {
        type: constants.CHANGE_LIST_DATA,
        value: data
    }
}


export const changeVisible = (bool) => {
    return {
        type: constants.CHANGE_VISIBLE,
        value: bool
    }
}

export const changeUserInfo = (value) => {
    return {
        type: constants.CHANGE_USER_INFO,
        value: value
    }
}


export const changeDeviceInfo = (data) => {
    return {
        type: constants.CHANGE_DEVICE_INFO,
        value: data
    }
}

