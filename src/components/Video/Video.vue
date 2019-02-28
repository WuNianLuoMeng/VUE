<template>
  <div class="Main">
  		<div class="item-list" v-for="(video,index) in Video" :key="index">
  			<a :href="video.data.content.data.playUrl">
  				<img :src="video.data.content.data.cover.detail">
  			</a>
  			<p class="zhu-title">
  				<span>{{ video.data.content.data.title }}</span>
  			</p>
  			<p class="fu-title">
  				<span>{{ video.data.header.description }}</span>
  			</p>
  		</div>

  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      msg: '',
      Video: []
    }
  },
   created(){
  	var url = '/GetVideoList'
    this.$axios.get(url).then(res => {
    	this.Video=res.data.result;	
    	this.Video.splice(0,1);
    	this.Video.splice(3,1);
    	this.Video.splice(8,1);
    	this.Video.splice(0,3);
    	//this.Video.forEach(item=>{
    		//console.info(item.data.content.data.cover.detail);
    	//})
      //console.info(this.Video);
    },res => {
      console.info('调用失败');
    });
  	}
}
</script>
<style scoped>
	.add{
		padding-top: 15px;
	}
	.Main{
		display: flex;
		flex-wrap: wrap;
		padding-top: 5px;
		padding-left: 5px;
		padding-bottom: 5px;
		padding-right: 5px;
		justify-content: space-between;
	}
	img{
		width: 100%;
	}
	.item-list{
		width: 49%;
		margin: 3px 0;
		border: 1px solid #ccc;
		box-shadow: 0 0 8px #ccc;
		margin-bottom: 10px;
		padding: 2px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.zhu-title,.fu-title{
		text-align: center;
	}
</style>