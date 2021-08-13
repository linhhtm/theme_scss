const state = {
    type: null,
    message: null,
    isShow: false
};

const actions = {
    success({ commit }, message) {
        commit('success', message);
        setTimeout(() => {
            commit('clear', message);
        }, 2000)
    },
    error({ commit }, message) {
        commit('error', message);
        setTimeout(() => {
            commit('clear', message);
        }, 2000)
    }, 
    warning({ commit }, message) {
        commit('warning', message);
        setTimeout(() => {
            commit('clear', message);
        }, 2000)
    }, 
};

const mutations = {
    success(state, message) {
        state.type = 'success';
        state.message = message;
        state.isShow = true
    },
    error(state, message) {
        state.type = 'error';
        state.message = message;
        state.isShow = true
    },
    warning(state, message) {
        state.type = 'warning';
        state.message = message;
        state.isShow = true
    },
    clear(state) {
        state.type = null;
        state.message = null;
        state.isShow = false
    }
};

export default { 
    namespaced: true,
    state,
    actions,
    mutations,
};