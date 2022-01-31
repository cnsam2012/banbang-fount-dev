export default {
  // 开启命名空间
  namespaced: true,
  
  state: {
	  allnoti: '',
	},
    mutations: {
		updateAllNoti(state, allnoti) {
		      state.allnoti = allnoti
		},
	},
    actions: {
	},
	}