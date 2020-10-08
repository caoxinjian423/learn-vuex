<template>
  <div id="app">
    {{msg}}
    <hr />
    <button @click="asyncChangeMsg">点我改变msg-async</button>
    <br />
    <button @click="masyncChangeMsg('Hello vuex! mapActions')">点我改变msg-async-mapActions</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

/*
Action 类似于 mutation，不同在于：Action 提交的是 mutation，而不是直接变更状态(避免异步带来的状态混乱)；Action 可以包
含任意异步操作。

在组件中使用 this.$store.dispatch('xxx') 分发 action，或者使用 mapActions 辅助函数将组件的 methods 映射为 
store.dispatch 调用（需要先在根节点注入 store）
*/
export default {
  name: "App",
  components: {},
  computed: {
    ...mapState(["msg", "name", "age"])
  },
  methods: {
    ...mapActions({
      masyncChangeMsg: "getMsg"
    }),
    asyncChangeMsg() {
      this.$store.dispatch("getMsg", "Hello vuex! dispatch");
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
