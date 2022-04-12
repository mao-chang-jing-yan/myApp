import {fromJS} from "immutable";
import * as constants from "./actionTypes";

const defaultState = fromJS({
    time: "",
    titles: [],
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

        default:
            break
    }

    return state
}
