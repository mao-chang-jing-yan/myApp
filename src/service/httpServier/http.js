import {baseOptions} from "./base"
import Taro from "@tarojs/taro";
import {api} from "./index";

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


// export const UploadImage = () => {
//     Taro.chooseImage({}).then(res => {
//         const tempFiles = res.tempFiles
//         console.log(res)
//         console.log(tempFiles)
//         Taro.uploadFile({
//             url: api.base + api.uploadImg, //仅为示例，非真实的接口地址
//             filePath: tempFiles[0].path,
//             name: 'file',
//             formData: {
//                 'user': 'test',
//                 "size": tempFiles[0].size,
//                 "type": tempFiles[0].type,
//                 "file_name": tempFiles[0].path,
//             },
//
//         }).then(res => {
//             console.log(res)
//         }).catch(err => {
//             console.log(err)
//         })
//     })
//
// }

export const UploadFile = async (fileRes) => {
    // try {
    let tempFiles = fileRes.tempFiles

    // return await POST(api.uploadImg, {
    //     filePath: tempFiles[0].path,
    //     name: 'file',
    //     formData: {
    //         // 'user': 'test',
    //         "size": tempFiles[0].size,
    //         "type": tempFiles[0].type,
    //         "file_name": tempFiles[0].path,
    //     },
    // },{})

    try {
        return await Taro.uploadFile({
            url: api.base + api.uploadImg,
            filePath: tempFiles[0].path,
            name: 'file',
            formData: {
                // 'user': 'test',
                "size": tempFiles[0].size,
                "type": tempFiles[0].type,
                "file_name": tempFiles[0].path,
            },

        })
    } catch (e) {

    }
    return {}
}


//{
//     "errMsg": "chooseImage:ok",
//     "tempFilePaths": [
//         "blob:http://192.168.31.204:10086/35ba8410-23c8-4da4-983e-c201fd4566a2"
//     ],
//     "tempFiles": [
//         {
//             "path": "blob:http://192.168.31.204:10086/35ba8410-23c8-4da4-983e-c201fd4566a2",
//             "size": 71752,
//             "type": "image/png",
//             "originalFileObj": {}
//         }
//     ]
// }

export const checkLogin = async () => {

    let loginCode = await Taro.login().then(res => {
        return res.code;
    }).catch(err => {
        return null;
    })

    if (loginCode === null || loginCode === undefined) {
        return
    }

    let data = await POST(api.login, {"code": loginCode, "re": "57"}, {})
    console.log(loginCode, data)
    return data

}
