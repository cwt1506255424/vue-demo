import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		permission: [],
		token: ''
	},
	mutations: {
		setToken(state,val){
			state.token = val;
		},
		setPermission(state,val){
			state.permission = val;
		}
	},
	actions: {},
});
