import {
	RECORD_USERINFO,
	GET_USERINFO,
	OUT_LOGIN
} from './mutation-types.js'
import {setStore, getStore, removeStore} from '@/config/mUtils'


export default {
	// 记录用户信息
	[RECORD_USERINFO](state, info) {
		state.userInfo = info;
		state.login = true;
		setStore('userId', info.userId);
	},
	//获取用户信息存入vuex
	[GET_USERINFO](state, info) {
		if (state.userInfo && (state.userInfo.username !== info.username)) {
			return;
		};
		if (!state.login) {
			return
		}
		if (info.status == '0') {
			state.userInfo = {...info.result};
		} else {
			state.userInfo = null;
		}
	},
	[OUT_LOGIN](state) {
		state.userInfo = null;
		state.login = false;
		removeStore('userId');
	}
}
