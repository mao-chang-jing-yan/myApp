import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {actionCreators, constants} from "./";
import {api, http} from "../../service/httpServier";
import Taro from "@tarojs/taro";


function* submitProduct(action) {
    try {
        let res = yield http.UploadFile(action.value.images[0].file)
        console.log(res)
        delete action.value["id"];
        action.value["img_url"] = res.file_id;
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
