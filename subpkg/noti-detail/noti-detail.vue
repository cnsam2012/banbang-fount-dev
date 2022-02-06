<template>
	<view class="container">
		<uni-collapse>
			<view v-for="noti in allNoti" :key="noti.no">
				<template v-if="noti.no == notiNo">
					<my-uni-section :title="noti.title" :sub-title="getNotiLevelStr(noti.level)"
						:numberColor="getNoColorStr(noti.level)" :notiNo="noti.no">
					</my-uni-section>

					<uni-section :title="noti.content"></uni-section>
					
					<uni-section title="上传文件" sub-title="选择对应的文件"></uni-section>
					<view class="upLoadImage">
						<uni-file-picker v-model="fileValue" fileMediatype="all" mode="grid" @select="select"
							@progress="progress" @success="success" @fail="fail" />
					</view>
				</template>
			</view>
		</uni-collapse>


	</view>
</template>

<script>
	import {
		mapMutations,
		mapState,
		mapActions
	} from "vuex"

	export default {
		data() {
			return {
				// 定义数据仅作测试，尚未连接至主页
				notiNo: -10000,

				fileValue: []
			};
		},

		mounted() {
			// 仅单页测试使用：更新vuex中的数据
			this.getNoti();
		},

		computed: {
			// 分发 m_noti:noti.js 的 State
			...mapState('m_noti', ['allNoti']),

		},
		
		// 生命周期函数
		onLoad(options) {
			// console.log(options);
			this.notiNo = options.notiNo;
		},

		methods: {
			// 分发 m_noti:noti.js 的 Action
			...mapActions('m_noti', ['getNoti']),

			getNotiLevelStr(val) {
				switch (val) {
					case 1:
						return "一般通知"; //用于通知全部人的普通通知
						break;
					case 2:
						return "特别通知"; //用于通知特定人员的通知
						break;
					case 3:
						return "紧急通知"; //紧急通知，优先级最高
						break;
					case 0:
						return "资料收集";
						break;
					case -1:
						return "已读";
						break;
					default:
						return "一般通知";
						break;

				}
			},

			getNoColorStr(val) {
				if (val < 0) {
					return 'primary';
				} else {
					return 'error';
				}
			},


			//filePicker 方法组
			// 获取上传状态
			select(e) {
				console.log('选择文件：', e)
			},
			// 获取上传进度
			progress(e) {
				console.log('上传进度：', e)
			},
			// 上传成功
			success(e) {
				console.log('上传成功')
			},
			// 上传失败
			fail(e) {
				console.log('上传失败：', e)
			}


		}
	}
</script>

<style lang="scss">
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
		
		.upLoadImage {
			// border: 1rpx solid deeppink;
			margin: 30rpx;
		}
	}
</style>
