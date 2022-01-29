<template>
	<view class="container">

		<!-- 搜索框组件 -->
		<!-- TODO：keywords数据默认为空字符串，但仍被编译器认为存在内容，原因未知 -->
		<uni-search-bar @confirm="searchConfirm" bgColor="#eaeaea" placeholder="输入关键词" focus="false" radius="20"
			v-model="keywords">
		</uni-search-bar>

		<!-- 使用了uni-app卡片组件 -->
		<view v-for="(item, no) in test_notificationsList" :key="item.no">
			<uni-card :title="item.title" mode="title" :is-shadow="true" :extra="getNotiLevelStr(item.level)"
				@click="beTapped(item.title)">

				<!-- 卡片内容区域 -->
				<text class="noti_content">{{item.content}}</text>

				<!-- 卡片按钮区域 -->
				<!-- 配合native，阻止事件冒泡 -->
				<view class="btnBox" style="padding: 30rpx 0 0 0;">
					<view class="btnInCard" @click.native.stop="checkBeTapped(item.title)">
						<uni-icons type="checkmarkempty" size="25"></uni-icons>
					</view>
					<view class="btnInCard" @click.native.stop="favBeTapped(item.title)">
						<uni-icons type="star-filled" size="25"></uni-icons>
					</view>
					<view class="btnInCard" @click.native.stop="moreBeTapped(item.no)">
						<uni-icons type="more-filled" size="25"></uni-icons>
					</view>
				</view>
			</uni-card>

			<!-- "更多"菜单 -->
			<uni-popup ref="popup" type="bottom" background-color="#fff" @click.native.stop>
				<!-- 按钮区域 -->
				<view class="btnBox" style="padding: 0;">
					<view @click.native.stop="checkBeTapped(item.title)" class="btnInMore">
						<uni-icons type="checkmarkempty" size="25">
						</uni-icons>
						<text>已读</text>
					</view>
					<view @click.native.stop="favBeTapped(item.title)" class="btnInMore">
						<uni-icons type="star-filled" size="25">
						</uni-icons>
						<text>收藏</text>
					</view>
				</view>
				<!-- 列表菜单 -->
				<uni-list>
					<uni-list-item title="对此通知有疑问" clickable @click.native.stop="doubtBeTapped(item.title)"></uni-list-item>
					<uni-list-item title="分享通知" clickable @click.native.stop="shareBeTapped(item.title)"></uni-list-item>
					<uni-list-item title="取消" clickable @click.native.stop="closeMenu(item.no)"></uni-list-item>
				</uni-list>
			</uni-popup>
		</view>


	</view>

</template>



<script>
	export default {
		data() {
			return {

				// 搜索框关键词绑定，默认值为空
				keywords: "",

				// 新通知对象列表
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
						title: 'Normal - 2',
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

			// 更多按钮点击事件，弹出popup菜单
			moreBeTapped(no) {
				console.log(no);
				this.$refs.popup[no].open();
			},

			// 疑问按钮点击事件，弹出popup菜单
			doubtBeTapped(msg) {
				// console.log(msg);
				wx.showToast({
					title: msg + " doubt",
					mask: true,
					icon: 'success',
					duration: 1500
				});
			},

			// 分享按钮点击事件，弹出popup菜单
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
			closeMenu(no) {
				console.log(no + " close");
				this.$refs.popup[no].close();
			},

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
