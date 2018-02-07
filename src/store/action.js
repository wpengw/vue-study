import api from '../assets/js/api'
import {
	GET_USERINFO
} from './mutation-types.js'

export default {
	async getUserInfo({
		commit,
		state
	}) {
		api.getUser().then(res => {
			commit(GET_USERINFO, res);
		});
	}
}