'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
          '/GetNewslist': {
            target: 'http://c.m.163.com/nc/article/headline/T1348647853363/0-40.html',
            changeOrigin: true,
            pathRewrite: {
                '^/GetNewslist': ''
            }
        },
        '/GetImagesList': {
            target: 'https://www.apiopen.top/meituApi?page=0',
            changeOrigin: true,
            pathRewrite: {
                '^/GetImagesList': ''
            }
        },
        '/GetVideoList': {
            target: 'https://api.apiopen.top/todayVideo',
            changeOrigin: true,
            pathRewrite: {
                '^/GetVideoList': ''
            }
        },
        '/GetGoodsList': {
            target: 'http://gw.api.taobao.com/router/rest?adzone_id=380168337&end_price=999999999&end_tk_rate=10000&has_coupon=false&is_tmall=false&page_no=1&page_size=20&q=vivo&start_dsr=0&start_price=0&start_tk_rate=0&method=taobao.tbk.dg.material.optional&v=2.0&sign_method=hmac&app_key=24761415&format=json&partner_id=top-sdk-net-20180331&timestamp=2019-02-19+11%3a01%3a15&sign=270502DAC01640D420C63D0C42D22D71',
            changeOrigin: true,
            pathRewrite: {
                '^/GetGoodsList': ''
            }
        },
        '/GetMusicsList': {
            target: 'http://music.163.com/api/search/get/web',
            changeOrigin: true,
            pathRewrite: {
                '^/GetMusicsList': ''
            }
        },
        '/GetMusicsURL': {
            target: 'http://m.kugou.com/?json=true',
            changeOrigin: true,
            pathRewrite: {
                '^/GetMusicsURL': ''
            }
        },
        '/GetMusicsHash': {
            target: 'http://songsearch.kugou.com/song_search_v2?',
            changeOrigin: true,
            pathRewrite: {
                '^/GetMusicsHash': ''
            }
        },
        '/GetMusicsLink': {
            target: 'http://www.kugou.com/yy/index.php?r=play/getdata&',
            changeOrigin: true,
            pathRewrite: {
                '^/GetMusicsLink': ''
            }
        }

    },

    // Various Dev Server settings
    host: 'localhost',
    //host: '192.168.0.119', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: false,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
