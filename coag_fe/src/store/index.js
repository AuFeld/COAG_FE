import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userActive: false,
    token: localStorage.getItem("token") || "",
    user: {},
  },
  mutations: {
    setCurrentUser(state, user) {
      state.user = user
    },
  },
  actions: {
    async login({ commit }, user) {
      await axios.post("https://coag-app.herokuapp.com/auth/jwt/login", user)
        .then((res) => {
          console.log(res)
          commit("setCurrentUser", res.data)
        })
        .catch((err) => console.error(err));
    },
    async register({ commit }, user) {
      await axios.post("https://coag-app.herokuapp.com/auth/register", user)
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
  getters: {
    isLoggedIn: (state) => !!state.token,
  },
  modules: {},
});
