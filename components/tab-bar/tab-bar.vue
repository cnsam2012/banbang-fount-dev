<template>
	<view class="tab-bar">
		<view v-for="(item,index) in list" :key="index" class="tab-bar-item" @click="switchTab(item, index)">
			<image class="tab_img" :src="selected === index ? item.selectedIconPath : item.iconPath"></image>
			<view class="tab_text" :style="{color: selected === index ? selectedColor : color}">{{item.text}}</view>
		</view>
	</view>
 
</template>
 
 
 
<script>
	export default {
		props: {
			selected: { // 当前选中的tab index
				type: Number,
				default: 0
			},
			userIdentity: { // 当前角色
				type: Number,
				default: 0
			}
 
		},
		data() {
			return {
				color: "#333333",
				selectedColor: "#333333",
				list: [{
					pagePath: "/pages/patientHome/patientHome",
					iconPath: "/static/images/home.png",
					selectedIconPath: "/static/images/home_s.png",
					text: "首页"
				}, {
					pagePath: "/pages/mine/mine",
					iconPath: "/static/images/mine.png",
					selectedIconPath: "/static/images/mine_s.png",
					text: "我的"
				}]
			}
		},
		methods: {
			switchTab(item, index) {
				console.log("item", item)
				console.log("index", index)
				let url = item.pagePath;
                // 对应患者和医生的首页
				if (index == 0) {
					switch (this.userIdentity) {
						// 患者
						case 0:
							url = "/pages/patientHome/patientHome"
							break
						// 医生
						case 1:
							url = "/pages/doctorHome/doctorHome"
							break
					}
 
				}
                // 对应患者和医生的我的页面
				if (index == 1) {
					switch (this.userIdentity) {
						// 患者
						case 0:
							url = "/pages/mine/mine"
							break
						// 医生
						case 1:
							url = "/pages/doctorMine/doctorMine"
							break
					}
 
				}
				uni.switchTab({
					url
				})
 
			}
		}
	}
</script>
 
<style lang="scss">
	.tab-bar {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 100rpx;
		background: white;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-bottom: env(safe-area-inset-bottom); // 适配iphoneX的底部
 
		.tab-bar-item {
			flex: 1;
			text-align: center;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
 
			.tab_img {
				width: 37rpx;
				height: 41rpx;
			}
 
			.tab_text {
				font-size: 20rpx;
				margin-top: 9rpx;
			}
		}
	}
</style>