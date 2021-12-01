import {base} from "./api";
import Taro from "@tarojs/taro";

const BASE_URL = base;
const TOKEN = ""

export function baseOptions(params, method = "GET") {
    let {url, data, params_} = params;
    let contentType = "application/x-www-form-urlencoded";
    if (params_ !== undefined && params_.contentType !== undefined){
        contentType = params_.contentType
    }
    // let contentType = "application/json;charset=UTF-8";
    // contentType = params.contentType || contentType;

    const option = {
        // url: BASE_URL + url,  //地址
        url: BASE_URL + url,  //地址
        data: data,   //传参
        method: method, //请求方式
        timeout: 50000, // 超时时间
        header: {  //请求头
            'content-type': contentType,
            // 'Authorization':Taro.getStorageSync('Authorization')
        },
        mode: "cors",
    };
    return Taro.request(option).then((res) => {
        // console.log("res = = ", res)
        if (res.statusCode !== 200) {
            return null
        }
        // console.log("res.data = ", res.data);
        return res.data;
    }).catch(err => {
        // console.log("err = = ", err)
        return null
    });
}
