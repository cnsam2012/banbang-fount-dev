<template>
	<view>
			<template v-if="item.level >= 0">
				<uni-card :title="item.title" mode="title" :is-shadow="true" :extra="getNotiLevelStr(item.level)"
					@click="beTapped(item.title)">
					<!-- 卡片内容区域 -->
		
					<!-- 通知编号标签 -->
					<uni-tag :text="item.no" type="error" :circle="true" size="mini" style="padding: 25rpx;"
						inverted="true"></uni-tag>
		
					<!-- 通知内容区域 -->
					<text class="noti_content">
						<!-- 渲染循环节 i，仅方便开发测试，发布时删除 -->
						循环节 i = {{i}}, 内容如下：
		
						<!-- 通知内容 -->
						{{item.content}}
					</text>
		
					<!-- 卡片按钮区域 -->
					<!-- 配合native，阻止事件冒泡 -->
					<view class="btnBox" style="padding: 30rpx 0 0 0;">
						<view class="btnInCard" @click.native.stop="checkBeTapped(item.title)">
							<uni-icons type="checkmarkempty" size="25"></uni-icons>
						</view>
						<view class="btnInCard" @click.native.stop="favBeTapped(item.title)">
							<uni-icons type="star-filled" size="25"></uni-icons>
						</view>
						<view class="btnInCard" @click.native.stop="moreBeTapped(i, item.no)">
							<uni-icons type="more-filled" size="25"></uni-icons>
						</view>
					</view>
				</uni-card>
			</template>
			<!-- "更多"菜单内容 -->
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
					<uni-list-item title="对此通知有疑问" clickable @click.native.stop="doubtBeTapped(item.title)">
					</uni-list-item>
					<uni-list-item title="分享通知" clickable @click.native.stop="shareBeTapped(item.title)">
					</uni-list-item>
					<uni-list-item title="取消" clickable @click.native.stop="closeMenu(i, item.no)"></uni-list-item>
				</uni-list>
			</uni-popup>
	
	</view>
</template>

<script>
	export default {
		name:"noti-card",
		data() {
			return {
				
			};
		},
		props: ['item'],
		methods: {
				
				
				/** 
				 * feat: 使用node服务模拟接口，详见 ../server/server.js (cnsam2012.2022.01.31)m_no
				 * *** 一定要见../server/server/js! ***
				 * 
				 * 从模拟接口获取通知列表对象，并赋至 allNoti
				 */
				log(val) {
					console.log("log here" + val);
				},
		
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

<style lang="scss">
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
