// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 配置Axios

import Axios from 'axios'
// 配置mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/css/global.css'
import VuePreview from 'vue-preview'
import vuePicturePreview from 'vue-picture-preview'
import APlayer from '@moefe/vue-aplayer';
//音乐插件
Vue.use(APlayer, {
  defaultCover: 'https://github.com/u3u.png',
  productionTip: true,
});

Vue.use(vuePicturePreview)   //图片预览
// defalut install
Vue.use(VuePreview)

Vue.use(MintUI)             //MintUI框架


Vue.config.productionTip = false
Vue.prototype.$axios = Axios       //全局注册组件

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
