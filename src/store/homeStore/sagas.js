import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {actionCreators, constants} from "./index";
import {api, http} from "../../service/httpServier";


function* getListData(action) {
    try {
        const data = yield http.GET(api.Login, {}, {});
        console.log(data)
        yield put(actionCreators.changeListData(data.products));
    } catch (e) {}
}

function* mySaga() {
    yield takeEvery(constants.GET_LIST_DATA, getListData);
}

export default mySaga;
