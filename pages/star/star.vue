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
				}
				}
	}
</script>

<style lang="scss">

</style>
