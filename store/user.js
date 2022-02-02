export default {
	// 开启命名空间
	namespaced: true,

	state: {
		token: '',
		// 用户的信息对象
		token: uni.getStorageSync('token') || '',
		userinfo: JSON.parse(uni.getStorageSync('userinfo') || '{}'),
	},
	mutations: {
		updateUserInfo(state, userinfo) {
			state.userinfo = userinfo
			this.commit('m_user/saveUserInfoToStorage')
		},
		saveUserInfoToStorage(state) {
			uni.setStorageSync('userinfo', JSON.stringify(state.userinfo))
		},

		updateToken(state, token) {
			state.token = token
			this.commit('m_user/saveTokenToStorage')
		},
		saveTokenToStorage(state) {
			uni.setStorageSync('token', state.token)
		},

		// updateRedirectInfo(state, info) {
		//     state.redirectInfo = info
		//     console.log(state.redirectInfo)
		//     }
	},
	actions: {


	},
}
