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
        token = yield Taro.getStorageSync("token");
    } catch (e) {
    }
    return token
}

function* reFreshToken() {
    let token = yield getToken();
    if (!token) {
        return null
    }
    let newToken = null;
    try {
        let data = yield http.POST(api.ReFreshToken, {});
        yield put(actionCreators.changeOpenID(data.open_id));
        if (!data.token) {
            return null;
        }
        yield setToken(data.token);
        newToken = data.token;
        if (newToken){
            yield goToHome();
        }
    } catch (e) {
        yield setToken("");
    }
    return newToken
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
        let token = yield reFreshToken();
        if (token) {
            yield goToHome();
            return true;
        }
        console.log(code, !code);
        if (!code) {
            return;
        }
        const data = yield http.POST(api.Login, {type: "code", code: code}, {});
        console.log(data, !data);
        if (!data) {
            return;
        }
        if (data && data.open_id) {
            yield put(actionCreators.changeOpenID(data.open_id));
        }

        if (data && data.token) {
            yield setToken(data.token);
            yield goToHome();
            return true;
        }
        return false
    } catch (e) {
        console.log("loginWithCode", e)
    }
    return false
}

function* loginWithPassword(action) {
    try {
        let token = yield reFreshToken();
        let value = action?.value;
        if (token) {
            yield goToHome();
            return true;
        }
        if (!value || !value.user_name || !value.password) {
            return;
        }

        const data = yield http.POST(api.Login, {
            type: "account",
            user_name: value.user_name,
            password: value.password
        }, {});
        console.log("data", data)
        yield put(actionCreators.changeOpenID(data.open_id));
        if (data && data.token) {
            yield setToken(data.token);
            yield goToHome();
            return true;
        }
    } catch (e) {
        console.log("loginWithPassword", e)
    }
    return false
}

function* login(action) {
    // let res = yield reFreshToken();
    // if (res) {
    //     return
    // }
    let res = yield loginWithCode(action);
    if (res) {
        return
    }
    yield loginWithPassword(action);
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
        let res = yield http.UploadFiles(fr)
        if (res.length < 0){
            return
        }
        let file_url = yield http.fileId_to_url(res[0]?.file_id)
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
