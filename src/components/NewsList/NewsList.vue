<template>
  <div class="">
  	<ul class="mui-table-view">
		<li class="mui-table-view-cell mui-media" v-for="(News,index) in news" :key="index">
			<a :href="News.url">
				<img class="mui-media-object mui-pull-left" :src="News.imgsrc">
				<div class="mui-media-body">
					<h1>{{ News.title }}</h1>
					<p class='mui-ellipsis'>
						<span>发表时间：{{ News.mtime }}</span>
						<span>点击数：0次</span>
					</p>
				</div>
			</a>
		</li>
	</ul>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      msg: '',
      news: []//新闻数组
    }
  },
  created(){
  	var url = '/GetNewslist'
    this.$axios.get(url).then(res => {
    	this.news=res.data.T1348647853363;
      //console.info(this.news);
    },res => {
      console.info('调用失败');
    });
  	}
}
</script>
<style scoped>
	h1{
		font-size: 14px;
	}
	.mui-ellipsis{
		display: flex;
		justify-content: space-between;
		font-size: 12px;
		color: #226aff;
	}

</style>
