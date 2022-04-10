import Taro from "@tarojs/taro";

const toDetail = (id) => {
    return Taro.navigateTo({
        url: "/pages/detail2/detail2?id=" + id
    })
}

const toHome = () => {
    return Taro.navigateTo({
        url: "/pages/home2/home2"
    })
}

const toSearch = () => {
    return Taro.navigateTo({
        url: "/pages/search/search"
    })
}

