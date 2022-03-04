import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {actionCreators, constants} from "./index";
import {api, http} from "../../service/httpServier";


function* getListData(action) {
    try {
        console.log(action)
        const data = yield http.GET(api.QueryProduct, action.value, {});
        if (!data) {
            return
        }
        yield put(actionCreators.changeList(data));
    } catch (e) {

    }
}

function* getRecommendsList(action) {
    try {
        const data = yield http.GET(api.Login, {}, {});
        yield put(actionCreators.changeRecommendsList(data));
    } catch (e) {

    }
}

function* getHistoryList(action) {
    try {
        const data = yield http.GET(api.Login, {}, {});
        yield put(actionCreators.changeHistoryList(data));
    } catch (e) {

    }
}

function* mySaga() {
    yield takeEvery(constants.GET_LIST_DATA, getListData);
    yield takeEvery(constants.GET_RECOMMENDS_LIST, getRecommendsList);
    yield takeEvery(constants.GET_HISTORY_LIST, getHistoryList);
}

export default mySaga;
