import {constants} from "./index";
import {api, http} from "../../service/httpServier";

// export const changeSearchStr = (str) => {
//     return {
//         type: constants.CHANGE_SEARCH_STR,
//         value: str
//     }
// }


export const changeCourseInfo = (data) => {
    return {
        type: constants.CHANGE_COURSE_INFO,
        value: data
    }
};



export const resetCourseInfo = ()=>{
    return{
        type: constants.CHANGE_COURSE_INFO,
        value: {},
    }
}


export const submitCourseInfo = (data)=>{
    return{
        type: constants.SUBMIT_COURSE_INFO,
        value: data,
    }
}

