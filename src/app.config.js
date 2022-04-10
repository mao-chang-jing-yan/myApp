export default {
    pages: [
        'pages/courseDetail/courseDetail',
        'pages/tasks/tasks',
        'pages/login/login',
        'pages/search3/index',
        'pages/user2/user2',
        'pages/search2/search2',
        'pages/test1/test1',
        'pages/index/index',
        'pages/index2/index2',
        'pages/detail2/detail2',
        'pages/detail/detail',


        'pages/home2/home2',
        'pages/user/user',
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
                pagePath: "pages/home2/home2",
                iconPath: "tmp/imgs/tabbar/home.png",
                selectedIconPath: "tmp/imgs/tabbar/home_s.png",
            },
            {
                text: "课程",
                pagePath: "pages/courseDetail/courseDetail",
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
