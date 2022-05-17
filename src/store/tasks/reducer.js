import {fromJS} from "immutable";
import * as constants from "./actionTypes";

const defaultState = fromJS({
    show_model: false,
    show_model_date: null,
    search_date: null,
    tab_info: {
        current: 3,
        num: 10,
        titles: [],
    },
    course_info_list: [
        // {
        //     name: "",
        //     teacher: "",
        //     description: "",
        //     start_time: "",
        //     end_time: "",
        //     start_date:"",
        //     end_date:"",
        //     week: "",
        // },
    ],


})

export default (state = defaultState, action) => {

    switch (action.type) {
        case constants.CHANGE_COURSE_INFO:
            state = state.set("course_info_list", fromJS(action.value));
            break
        case constants.CHANGE_TAB_INFO:
            state = state.set("tab_info", fromJS(action.value));
            break
        case constants.CHANGE_SHOW_MODEL:
            state = state.set("show_model", action.value);
            break
        case constants.CHANGE_SHOW_MODEL_DATE:
            state = state.set("show_model_date", action.value);
            break
        case constants.CHANGE_SHOW_SEARCH_DATE:
            state = state.set("search_date", action.value);
            break

        default:
            break
    }

    return state
}
