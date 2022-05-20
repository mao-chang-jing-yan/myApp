import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {actionCreators, constants} from "./";
import {api, http} from "../../service/httpServier";
import Taro from "@tarojs/taro";


function* submitProduct(action) {
    try {
        delete action.value["id"];
        yield http.POST(api.CreateProduct, action.value, {});
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
