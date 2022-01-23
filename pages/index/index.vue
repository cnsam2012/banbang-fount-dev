<template>
	<view class="container">

		<!--使用了uni-app卡片组件-->
		<view v-for="(item, no) in test_notificationsList" :key="item.no">
			<uni-card :title="item.title" mode="title" :is-shadow="true" :extra="getNotiLevelStr(item.level)"
				@click="beTapped(item.title)" >
				<text class="noti_content" >{{item.content}}</text>
				<!-- 配合native，阻止事件冒泡 -->
				<view style="padding: 30rpx 0 0 0;"><uni-fav :checked="checked" @click.native.stop="beTapped(item.title + ' fav')" /></view>
			</uni-card>
		</view>
		

	</view>
</template>



<script>
	export default {
		data() {
			return {

				// 通知对象列表
				// TODO: 列表应该从服务器获取，这里的test_notificationsList仅作为示例
				test_notificationsList: [{
						no: 0,
						title: 'Normal',
						content: '一般通知1，内容在这里呈现，内容在这里呈现',
						level: 1
					},
					{
						no: 1,
						title: 'Special',
						content: '特别通知，内容在这里呈现，内容在这里呈现，内容在这里呈现，内容在这里呈现，我很长，我很长，我很长，我很长，我很长，我很长，我很长，我很长，我很长，我很长，我很长，我很长',
						level: 2
					},
					{
						no: 2,
						title: 'Emergency',
						content: '紧急通知，内容在这里呈现，内容在这里呈现',
						level: 3
					},
					{
						no: 3,
						title: 'upLoad',
						content: '文件资料收集，内容在这里呈现，内容在这里呈现',
						level: 0
					},
					{
						no: 4,
						title: 'Normal',
						content: '一般通知2，内容在这里呈现，内容在这里呈现',
						level: 1
					},
				]
			}
		},
		methods: {
			log(val) {
				console.log("log here" + val);
			},

			//将通知等级转换为文字，默认返回“一般通知”
			getNotiLevelStr(val) {
				switch (val) {
					case 1:
						return "一般通知";
						break;
					case 2:
						return "特别通知";
						break;
					case 3:
						return "紧急通知";
						break;
					case 0:
						return "资料收集";
						break;
					default:
						return "一般通知";
						break;

				}
			},

			// 测试点击事件，弹出提示框
			beTapped(msg) {
				console.log(msg);
				wx.showToast({
					title: msg,
					icon: 'success',
					duration: 1500
				})
			}
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
