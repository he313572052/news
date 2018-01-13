<template>
	<div style="height:100%;">
		<view-box ref="viewBox">
			<x-header style="width: 100%;position: absolute;left: 0;top: 0;z-index: 100;" slot="header" :right-options="{showMore:true}"
			 @on-click-more="share()">
				<span style="font-size: .25rem;" slot="default">{{news.title}}</span>
			</x-header>
			<div class="n-content" slot="default">
				<h3 style="text-align: center;">{{news.title}}</h3>
				<div v-html="news.content"></div>
			</div>
			<actionsheet :value="isShare" :menus="menus" theme="ios" :show-cancel="true" cancel-text="取消" @on-click-menu-cancel="isShare=false">
			</actionsheet>
		</view-box>
	</div>
</template>

<script scoped>
	import { ViewBox, XHeader, Actionsheet } from 'vux'
	export default {
		components: {
			ViewBox,
			XHeader,
			Actionsheet
		},
		data() {
			return {
				news: {},
				menus: ['分享到朋友圈', '分享到微信'],
				isShare: false,
			}
		},
		mounted() {
			let type = this.$route.params.type;
			let id = this.$route.params.id;
			this.$http.post('/news/content', {
				type: type,
				id: id
			}).then(function(res) {
				this.news = res.data;
			}.bind(this)).catch(function(error) {
				console.log(error);
			});
		},
		methods: {
			share() {
				this.isShare = true;
			}
		}
	}
</script>

<style>
	.n-content {
		width: 100%;
		overflow: hidden;
		margin-top: 50px;
	}
	
	.title {
		text-align: center;
	}
	
	.n-content p {
		text-indent: .4rem;
	}
	
	.n-content p span {
		font-size: .22rem;
	}
	
	.otitle {
		text-align: center;
		text-indent: 0;
	}
	
	.n-content a {
		color: darkblue;
		text-decoration: underline;
	}
	
	.n-content img {
		display: block;
		margin: 0 auto;
		width: 100%;
		height: auto;
	}
</style>