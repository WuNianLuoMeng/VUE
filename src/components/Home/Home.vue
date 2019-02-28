<template>
  <div class="">


    <mt-swipe :auto="4000" style="height: 200px;">
      <mt-swipe-item v-for="(img,index) in imgs" :key="index">
        <img :src="img.image" style="width: 100%;height: 100%;">
      </mt-swipe-item>
    </mt-swipe> 
    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/NewsList">
                <img src="../../assets/img/xinwen.png">
                <div class="mui-media-body">新闻资讯</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/ImagesList">
                <img src="../../assets/img/tupian.png">
                <div class="mui-media-body">图片欣赏</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/Goods">
                <img src="../../assets/img/shangpin.png">
                <div class="mui-media-body">商品购买</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/Music">
                <img src="../../assets/img/yinyue.png">
                <div class="mui-media-body">音乐播放</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/Video">
                <img src="../../assets/img/video.png">
                <div class="mui-media-body">视频专区</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                <img src="../../assets/img/lianxiwomen.png">
                <div class="mui-media-body">联系我们</div></router-link></li>
    </ul> 
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '',
      imgs:[],    //存放图片
      content: ''
    }
  },
  created () {
    this.$axios.get('../../static/json/test.json').then(res=>{
      this.imgs=res.data.message;
      this.imgs.splice(2);
    })
  }
}
</script>
<style scoped>
  img{
    height: 50px;
    width: 50px;
  }
  .mui-grid-view.mui-grid-9{
    background-color: white;
    border: none;
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: none;
  }
  .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
    font-size: 13px;
  }
</style>
