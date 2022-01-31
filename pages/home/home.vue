<template>
	<my-noti v-if="allnoti"></my-noti>
	<view v-else class="no-noti">无通知</view>

</template>

<script>
	import { mapMutations,mapState } from "vuex"
	
	export default {
		data() {
			return {
			}
		},
		
		// 页面加载时执行
		onLoad() {
			// 更新列表
			this.getAllNoti();
		},
		computed: {
			// 按需导入仓库m_noti,
			...mapState('m_noti', ['allnoti']),
		},
		methods: {
			// 按需导入仓库m_noti,
			...mapMutations('m_noti', ['updateAllNoti']),
			/** 
			 * feat: 使用node服务模拟接口，详见 ../server/server.js (cnsam2012.2022.01.31)m_no
			 * *** 一定要见../server/server/js! ***
			 * 从模拟接口获取通知列表对象，并赋至 allnoti
			 */
			getAllNoti() {
				uni.request({
					url: "http://localhost:3000/notiList",
					success: res => {
						this.allNoti = res.data.allNoti;
						this.updateAllNoti(res.data.allNoti)
					}
				});
			},
		}
	}
</script>

<style>
	.no-noti {
		text-align: center;
		line-height: 40px;
	}
</style>
