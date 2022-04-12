import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {actionCreators, constants} from "./index";
import {api, http} from "../../service/httpServier";


function* getCourseInfoList(action) {
    try {
        let data = yield http.POST(api.CreateCourse, {...action.value});
        if (!data){
            return
        }
        // console.log("data", data, action)
        yield put(actionCreators.changeCourseInfoList(data));
    } catch (e) {
        console.log(123)
    }
}

function* mySaga() {
    yield takeEvery(constants.GET_COURSE_INFO_LIST, getCourseInfoList);
}

export default mySaga;
