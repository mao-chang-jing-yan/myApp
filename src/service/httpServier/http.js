import {baseOptions} from "./base"
import Taro from "@tarojs/taro";

export async function GET(url, data, params_) {
    let params = {url, data, params_};
    return await baseOptions(params, "GET");
}

export async function POST(url, data, params_) {
    let params = {url, data, params_};
    return await baseOptions(params, "POST");
}

export async function Patch(url, data, params_) {
    let params = {url, data, params_};
    return await baseOptions(params, "PATCH");
}

export async function Delete(url, data, params_) {
    let params = {url, data, params_};
    return await baseOptions(params, "PATCH");
}


export const UploadImage = () => {
    Taro.chooseImage({}).then(res => {
        const tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
        Taro.uploadFile({
            url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
            filePath: tempFilePaths[0],
            name: 'file',
            formData: {
                'user': 'test'
            },

        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    })

}
