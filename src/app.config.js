export default {
    pages: [
        'pages/index/index',
        'pages/home/home',
        'pages/search/search',
        'pages/detail/detail',
        'pages/user/user',
    ],
    tabBar: {
        color :"black",
        position: "bottom",
        list: [
            {
                text: "主页",
                pagePath: "pages/home/home",
                iconPath: "tmp/imgs/tabbar/home.png",
                selectedIconPath: "tmp/imgs/tabbar/home_s.png",
            },
            {
                text: "index",
                pagePath: "pages/index/index",
                iconPath: "tmp/imgs/tabbar/second.png",
                selectedIconPath: "tmp/imgs/tabbar/second_s.png",
            },
            {
                text: "我的",
                pagePath: "pages/user/user",
                iconPath: "tmp/imgs/tabbar/my.png",
                selectedIconPath: "tmp/imgs/tabbar/my_s.png",
            },
        ],
    },

    window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
    }
}
