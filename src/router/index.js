import Vue from 'vue'
import Router from 'vue-router'
/* eslint-disabled */
import Home from '@/components/Home/Home'
import Member from '@/components/Member/Member'
import Search from '@/components/Search/Search'
import Shopcart from '@/components/Shopcart/Shopcart'
import NewsList from '@/components/NewsList/NewsList'
import ImagesList from '@/components/ImagesList/ImagesList'
import Goods from '@/components/Goods/Goods'
import GoodsInfo from '@/components/Goods/GoodInfo'
import Video from '@/components/Video/Video'
import Music from '@/components/Music/Music'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'home' }
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/member',
      name: 'member',
      component: Member
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: Shopcart
    },
    {
      path: '/home/NewsList',
      name: 'newslist',
      component: NewsList
    },
    {
      path: '/home/ImagesList',
      name: 'imageslist',
      component: ImagesList
    },
    {
      path: '/home/Goods',
      name: 'goods',
      component: Goods
    },
    {
       path: '/home/Goods/GoodsInfo/:id',
       name: 'goodinfo',
       component: GoodsInfo
    },
    {
      path: '/home/Video',
      name: 'video',
      component: Video
    },
    {
      path: '/home/Music',
      name: 'music',
      component: Music
    }
  ],
  linkActiveClass: 'mui-active'

})
