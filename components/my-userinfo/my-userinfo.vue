<template>
	<view>
		<view class="top-box">
			<image :src="userinfo.avatarUrl" class="avatar"></image>
			<view class="nickname">{{userinfo.nickName}}</view>
		</view>
		<my-function></my-function>
	</view>
</template>

<script>
	import {
		mapState
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
			aa() {
				console.log(this.$store)
			}
		}
	}
</script>

<style lang="scss">
	.top-box {
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
</style>
