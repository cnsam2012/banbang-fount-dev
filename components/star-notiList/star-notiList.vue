<template>
	<view class="container">

		<!-- 搜索框组件 -->
		<!-- TODO：keywords数据默认为空字符串，但仍被编译器认为存在内容，原因未知 -->
		<uni-search-bar @confirm="searchConfirm" bgColor="#eaeaea" placeholder="输入关键词" focus="false" radius="20"
			v-model="keywords">
		</uni-search-bar>

		<!-- 为与主页统一样式，故保留 uni-collapse 标签 -->
		<uni-collapse>

			<!-- 渲染收藏通知列表 -->
			<view v-for="(item, i) in starNoti" :key="item.no">
				<noti-card :item='item'></noti-card>
			</view>

		</uni-collapse>

	</view>

</template>

<script>
	import {
		mapState
	} from "vuex"

	export default {
		name: 'star-notiList',
		data() {
			return {
				// 搜索框关键词绑定，默认值为空
				keywords: "",
			}
		},

		// 生命周期函数，组件被挂载后调用
		mounted() {
			// console.log(this.$store.state.m_noti);
		},

		computed: {
			// 分发 m_noti:noti.js 的 State
			...mapState('m_noti', ['starNoti']),
		},

		methods: {}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}

	/* 按钮盒子 */
	.btnBox {
		/* padding: 10rpx 0 10rpx 0; */
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}

	/* 卡片中按钮样式 */
	.btnInMore {
		/* border: 1px solid deeppink; */
		display: inline-block;
		height: 130rpx;
		width: 350rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	/* 菜单中按钮样式 */
	.btnInCard {
		/* border: 1px solid deeppink; */
		display: inline-block;
		height: 80rpx;
		width: 160rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
