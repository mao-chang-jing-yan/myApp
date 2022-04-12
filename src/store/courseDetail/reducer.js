import {fromJS} from "immutable";
import * as constants from "./actionTypes";

const defaultState = fromJS({
    course_info: {
        id: "",
        name: "",
        chapter: "",
        teacher: "",
        description: "",
        start_time: "",
        end_time: "",
        start_date: "",
        end_date: "",
        week: "",
        images: [
            // {type: "", url: ""},
        ],
        comments: [
            // {
            //     id: "",
            //     text: "efusfuyiwfe",
            //     user_info: {id: "", nick_name: "efwefew", avatar_url: imgurl},
            //     time: "efwef",
            //     show: false,
            //     child_comments: [
            //         {id: "", user_info: {id: "", nick_name: "efwefew", avatar_url: imgurl}, text: "4524", time: ""},
            //         {id: "", user_info: {id: "", nick_name: "efwefew", avatar_url: imgurl}, text: "324", time: ""},
            //     ]
            // },
        ],

    },

})

export default (state = defaultState, action) => {

    switch (action.type) {
        case constants.CHANGE_COURSE_INFO:
            state = state.set("course_info", fromJS(action.value));
            break

        case constants.CHANGE_COMMENTS:
            state = state.setIn(["course_info", "comments"], fromJS(action.value));
            break

        default:
            break
    }

    return state
}
