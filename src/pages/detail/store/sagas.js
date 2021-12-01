import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {actionCreators, constants} from "./index";
import {api, http} from "../../../service/httpServier";


function* getListData(action) {
    try {
        let data = yield http.POST(api.login, {"sd": action.value});
        // const data = yield http.GET(api.login, {}, {});
        console.log("data", data, action)
        put(actionCreators.changeProductItemInfo(data));
    } catch (e) {
        console.log(123)
    }
}

function* mySaga() {
    yield takeEvery(constants.GET_PRODUCT_INFO, getListData);
}

export default mySaga;
