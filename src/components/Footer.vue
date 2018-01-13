<template>
	<div class="footer" >
		<tabbar slot="bottom">
			<tabbar-item selected link="/home/car">
				<img slot="icon" src="@/assets/icon/home01.svg">
				<img slot="icon-active" src="../assets/icon/home02.svg" />
				<span slot="label">主页</span>
			</tabbar-item>
			<tabbar-item link="/my">
				<img slot="icon" src="@/assets/icon/me01.svg">
				<img slot="icon-active" src="@/assets/icon/me02.svg" />
				<span slot="label">我的</span>
			</tabbar-item>
		</tabbar>
	</div>
</template>

<script>
	import { Tabbar, TabbarItem } from 'vux'
	export default {
		components: {
			Tabbar,
			TabbarItem,
		}
	}
</script>
<style>
	
</style>