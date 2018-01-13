<template>
	<div class="h-container">
		<scroller lock-x @on-scroll-bottom="loadmore()">
			<div slot="default">
				<ul>
					<router-link class="h-item" :to="'/news/phone/'+item.id" tag="li" v-for="item in items">
						<p>{{item.com}}<span class="right">{{item.newsTime}}</span></p>
						<h2>{{item.title}}</h2>
						<img :src="item.img" alt="" />
						<p>{{item.preview}}</p>
					</router-link>
				</ul>
				<divider>已到底</divider>
			</div>
		</scroller>
	</div>
</template>

<script>
	import { Scroller,Divider } from 'vux'
	export default {
		components: {
			Scroller,
			Divider
		},
		data() {
			return {
				items: [],
				page: 1,
				flag: true,
			}
		},
		mounted() {
			this.getData(1, function(res) {
				this.items = res.data.list;
			}.bind(this));
		},
		methods: {
			getData(page, callback) {
				this.$http.post('/news/list', {
					type: 'phone',
					page: page
				}).then(function(res) {
					callback(res);
				}.bind(this)).catch(function(error) {
					console.log(error);
				})
			},
			loadmore() {
				if(this.flag) {
					this.flag = false;
					let page = this.page += 1;
					this.getData(page, function(res) {
						this.items.push.apply(this.items, res.data.list);
						this.flag = true;
					}.bind(this))
				}
			},
			pulldownrefresh() {

			}
		}
	}
</script>

<style>

</style>