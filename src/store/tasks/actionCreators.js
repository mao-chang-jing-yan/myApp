import {constants} from "./index";
import {api, http} from "../../service/httpServier";

// export const changeSearchStr = (str) => {
//     return {
//         type: constants.CHANGE_SEARCH_STR,
//         value: str
//     }
// }


export const changeCourseInfoList = (data) => {
    return {
        type: constants.CHANGE_COURSE_INFO,
        value: data
    }
};

export const changeTime = (data) => {
    return {
        type: constants.CHANGE_TiME,
        value: data
    }
};

export const changeTitles = (data = []) => {
    return {
        type: constants.CHANGE_TITLES,
        value: data
    }
};

// 异步
export const getCourseInfoList = (data) => {
    return {
        type: constants.GET_COURSE_INFO_LIST,
        value: data,
    }
}

