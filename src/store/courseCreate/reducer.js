import {fromJS} from "immutable";
import * as constants from "./actionTypes";

const defaultState = fromJS({
    course_info: {
        name: "",
        chapter: "",
        teacher: "",
        description: "",
        start_time: "",
        end_time: "",
        start_date: "",
        end_date: "",
        week: "",
        medias: [
            // {type: "", url: ""},
        ],
    }


})

export default (state = defaultState, action) => {

    switch (action.type) {
        case constants.CHANGE_COURSE_INFO:
            state = state.set("course_info", fromJS(action.value));
            break
        case constants.CHANGE_MEDIAS:
            state = state.setIn(["course_info", "medias"], fromJS(action.value));
            break

        default:
            break
    }

    return state
}
