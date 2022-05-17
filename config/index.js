const path = require('path')
const config = {
    projectName: 'myApp',
    date: '2021-11-13',
    designWidth: 750,
    deviceRatio: {
        640: 2.34 / 2,
        750: 1,
        828: 1.81 / 2
    },
    sourceRoot: 'src',
    outputRoot: 'dist',
    plugins: [
        '@tarojs/plugin-sass', // 使用 Sass
        // '@tarojs/plugin-less', // 使用 Less
        // '@tarojs/plugin-stylus', // 使用 Stylus
    ],
    alias: {
        '@services': path.resolve(__dirname, '..', 'src/service'),
        '@components': path.resolve(__dirname, '..', 'src/components'),
        '@assets': path.resolve(__dirname, '..', 'src/tmp'),
        '@store': path.resolve(__dirname, '..', 'src/store')
    },
    defineConstants: {},
    copy: {
        patterns: [],
        options: {}
    },
    framework: 'react',
    mini: {
        webpackChain(chain, webpack) {
            // linaria/loader 选项详见 https://github.com/callstack/linaria/blob/master/docs/BUNDLERS_INTEGRATION.md#webpack
            chain.module
                .rule('script')
                .use('linariaLoader')
                .loader('linaria/loader')
                .options({
                    sourceMap: process.env.NODE_ENV !== 'production',
                })
        },
        postcss: {
            pxtransform: {
                enable: true,
                config: {}
            },
            url: {
                enable: true,
                config: {
                    limit: 1024 // 设定转换尺寸上限
                }
            },
            cssModules: {
                enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
                config: {
                    namingPattern: 'module', // 转换模式，取值为 global/module
                    generateScopedName: '[name]__[local]___[hash:base64:5]'
                }
            }
        }
    },
    h5: {
        webpackChain(chain, webpack) {
            chain.module
                .rule('script')
                .use('linariaLoader')
                .loader('linaria/loader')
                .options({
                    sourceMap: process.env.NODE_ENV !== 'production',
                })
        },
        publicPath: '/',
        staticDirectory: 'static',
        esnextModules: ['taro-ui'],
        postcss: {
            autoprefixer: {
                enable: true,
                config: {}
            },
            cssModules: {
                enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
                config: {
                    namingPattern: 'module', // 转换模式，取值为 global/module
                    generateScopedName: '[name]__[local]___[hash:base64:5]'
                }
            }
        },
        devServer: {
            // host: '127.0.0.1',
            // port: 8002,
            // proxy: {
                // '/*': {  // rest服务的path
                //     target: 'http://127.0.0.1:8002',  // 服务端地址
                //     pathRewrite: {
                //         '^/': '/'
                //     },
                //     changeOrigin: true
                // },
                // '/api/v1': {  // rest服务的path
                //     target: 'http://<backend>:<port>',  // 服务端地址
                //     changeOrigin: true
                // },
            // }
        },
    }
}

module.exports = function (merge) {
    if (process.env.NODE_ENV === 'development') {
        return merge({}, config, require('./dev'))
    }
    return merge({}, config, require('./prod'))
}
