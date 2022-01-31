import Vue from 'vue'
import Vuex from 'vuex'

import moduleUser from '@/store/user.js'
import moduleNoti from '@/store/noti.js'


Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		   'm_user': moduleUser,
		   'm_noti': moduleNoti,
	}
  
})