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
    return await baseOptions(params, "DELETE");
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

export const fileId_to_url = (file_id) => {
    return api.base + api.ImageGet + "?filename=" + file_id
}


export const UploadFile = async (fileInfo) => {
    if (fileInfo && fileInfo.hasOwnProperty("path") && fileInfo.hasOwnProperty("size") && fileInfo.hasOwnProperty("type")) {
        try {
            return await Taro.uploadFile({
                url: api.base + api.ImageUpload,
                filePath: fileInfo.path,
                name: 'file',
                formData: {
                    // 'user': 'test',
                    "size": fileInfo.size,
                    "type": fileInfo.type,
                    "file_name": fileInfo.path,
                },
            }).then(res => {
                if (res?.data) {
                    return JSON.parse(res?.data)
                }
                return res?.data
            }).catch(err => {
                return {}
            })
        } catch (e) {
            console.log(e)
        }
    }
    return {}
}


export const UploadFiles = async (fileRes) => {
    let tempFiles = fileRes.tempFiles;
    let res = []
    for (let i = 0; i < tempFiles.length; i++) {
        res.push(await UploadFiles(tempFiles[i]))
    }
    return res
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

    let data = await POST(api.Login, {"code": loginCode}, {})
    console.log(loginCode, data)
    return data

}
