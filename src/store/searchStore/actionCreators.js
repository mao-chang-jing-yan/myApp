import {constants} from "./index";

export const changeSearchStr = (str) => {
    return {
        type: constants.CHANGE_SEARCH_STR,
        value: str
    }
}

export const changeListType = (type) => {
    return {
        type: constants.CHANGE_LIST_TYPE,
        value: type
    }
}

export const changeFocus = (focus) => {
    return {
        type: constants.CHANGE_FOCUS,
        value: focus
    }
}

export const changeList = (data) => {
    return {
        type: constants.CHANGE_LIST_DATA,
        value: data
    }
}

export const changeHistoryList = (data) => {
    return {
        type: constants.CHANGE_HISTORY_LIST,
        value: data
    }
}

export const changeRecommendsList = (data) => {
    return {
        type: constants.CHANGE_RECOMMENDS_LIST,
        value: data
    }
}

// get
export const getList = () => {
    return {
        type: constants.GET_LIST_DATA,
        value: ""
    }
}

export const getRecommendsList = () => {
    return {
        type: constants.GET_RECOMMENDS_LIST,
        value: ""
    }
}

export const getHistoryList = () => {
    return {
        type: constants.GET_HISTORY_LIST,
        value: ""
    }
}
