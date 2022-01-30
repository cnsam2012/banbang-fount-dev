<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				itemList:[]
			};
		},
		methods: {
			getList() {
				uni.request({
					url: 'http://localhost:3000/notiList',
					success: (res) => {
						console.log(res);
					}
				});
			}
		},
		onLoad() {
			
		}
	}
</script>

<style lang="scss">

</style>
