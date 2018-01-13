<template>
	<div class="h-header">
		<tab active-color="#3A9AFF">
			<tab-item selected @on-item-click="handler('car')">汽车</tab-item>
			<tab-item @on-item-click="handler('phone')">手机</tab-item>
			<tab-item @on-item-click="handler('digital')">数码</tab-item>
			<tab-item @on-item-click="handler('technology')">科技</tab-item>
		</tab>
	</div>
</template>

<script>
	import { Tab, TabItem } from 'vux'
	export default {
		components: {
			Tab,
			TabItem
		},
		methods: {
			handler(value) {
				console.log(this.$router);
				this.$router.replace('/home/' + value);
			}
		}
	}
</script>

<style scoped>
	.h-header {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 100;
		width: 100%;
	}
</style>