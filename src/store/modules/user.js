// initial state
const initialState = {
  userId: undefined,
};

// mutations
const mutations = {
  setUserId(state, userId) {
    state.userId = userId;
  },
};

// getters
const getters = {
  userId: state => state.userId,
};

// actions
const actions = {
  setUserId({ commit }, userId) {
    commit('setUserId', userId);
  },
};

// Export
export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};