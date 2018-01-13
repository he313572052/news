<template>
	<div id="app" style="height: 100%;">
		<loading :show="isLoading" text="加载中" load></loading>
		<transition name="router-fade" mode="out-in">
			<router-view></router-view>
		</transition>
		<Footer></Footer>
	</div>
</template>

<script>
	import { Loading } from 'vux'
	import { mapGetters } from 'vuex'
	import Footer from '@/components/Footer.vue'
	export default {
		name: 'app',
		components: {
			Footer,
			Loading
		},
		computed: mapGetters(['isLoading']),
		watch: {
			$route(to, from) {
				//				let reg = /\/list\/*/g;
				//				let isnews = reg.test(to.path);
				//				if(isnews) {
				//					this.$store.dispatch('showHeader');
				//				} else {
				//					this.$store.dispatch('hideHeader');
				//				}
			}
		}
	}
</script>

<style lang="less">
	@import url("assets/css/home.css");
	@import '~vux/src/styles/reset.less';
</style>