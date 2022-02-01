<template>
	<view>
		<template v-for="(item, i) in items">
			<noti-card :item="item"></noti-card>
		</template>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				items: [{
					no: 20000,
					title: '启动node服务！',
					content: 'node服务没有启动！列表什么都没有！见 ../server/server.js',
					date: "1984-01-01",
					time: "20:15",
					level: 3
				}, {
					no: 20001,
					title: 'Buzhidao',
					content: '第二条通知',
					date: "1984-01-01",
					time: "20:15",
					level: 1
				}]
			};
		},
		methods: {

		},

	}
</script>

<style lang="scss">

</style>
