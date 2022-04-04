export default {
    pages: [
        'pages/detail/detail',

        'pages/detail2/detail2',
        'pages/home2/home2',
        'pages/login/login',
        'pages/user/user',
        'pages/index/index',
        'pages/home/home',
        'pages/search/search',
        'pages/pay/pay',
    ],
    tabBar: {
        color :"black",
        position: "bottom",
        list: [
            {
                text: "首页",
                pagePath: "pages/home/home",
                iconPath: "tmp/imgs/tabbar/home.png",
                selectedIconPath: "tmp/imgs/tabbar/home_s.png",
            },
            {
                text: "发布",
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
