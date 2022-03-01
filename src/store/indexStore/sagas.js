import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {actionCreators, constants} from "./";
import {api, http} from "../../service/httpServier";


function* submitProduct(action) {
    try {
        yield http.POST(api.Login, {}, {});
    } catch (e) {

    }
}

function* mySaga() {
    yield takeEvery(constants.SUBMIT_PRODUCT, submitProduct);
}

export default mySaga;
