<template>
  <div class="Main">

  	<mt-swipe :auto="4000" style="height: 300px;">
      <mt-swipe-item v-for="(img,index) in imgs" :key="index">
        <img :src="img" style="width: 100%;height: 100%;">
      </mt-swipe-item>
    </mt-swipe> 
    <div style="margin-top: 10px; margin-bottom: 10px;">
      <h1>
        {{ title }}
      </h1>
    </div>
    <!--画横线-->
    <div style="width:400px;height:2px;margin:0px auto;padding:0px;background-color:#D5D5D5;overflow:hidden;"></div>
    <div class="info">
      <p class="price">
        <span class="new">￥{{ zh_price }}</span>
        <span class="old">￥{{ yx_price }}</span>
      </p> 
      <p class="sell">
        <span>热卖中</span>
        <span style="padding-right: 10px;">月销:{{  sell_number }}</span>
      </p>
    </div>

    <div class="btn">
      <button type="button" class="mui-btn mui-btn-warning" @click="back">返回</button>
      <a class="mui-btn mui-btn-danger" :href="URL">立即购买</a>
    </div>

  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      msg: '',
      id: '',
      content: '',
      Goods: [],
      imgs: [],
      title: '',
      zh_price: '',
      yx_price: '',
      sell_number: '',
      URL: ''
    }
  },
  methods:{
  	back(){
		this.$router.go(-1);//返回上一层
	},
	buy(){
		this.$router.push(this.URL);
	}
  },		
  created(){
  	this.id=this.$route.params.id;
  	var url = '../../static/json/Goods.json'
    this.$axios.get(url).then(res => {
    	this.Goods=res.data.tbk_dg_material_optional_response.result_list.map_data
      //console.info(res.data.tbk_dg_material_optional_response.result_list.map_data);

      this.Goods.forEach(item=>{
      	if(item.category_id==this.id){
      		this.content=item.category_name;
      		this.imgs=item.small_images.string;
      		this.title=item.short_title;
      		this.zh_price=item.zk_final_price;
      		this.yx_price=item.reserve_price;
      		this.sell_number=item.tk_total_sales;
      		this.URL=item.url;
      		//console.info(item.small_images.string)
      	}
      })

    },res => {
      console.info('调用失败');
    });
  	}
}
</script>

<style scoped>
 h1{
 	font-size: 20px;
 	color: blue;
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
	.btn{
		padding: 20px;
		display: flex;
		justify-content: space-between;
		font-size: 13px;
	}
</style>
