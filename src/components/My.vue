<template>
	<div style="height:100%;">
		<view-box ref="viewBox">
			<x-header style="width: 100%;position: absolute;left: 0;top: 0;z-index: 100;" slot="header" @on-click-more="share()">
				<span style="font-size: .25rem;" slot="default">用户信息</span>
			</x-header>
			<flexbox style="margin-top: 60px;" orient="vertical">
				<flexbox-item>
					<div class="m-icon"><img src="@/assets/img/init.jpg" alt="" /></div>
				</flexbox-item>
				<flexbox-item style="text-align:center;">
					<span class="nickname">紫荆大叫</span>
				</flexbox-item>
			</flexbox>
			<group>
				<cell-box is-link>
					<img class="m-cell-icon" src="@/assets/icon/data.svg" alt="" />
					<span class="m-cell">完善资料</span>
				</cell-box>
				<cell-box is-link>
					<img class="m-cell-icon" src="@/assets/icon/motify.svg" alt="" />
					<span class="m-cell">修改密码</span>
				</cell-box>
				<cell-box is-link>
					<img class="m-cell-icon" src="@/assets/icon/follow.svg" alt="" />
					<span class="m-cell">我的关注</span>
				</cell-box>
				<cell-box is-link>
					<img class="m-cell-icon" src="@/assets/icon/collection.svg" alt="" />
					<span class="m-cell">我的收藏</span>
				</cell-box>
			</group>
			<grid>
				<grid-item label="完善资料" >
					<img slot="icon" src="@/assets/icon/data.svg">
				</grid-item>
				<grid-item label="修改密码">
					<img slot="icon" src="@/assets/icon/motify.svg">
				</grid-item>
				<grid-item label="我的关注">
					<img slot="icon" src="@/assets/icon/follow.svg">
				</grid-item>
				<grid-item label="我的收藏">
					<img slot="icon" src="@/assets/icon/collection.svg">
				</grid-item>
			</grid>
			<grid>
				<grid-item label="汽车" link="/home/car">
					<img slot="icon" src="@/assets/icon/car.svg">
				</grid-item>
				<grid-item label="手机" link="/home/phone">
					<img slot="icon" src="@/assets/icon/phone.svg">
				</grid-item>
				<grid-item label="数码" link="/home/digital">
					<img slot="icon" src="@/assets/icon/digital.svg">
				</grid-item>
				<grid-item label="科技" link="/home/technology">
					<img slot="icon" src="@/assets/icon/technology.svg">
				</grid-item>
			</grid>
		</view-box>
	</div>
</template>

<script scoped>
	import { ViewBox, XHeader, Flexbox,FlexboxItem, Group, CellBox, Grid, GridItem } from 'vux'
	export default {
		components: {
			ViewBox,
			XHeader,
			Flexbox,
			FlexboxItem,
			Group,
			CellBox,
			Grid,
			GridItem
		},
		data() {
			return {
				news: {},
				menus: ['分享到朋友圈', '分享到微信'],
				isShare: false,
			}
		}
	}
</script>

<style>
	.m-container {
		width: 100%;
		overflow: hidden;
		margin-top: 50px;
		background: #FFF;
	}
	
	.m-icon {
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 50%;
		overflow: hidden;
		margin: 0 auto;
	}
	
	.m-icon img {
		width: 100%;
		height: auto;
	}
	
	.nickname {
		font-size: .22rem;
		color: #555;
	}
	
	.m-cell-icon {
		width: .5rem;
		height: auto;
		margin-right: .2rem;
	}
	
	.m-cell {
		font-size: .25rem;
		font-family: "微软雅黑";
		color: #888;
	}
</style>