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


export const changeShowModel = (data) => {
    return {
        type: constants.CHANGE_SHOW_MODEL,
        value: !!data
    }
};

export const changeShowModelDate = (data) => {
    return {
        type: constants.CHANGE_SHOW_MODEL_DATE,
        value: data
    }
};

export const changeSearchDate = (data) => {
    return {
        type: constants.CHANGE_SHOW_SEARCH_DATE,
        value: data
    }
};

// 异步
export const getCourseInfoList = (index, search_date, tab_info) => {
    return {
        type: constants.GET_COURSE_INFO_LIST,
        value: {index: index, search_date: search_date, tab_info: tab_info},
    }
}

