import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {actionCreators, constants} from "./index";
import {api, http} from "../../service/httpServier";
import Taro from "@tarojs/taro";


function* getCode() {
    try {
        const res = yield Taro.login();
        return res.code;
    } catch (e) {
        return ""
    }
}

function* userLogin(action) {
    try {
        let code = yield getCode();
        console.log(code, !code)
        if (!code){
            yield put(actionCreators.changeOpenID("oYNbg4jrfAN1LY9nW9PHx2gQZV8I"));
            yield put(actionCreators.changeToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOYW1lIjoiIiwiUGhvbmUiOiIxMjQ1NDc0NTM3NSIsIk5pY2tOYW1lIjoibWFvIiwiQXV0aG9yaXR5SWQiOiLogIHluIgiLCJVc2VySWQiOiI2MjFjZGFjZDVhYTBjZWM3MzUwMjFkN2YiLCJleHAiOjE2NDYxNDQ2MDgsImlzcyI6Im1hb19jaGFuZyIsIm5iZiI6MTY0NjA0ODIwOH0.jMnla8AAS3f2pVGG4kvUa5l4Bd9l-W58mF7xSfDLSeQ"));
            // return
        }
        // const data = yield http.POST(api.login, {"code": code}, {});
        // yield put(actionCreators.changeOpenID(data.open_id));
        // yield put(actionCreators.changeToken(data.token));
    } catch (e) {

    }
    yield Taro.navigateTo({
        url: "/pages/home/home"
    })
}

function* uploadAvaUrl(action) {
    try {
        let fr = yield Taro.chooseImage({})
        let res = yield http.UploadFile(fr)
        yield put(actionCreators.changeAvaUrl(res.avatar_url))
    } catch (e) {

    }
}

function* mySaga() {
    yield takeEvery(constants.USER_LOGIN, userLogin);
    yield takeEvery(constants.UPLOAD_AVA_URL, uploadAvaUrl);
}

export default mySaga;
