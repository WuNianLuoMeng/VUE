<template>
	<div class="Main">
			<div class="mui-input-row" style="margin: 8px;">
					<input type="search" class="mui-input-clear mui-input-clear" placeholder="搜索商品">
					<button type="button" class="btn" @click="search">确认搜索</button>
			</div>
		<div class="good" v-for="(good,index) in Goods" :key="index">
			<router-link :to="'/home/Goods/GoodsInfo/' + good.category_id">
			  	<img :src="good.pict_url">
			  	<h1 class="title">
			  		{{ good.short_title }}
			  	</h1>
			  	<div class="info">
			  		<p class="price">
			  			<span class="new">￥{{ good.zk_final_price }}</span>
			  			<span class="old">￥{{ good.reserve_price }}</span>
			  		</p>
			  		<p class="sell">
			  			<span>热卖中</span>
			  			<span>月销{{ good.tk_total_sales }}</span>
			  		</p>
			  	</div>
		  	</router-link>
		 </div>

	</div>

</template>

<script>
export default {
  name: '',
  data () {
    return {
      msg: '',
      Goods: []
    }
  },
  methods:{
  	search(){
  		
  	}
  },
  created(){



  	var url = '../../../static/json/Goods.json'
    this.$axios.get(url).then(res => {
    	this.Goods=res.data.tbk_dg_material_optional_response.result_list.map_data
      //console.info(res.data);
    },res => {
      console.info(res);
    });
  	}
}
</script>
<style scoped>
	.btn{
		margin-left: 30px;
		line-height: 1.1;
    	float: right;
    	height: 70%;
    	padding: 10px 15px;
    	color: #fff;
    	border: 1px solid #007aff;
    	background-color: #007aff;
	}
	.mui-input-row{
		display: flex;
		justify-content: space-between;
		font-size: 13px;
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
	.good{
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
	h1{
		font-size: 14px;
	}
	.info{
		background-color: #eee;
	}
	p{
		margin: 0;
		padding-bottom: 6px;
	}
	.new{
		color: red;
		font-weight: bold;
		font-size: 16px;
	}
	.old{
		text-decoration: line-through;
		font-size: 12px;
		margin-left: 10px;
	}
	.sell{
		display: flex;
		justify-content: space-between;
		font-size: 13px;
	}
</style>
