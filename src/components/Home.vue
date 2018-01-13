<template>
	<div style="height:100%;">
		<view-box ref="viewBox">
			<Header></Header>
			<transition name="router-fade" mode="out-in">
				<router-view></router-view>
			</transition>
		</view-box>
	</div>
</template>

<script>
	import Header from '@/components/HomeHeader.vue'
	import { ViewBox } from 'vux'
	export default {
		components: {
			Header,
			ViewBox
		}
	}
</script>

<style>
	.h-container {
		background: #ddd;
		width: 100%;
		height: 100%;
		margin: 0 auto;
		max-width: 6.4rem;
		padding: 44px 0 38.5px 0;
	}
	
	.h-item {
		width: 100%;
		overflow: hidden;
		margin-bottom: .15rem;
		background: #FFF;
		padding: 0 .1rem;
		box-sizing: border-box;
	}
	
	.h-container li:last-of-type {
		margin-bottom: 0;
	}
	
	.h-item img {
		width: 100%;
		height: auto;
	}
</style>