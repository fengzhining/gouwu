<template>
	<div class="index">

		<!-- 搜索 -->
		<van-search @focus="goState({name: 'Search'})" ref="search" class="search" background="#1989FA" placeholder="输入商品名称关键字" />

		<!-- 轮播 -->
		<van-swipe :autoplay="2500">
		  <van-swipe-item v-for="(item, index) in banners" :key="index">
		  	<img class="auto-img" :src="item.url" />
		  </van-swipe-item>
		</van-swipe>

		<!-- 商品类型标签 -->
		<van-tabs ref="vtabs" class="vtabs" v-model="active" title-active-color="#1989FA" color="#1989FA" :line-height="2" :swipeable="true" :animated="true">
		  <van-tab title="手机">
		  	<van-row>
		  		<van-col @click.native="goState({name: 'Detail', params: {pid: item.id}})" span="12" class="col-box" v-for="(item, index) in products['shouji']">
		  			<div><img class="auto-img" :src="item.images.small" /></div>
		  			<div class="product-info">
		  				<p class="title">{{item.name}}</p>
		  				<p class="price">{{item.price}}元</p>
		  			</div>
		  		</van-col>
		  	</van-row>
		  </van-tab>
		  <van-tab title="电脑" v-for="(value, index) in types">
		  	<van-row>
		  		<van-col @click.native="goState({name: 'Detail', params: {pid: item.id}})" span="12" class="col-box" v-for="(item, index) in products['diannao']">
		  			<div><img class="auto-img" :src="item.images.small" /></div>
		  			<div class="product-info">
		  				<p class="title">{{item.name}}</p>
		  				<p class="price">{{item.price}}元</p>
		  			</div>
		  		</van-col>
		  	</van-row>
		  </van-tab>
		  <van-tab title="耳机" v-for="(value, index) in types">
		  	<van-row>
		  		<van-col @click.native="goState({name: 'Detail', params: {pid: item.id}})" span="12" class="col-box" v-for="(item, index) in products['erji']">
		  			<div><img class="auto-img" :src="item.images.small" /></div>
		  			<div class="product-info">
		  				<p class="title">{{item.name}}</p>
		  				<p class="price">{{item.price}}元</p>
		  			</div>
		  		</van-col>
		  	</van-row>
		  </van-tab>
		</van-tabs>


	</div>
</template>

<script>

	import { Search, Swipe, SwipeItem, Tab, Tabs } from 'vant'

	export default {
		name: 'Index',

		data() {
			return {

				active: 0,

				//商品所有类型
				types: [],

				//所有类型商品 { 类型: [{当前类型商品1}, {当前类型商品2}])
				products: {
					
				},

				banners: [

					{url: 'http://127.0.0.1:8081/images/banner1.jpg'},
					{url: 'http://127.0.0.1:8081/images/banner2.jpg'},
					{url: 'http://127.0.0.1:8081/images/banner3.jpg'}

				]

			};
		},

		components: {
			[Search.name]: Search,
			[Swipe.name]: Swipe,
			[SwipeItem.name]: SwipeItem,
			[Tab.name]: Tab,
			[Tabs.name]: Tabs
		},

		//初始化数据
		created() {

			//获取本地存储商品类型
			this.types = JSON.parse(localStorage.getItem('types'));

			//获取本地存储商品信息
			var products = JSON.parse(localStorage.getItem('products'));

			//通过类型查找商品
			//遍历类型
			this.types.types.forEach(v1 => {

				this.products[v1.type] = [];

				//遍历商品
				products.products.forEach(v2 => {
					//如果类型一致, 则将该类型添加到当前类型数组中
					if (v1.type == v2.type) {
						this.products[v1.type].push(v2);
					}

				})

			})

		},

		//节点渲染完成后
		mounted() {

			var search = this.$refs.search;
			var searchHeight = getComputedStyle(search).height;

			this.offsetTop = parseFloat(searchHeight)
			
			var vtabs = this.$refs.vtabs.$el.firstChild;
			vtabs.style.position = 'sticky';
			vtabs.style.top = searchHeight;
		},


		methods: {

			goState(path) {
				this.$router.push(path);
			}

		}

	}
</script>

<style lang="less" scoped>
	.van-search__content{
		background-color: #fff;
	}

	.search{
		position: sticky;
		top: 0;
		z-index: 100;
	}

	.vtabs{
		padding-top: 0;
	}

	.col-box{
		padding: 0.2133rem;

		.product-info{
			text-align: center;
			.title{
				color: #888;
				margin-top: 0.2666rem;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}
			.price{
				color: #e4393c;
				margin-top: 0.2666rem;
			}
		}
	}
</style>