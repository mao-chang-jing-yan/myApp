import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {actionCreators, constants} from "./index";
import {api, http} from "../../service/httpServier";
import Taro from "@tarojs/taro";


function* goToHome() {
    yield Taro.switchTab({
        url: "/pages/home2/home2"
    });
}

function* setToken(token) {
    yield put(actionCreators.changeToken(token));
    yield Taro.setStorageSync("token", token);
}

function* getToken() {
    let token = "";
    try {
        token = yield Taro.setStorageSync("token");
    } catch (e) {
    }
    return token
}


function* getCode() {
    try {
        const res = yield Taro.login();
        return res.code;
    } catch (e) {
        return ""
    }
}

function* loginWithPhone(action) {
    try {
        let phone = action?.value?.phone;
        let captcha = action?.value?.captcha;
        let token = yield getToken();
        if (token) {
            yield goToHome();
            return;
        }
        if (!phone || !captcha || token) {
            return
        }
        const data = yield http.POST(api.Login, {phone: phone, captcha: captcha}, {});
        yield put(actionCreators.changeOpenID(data.open_id));
        yield setToken(data.token);

        yield goToHome();
    } catch (e) {
        console.log(e)
    }
}

function* loginWithCode() {
    try {
        let code = yield getCode();
        let token = yield getToken();
        if (token) {
            yield goToHome();
            return;
        }
        console.log(code, !code);
        if (!code) {
            return;
        }
        const data = yield http.POST(api.Login, {type: "code", code: code}, {});
        console.log(data, !data);
        yield put(actionCreators.changeOpenID(data.open_id));
        yield setToken(data.token);


        yield goToHome();
    } catch (e) {
        console.log("loginWithCode", e)
    }
}

function* loginWithPassword(action) {
    try {
        let token = yield getToken();
        if (token) {
            yield goToHome();
            return;
        }

        let value = action?.value;
        const data = yield http.POST(api.Login, {
            type: "account",
            user_name: value.user_name,
            password: value.password
        }, {});
        yield put(actionCreators.changeOpenID(data.open_id));
        yield setToken(data.token);


        yield goToHome();
    } catch (e) {
        console.log(e)
    }
}

function* login(action) {
    // yield loginWithPassword(action);
    yield loginWithCode(action);
    // yield userLogin(action);
}

function* userLogin(action) {
    try {
        let token = yield getToken();
        if (token) {
            yield goToHome();
            return;
        }
        let code = yield getCode();
        console.log(code, !code)
        if (!code) {
            yield put(actionCreators.changeOpenID("oYNbg4jrfAN1LY9nW9PHx2gQZV8I"));
            yield put(actionCreators.changeToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOYW1lIjoiIiwiUGhvbmUiOiIxMjQ1NDc0NTM3NSIsIk5pY2tOYW1lIjoibWFvIiwiQXV0aG9yaXR5SWQiOiLogIHluIgiLCJVc2VySWQiOiI2MjFjZGFjZDVhYTBjZWM3MzUwMjFkN2YiLCJleHAiOjE2NDYxNDQ2MDgsImlzcyI6Im1hb19jaGFuZyIsIm5iZiI6MTY0NjA0ODIwOH0.jMnla8AAS3f2pVGG4kvUa5l4Bd9l-W58mF7xSfDLSeQ"));
            // return
            yield goToHome();
            return
        }
        const data = yield http.POST(api.Login, {"code": code}, {});
        yield put(actionCreators.changeOpenID(data.open_id));
        yield setToken(data.token);
    } catch (e) {
        // console.log(e)
    }
    yield goToHome();
}

function* uploadAvaUrl(action) {
    try {
        let fr = yield Taro.chooseImage({})
        console.log("f", fr);
        let res = yield http.UploadFile(fr)
        let file_url = yield http.fileId_to_url(res?.file_id)
        console.log(action, res, file_url)
        yield put(actionCreators.changeAvaUrl(file_url))
        yield http.Patch(api.UpdateUser, {ava_url: file_url})
    } catch (e) {

    }
}

function* mySaga() {
    yield takeEvery(constants.USER_LOGIN, login);
    yield takeEvery(constants.UPLOAD_AVA_URL, uploadAvaUrl);
}

export default mySaga;
