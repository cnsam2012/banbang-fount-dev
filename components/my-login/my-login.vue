<template>
	<view class="top-box">
		<view class="avatar">
		请登录
		</view>
		<button  class="btn-login"  @click="getUserInfo">一键登录</button>
	</view>
</template>

<script>
	import { mapMutations } from "vuex"
	
	export default {
		name:"my-login",
		data() {
			return {
				
			};
		},
		methods:{
			...mapMutations('m_user', ['updateUserInfo', 'updateToken', 'updateRedirectInfo']),
			 getUserInfo() {
				 console.log('aaaaaa')
					uni.getUserProfile({
						desc:'weixi',
						success: res=> {
							console.log('你成功授权了')
							
							this.updateUserInfo(res.userInfo)
							
							//假装登录
							this.updateToken('nb')
							//
							
						},
						fail:res => {
							console.log('你取消了授权')
						}
						
					})				
			},
		// 	async getToken(info) {
		// 	        // 获取 code 对应的值
		// 	        const [err, res] = await uni.login().catch(err => err)
			
		// 	        if (err || res.errMsg !== 'login:ok') return uni.$showMsg('登录失败！')
		// 	        // 准备参数
		// 	        const query = {
		// 	          code: res.code,
		// 	          encryptedData: info.encryptedData,
		// 	          iv: info.iv,
		// 	          rawData: info.rawData,
		// 	          signature: info.signature
		// 	        }	
		// 	       //后面需要后端技术支持
		// },
		},
		
		
	}
</script>

<style lang="scss">
	.top-box {
		height: 500rpx;
		background-color: #ccc;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.avatar {
	  width: 90px;
	  height: 90px;
	  border-radius: 45px;
	  background-color: #666;
	  border: 2px solid #FFF;
	  box-shadow: 0 1px 5px black;
	  text-align: center;
	  line-height: 90px;
	  margin-top: 20px;
	}
	.btn-login {
		margin-top: 20px;
	}
</style>
