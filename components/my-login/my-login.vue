<template>
	<view>
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

</style>
