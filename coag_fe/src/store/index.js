import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userActive: false,
    user: {},
  },
  mutations: {
    setCurrentUser(state, user) {
      state.user = user
    },
  },
  actions: {
    async login({ commit }, user) {
      await axios.post("", user)
        .then((res) => {
          console.log(res)
          commit("setCurrentUser", res.data)
        })
        .catch((err) => console.error(err));
    },
    async register({ commit }, user) {
      await axios.post("", user)
        .then((res) => {
          console.log(res)
          commit("setCurrentUser", res.data)
        })
        .catch((err) => console.error(err));
    },
    logout({ commit }) {
      commit("setCurrentUser", null);
    },
  },
  modules: {},
});
