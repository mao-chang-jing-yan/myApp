import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {actionCreators, constants} from "./index";
import {api, http} from "../../../service/httpServier";


function* getListData(action) {
    try {
        const data = yield http.GET(api.login, {}, {});
        console.log(data)
        // yield put(actionCreators.changeListData(data));
    } catch (e) {
        console.log(123)
    }
}

function* mySaga() {
    // yield takeEvery(constants.GET_LIST_DATA, getListData);
}

export default mySaga;
