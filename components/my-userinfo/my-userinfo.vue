<template>
	<view class="my-userinfo-container">
		<!-- 渲染用户头像以及名称 -->
		<view class="info-box">
			<image :src="userinfo.avatarUrl" class="avatar"></image>
			<view class="nickname">{{userinfo.nickName}}</view>
		</view>

		<!-- 用户界面功能模块 -->
		<view class="panel-lish">
			<!-- 第一个功能面板 -->
			<view class="panel-col">
				<view class="panel-item" @click="sendNoti">
					<text>图片区</text>
					<text>发布通知</text>
				</view>
				<view class="panel-item">
					<text>图片区</text>
					<text>班级信息</text>
				</view>
				<view class="panel-item">
					<text>占位</text>
					<text>占位</text>
				</view>
				<view class="panel-item">
					<text>占位</text>
					<text>占位</text>
				</view>
				<view class="panel-item">
					<text>占位</text>
					<text>占位</text>
				</view>
			</view>
			<!-- 第二个功能面板 -->
			<view>

			</view >
			<!-- 第三个功能面板 -->
			<view class="panel-row">
				<view class="panel-item">
					<text>占位</text>
				</view>
				<view class="panel-item">
					
					<text>占位</text>
				</view>
				<view class="panel-item" @click="logout()">
					<text>退出登录</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations 
	} from 'vuex'

	export default {
		name: "my-userinfo",
		data() {
			return {

			};
		},

		computed: {
			...mapState('m_user', ['token', 'userinfo']),
		},

		methods: {
			...mapMutations('m_user', ['updateUserInfo', 'updateToken']),
			sendNoti() {
				uni.navigateTo({
					url: '../../mypkg/noti-send/noti-send' 
				})
			},
			
			async logout() {
			const [err,succ] = await uni.showModal({
					title: '提醒',
					content: '确认要退出吗'
				}).catch(err => err)
				
				if (succ && succ.confirm) {
					this.updateUserInfo({}),
					this.updateToken('')
				}
				
			}
		}
	}
</script>

<style lang="scss">
	.my-userinfo-container {
		
		.info-box {
			height: 400rpx;
			background-color: #c1c1c1;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;

			.avatar {
				width: 90px;
				height: 90px;
				border-radius: 45px;
				border: 2px solid #FFF;
				box-shadow: 0 1px 5px black;
			}

			.nickname {
				font-size: 16px;
				color: #FFF;
				font-weight: bold;
				margin-top: 10px;
				text-shadow: 0 1px 5px black;
			}


		}

		.panel-lish {
			.panel-col {
				display: flex;
				justify-content: space-around;
				.panel-item {
					display: flex;
					flex-direction: column;
					align-items: center;
					// justify-content: space-around;
					padding: 20rpx 0;
					font-size: 13px;
				}
			}
			.panel-row {
				position: absolute;
				bottom: 20px;
				
				.panel-item {
					
					display: flex;
					flex-direction: row;
					align-items: center;
					// justify-content: space-around;
					padding: 5px 0px 5px 10px;
					font-size: 13px;
				}
			}
		}
	}
</style>
