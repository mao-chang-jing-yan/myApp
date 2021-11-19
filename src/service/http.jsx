import Taro from "@tarojs/taro";




function Request(){
    return Taro.request({
        url: 'test.php', //仅为示例，并非真实的接口地址
        data: {
            x: '',
            y: ''
        },
        header: {
            'content-type': 'application/json' // 默认值
        },
        success: function (res) {
            console.log(res.data)
        }
    })
}

export function GET(url, data){
    Request()
    return {}
}
