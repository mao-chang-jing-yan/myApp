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

export const changeTabInfo = (data) => {
    return {
        type: constants.CHANGE_TAB_INFO,
        value: data
    }
};


// 异步
export const getCourseInfoList = (index, tab_info) => {
    return {
        type: constants.GET_COURSE_INFO_LIST,
        value: {index: index, tab_info: tab_info},
    }
}

