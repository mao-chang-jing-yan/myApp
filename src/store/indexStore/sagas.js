import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {actionCreators, constants} from "./";
import {api, http} from "../../service/httpServier";
import Taro from "@tarojs/taro";


function* submitProduct(action) {
    try {
        yield http.POST(api.Login, {}, {});
    } catch (e) {
        Taro.atMessage({
            'message': e,
            'type': "error",
        })
    }
}

function* mySaga() {
    yield takeEvery(constants.SUBMIT_PRODUCT, submitProduct);
}

export default mySaga;
