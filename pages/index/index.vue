<template>
	<view class="container">

		<view v-for="(item, no) in test_notificationsList" :key="item.no">
			<uni-card :title="item.title" mode="title" :is-shadow="true" :extra="getNotiLevelStr(item.level)" note="Tips">
				{{item.content}}
			</uni-card>
		</view>

	</view>
</template>



<script>
	export default {
		data() {
			return {
				test_notificationsList: [{
						no: 0,
						title: 'Normal',
						content: '一般通知1，内容在这里呈现，内容在这里呈现',
						level: 1
					},
					{
						no: 1,
						title: 'Special',
						content: '特别通知，内容在这里呈现，内容在这里呈现，，内容在这里呈现，内容在这里呈现',
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
				]
			}
		},
		methods: {
			log(val) {
				console.log("log here" + val);
			},
			
			getNotiLevelStr(val) {
				switch(val) {
					case 1: return "一般通知";break;
					case 2: return "特别通知";break;
					case 3: return "紧急通知";break;
					case 0: return "资料收集";break;
					default: return "一般通知";break;
					
				}
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
