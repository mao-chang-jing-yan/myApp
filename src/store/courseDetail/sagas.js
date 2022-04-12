import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {actionCreators, constants} from "./index";
import {api, http} from "../../service/httpServier";


function* submitCourseInfo(action) {
    try {
        let data = yield http.POST(api.CreateCourse, {...action.value});
        if (!data){
            return
        }
        // console.log("data", data, action)
        yield put(actionCreators.resetCourseInfo());
    } catch (e) {
        console.log(123)
    }
}

function* mySaga() {
    yield takeEvery(constants.SUBMIT_COURSE_INFO, submitCourseInfo);
}

export default mySaga;
