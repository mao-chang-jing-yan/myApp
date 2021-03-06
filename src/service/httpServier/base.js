import Taro from "@tarojs/taro";
import {api} from "./index";

const BASE_URL = api.base + api.wechat;
const TOKEN = ""

async function getToken() {
    let token = "";
    try {
        token = await Taro.getStorageSync("token");
    } catch (e) {
    }
    return token;
}

const request = async (options) => {
    return await Taro.request(options).then((res) => {
        console.log("res = ", res);
        if (res === null) {
            return null
        }
        if (res.statusCode === 200) {
            if (res.data.status === 0) {
                return res.data.res;
            } else {
                Taro.showToast({
                    title: JSON.stringify(res.data.msg),
                    icon: 'error',
                    duration: 2000,
                })
                console.log(res.data.msg)
            }
        }
        if (res.statusCode === 401) {
            return Taro.showToast({
                title: JSON.stringify("未登录"),
                icon: 'error',
                duration: 2000,
                complete: function (r) {
                    Taro.redirectTo({url: "/pages/login/login"})
                }
            })
        }
        if (res.errMsg === "token err") {
            return Taro.redirectTo({url: "/pages/login/login"})
        }
        return res.data;
    }).catch(err => {
        console.log("err", err)
        if (err.status === 401) {
            return Taro.showToast({
                title: JSON.stringify(err.statusText),
                icon: 'error',
                duration: 2000,
                complete: function (r) {
                    Taro.redirectTo({url: "/pages/login/login"})
                }
            })
        }
        return Taro.showToast({
            title: JSON.stringify(err.statusText),
            icon: 'error',
            duration: 2000,
        })
    });
}

export async function baseOptions(params, method = "GET") {
    let {url, data, params_} = params;
    let contentType = "application/x-www-form-urlencoded";
    if (params_ !== undefined && params_.contentType !== undefined) {
        contentType = params_.contentType
    }
    // let contentType = "application/json;charset=UTF-8";
    // contentType = params.contentType || contentType;
    let token = await getToken();
    if (!token && !url.endsWith(api.Login) && !url.endsWith(api.Register)) {
        await Taro.navigateTo({
            url: "/pages/login/login"
        });
        return;
    }

    const options = {
        // url: BASE_URL + url,  //地址
        url: BASE_URL + url,  //地址
        data: data,   //传参
        method: method, //请求方式
        timeout: 50000, // 超时时间
        header: {  //请求头
            'content-type': contentType,
            'token': token,
        },
        mode: "cors",
    };
    return await request(options)
}
