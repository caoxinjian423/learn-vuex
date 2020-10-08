<template>
  <div id="app">
    {{msg}}
    <hr>
    <button @click="handleClick">点我改变msg</button>
    <br>
    <button @click="mchangeMsg('Hello Vue! mapMutations')">点我改变msg-mapMutations</button>
  </div>
</template>

<script>
import {mapState,mapGetters, mapMutations} from 'vuex';

/*
更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的 mutation 非常类似于事件：每个 mutation 
都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，
并且它会接受 state 作为第一个参数.你不能直接调用一个 mutation handler。这个选项更像是事件注册：
“当触发一个类型为 increment 的 mutation 时，调用此函数。”要唤醒一个 mutation handler，你需要以相应的 
type 调用 store.commit 方法.

你可以在组件中使用 this.$store.commit('xxx') 提交 mutation，或者使用 mapMutations 辅助函数将组件中的 
methods 映射为 store.commit 调用（需要在根节点注入 store）
*/
export default {
  name: 'App',
  components: {
  },
  computed: {
    ...mapState(["msg","name","age"]),
  },
  methods: {
    ...mapMutations({
      mchangeMsg:"changeMsg",
    }),
    handleClick() {
      this.$store.commit('changeMsg', "Hello Vue! commit")
    }
  },
}
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
