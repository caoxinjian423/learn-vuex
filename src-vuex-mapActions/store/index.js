import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg:"Hello Vuex!",
    name:"cxj",
    age:18,
    hobby:"美女"
  },
  getters: {
    tenYearsOld(state){
      return state.age + 10;
    },
  },
  mutations: {
    changeMsg(state,payload){
      console.log("changeMsg mutations");
      state.msg = payload;
    }
  },
  actions: {
    getMsg({commit},msg){
      console.log("changeMsg actions");
      setTimeout(() => {
        commit("changeMsg",msg)
      }, 2000);
    }
  },
  modules: {
  }
})
