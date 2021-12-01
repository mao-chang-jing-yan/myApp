import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {actionCreators, constants} from "./index";
import {api, http} from "../../../service/httpServier";
import Taro from "@tarojs/taro";


function* userLogin(action) {
    try {
        const res = yield Taro.login()
        const data = yield http.POST(api.login, {"code": res.code}, {});
        yield put(actionCreators.changeUserInfo(data));
        console.log(res, data)
    } catch (e) {

    }
}

function* uploadAvaUrl(action) {
    try {
        let fr = yield Taro.chooseImage({})
        let res = yield http.UploadFile(fr)
        yield put(actionCreators.changeAvaUrl(res.avatar_url))
        console.log(res)
    } catch (e) {

    }
}

function* mySaga() {
    yield takeEvery(constants.USER_LOGIN, userLogin);
    yield takeEvery(constants.UPLOAD_AVA_URL, uploadAvaUrl);
}

export default mySaga;
