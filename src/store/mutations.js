const state = {
	header: true,
	loading: false
}

const getters = {
	isHeader: state => {
		return state.header;
	},
	isLoading: state => {
		return state.loading;
	}
}
const mutations = {
	showHeader(state) {
		state.header = true;
	},
	hideHeader(state) {
		state.header = false;
	},
	showLoading(state) {
		state.loading = true;
	},
	hideLoading(state) {
		state.loading = false;
	}
}

export default {
	state,
	getters,
	mutations
}