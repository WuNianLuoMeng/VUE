<template>
  <div id="app" class="app">
  <!--<mt-header title="乐购商城">
    
  </mt-header>-->
  <header id="header" class="mui-bar mui-bar-nav">
      <h1 class="mui-title">VUE项目</h1>
      <button  v-if="show" class="mui-action-back mui-btn mui-btn-blue mui-btn-link mui-btn-nav mui-pull-left"><span class="mui-icon mui-icon-left-nav" @click="back"></span style="color: black">返回</button>
    </header>
  <div style="height: 40px;">
    
  </div>
  <transition>
      <router-view></router-view>
  </transition>
  <lg-preview></lg-preview>
  <div class="buttom"></div>
  <nav fixed class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcart">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>

  
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: '',
      show: '',
    }
  },
  watch:{
    $route(to,from){
      if(to.path=="/home"||to.path=="/member"||to.path=="/shopcart"||to.path=="/search"){
        this.show=false;
      } else{
        this.show=true;
      }
    }
  },
  methods:{
    back(){
    this.$router.go(-1);//返回上一层
  }
  },  
  created(){
    if(this.$route.path=="/home"){
      this.show=false;
    } else {
      this.show=true;
    }
    
  }
}
</script>

<style>
.v-enter,
{
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active{
  transition: all 0.5s ease;
}
.buttom{
  padding-bottom: 50px;
}
</style>
