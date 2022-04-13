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
        // console.log("res = = ", res)
        if (res === null || res.statusCode !== 200) {
            return null
        }
        if (res.errMsg === "token err") {
            return Taro.navigateTo("/pages/login")
        }
        // console.log("res.data = ", res.data);
        return res.data;
    }).catch(err => {
        // console.log("err = = ", err)
        return null
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
