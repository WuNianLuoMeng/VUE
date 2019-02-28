<template>




  <div class="Main">
      <div class="mui-content-padded" v-for="(img,index) in imageslist" :key="index" style="padding:10px;">
          <img 
                v-preview="img.url"
                :src="img.url"                
                :key="index"
                preview-title-enable="true"
                preview-nav-enable="true">
        
      </div>
  </div>
</template>
<script>
export default
 {
  name: '',
  data () {
    return {
      msg: '',
      imageslist: []
    }
  },
  created(){

    var url = '/GetImagesList'
    this.$axios.get(url).then(res => {
      this.imageslist=res.data.data;
      console.info(res.data.data);
    },res => {
      console.info('调用失败');
    });
    }
  
}
</script>
<style scoped>
  .submain{
    padding-left: 4px;
    padding-right: 4px;
  }
  img{
    width: 100%;
    height: 100%;
  }


</style>
