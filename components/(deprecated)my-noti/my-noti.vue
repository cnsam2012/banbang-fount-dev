<template>
	<view class="container">

		<!-- 搜索框组件 -->
		<!-- TODO：keywords数据默认为空字符串，但仍被编译器认为存在内容，原因未知 -->
		<uni-search-bar @confirm="searchConfirm" bgColor="#eaeaea" placeholder="输入关键词" focus="false" radius="20"
			v-model="keywords">
		</uni-search-bar>


		<uni-collapse>
			<!-- 未读通知不被折叠 -->
			<!-- 使用了uni-app卡片组件 -->
			<!-- 约定 level >= 0 即为未读通知 -->
			<!-- 渲染未读通知列表 -->
			<view v-for="(item, i) in allnoti" :key="item.no">
				<noti-card :item='item'></noti-card>
			</view>

			<!-- 折叠已读通知 -->
			<uni-collapse-item title="全部已读" show-animation="true">
				<!-- 使用了uni-app卡片组件 -->
				<!-- 约定 level < 0 即为已读通知 -->
				<!-- 渲染已读通知列表 -->
				<view v-for="(item, i) in allnoti" :key="item.no">
					<noti-card :item='item'></noti-card>
				</view>
			</uni-collapse-item>

		</uni-collapse>

	</view>

</template>

<script>
	import { mapState } from "vuex"
	
	export default {
		data() {
			return {

				// 搜索框关键词绑定，默认值为空
				keywords: "",

				// 新通知对象列表
				// TODO: 列表应该从服务器获取，这里的test_notificationsList仅作为示例
				// test_notificationsList: [] --弃用
				// 页面加载时，该数据被更新
				allNoti: [{
					no: 20000,
					title: '启动node服务！',
					content: 'node服务没有启动！列表什么都没有！见 ../server/server.js',
					date: "1984-01-01",
					time: "20:15",
					level: 3
				}]

			}
		},
		computed: {
			// 按需导入仓库m_noti,
			...mapState('m_noti', ['allnoti']),
		},

		methods: {

			/**
			 * 将通知等级转换为文字，默认返回“一般通知”
			 * @param {number} val
			 * @return {string} 
			 * 
			 */
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

			// 测试卡片点击事件，弹出提示框
			// mask:true 阻止点击穿透，后续不再作此注释
			beTapped(msg) {
				// console.log(msg);
				wx.showToast({
					title: msg,
					mask: true,
					icon: 'success',
					duration: 1500
				})
			},

			// 收藏按钮点击事件，弹出提示框
			favBeTapped(msg) {
				// console.log(msg);
				wx.showToast({
					title: msg + ' fav',
					mask: true,
					icon: 'success',
					duration: 1500
				})
			},

			// 确认按钮点击事件，弹出提示框
			checkBeTapped(msg) {
				// console.log(msg);
				wx.showToast({
					title: msg + ' check',
					mask: true,
					icon: 'success',
					duration: 1500
				})
			},

			// 标记为未读按钮点击事件，弹出提示框
			unreadBeTapped(msg) {
				// console.log(msg);
				wx.showToast({
					title: msg + ' unread',
					mask: true,
					icon: 'success',
					duration: 1500
				})
			},

			// 更多按钮点击事件
			moreBeTapped(i, no) {
				console.log("i = " + i);
				console.log("no = " + no);
				this.$refs.popup[i].open();
			},

			// 已读通知 - 更多按钮点击事件
			readMoreBeTapped(i, no) {
				console.log("i = " + i);
				console.log("no = " + no);
				this.$refs.readPopup[i].open();
			},

			// 疑问按钮点击事件
			doubtBeTapped(msg) {
				// console.log(msg);
				wx.showToast({
					title: msg + " doubt",
					mask: true,
					icon: 'success',
					duration: 1500
				});
			},

			// 分享按钮点击事件
			shareBeTapped(msg) {
				// console.log(msg);
				wx.showToast({
					title: msg + " share",
					mask: true,
					icon: 'success',
					duration: 1500
				});
			},

			// 菜单中的“取消”按钮点击事件
			closeMenu(i, no) {
				console.log("i = " + i + " close");
				console.log("no = " + no + " close");
				this.$refs.popup[i].close();
			},

			// 已读通知 - 菜单中的“取消”按钮点击事件
			readCloseMenu(i, no) {
				console.log("i = " + i + " close");
				console.log("no = " + no + " close");
				this.$refs.readPopup[i].close();
			},

			// 相应搜索框的“搜索”动作
			searchConfirm() {
				// console.log(this.keywords);
				// 弹框提示输入的关键词
				var msg = this.keywords;
				wx.showToast({
					title: msg,
					mask: true,
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
