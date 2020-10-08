<template>
  <div id="app">
    计算属性赋值ctenYearsOld:{{ctenYearsOld}}
    <hr>
    mapGetters赋值tenYearsOld:{{tenYearsOld}}
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex';

/*
ctenYearsOld:组件较多，且每个组件都要进行相同操作时，每个组件都需要定义，代码重复

Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。就像计算属性一样，getter 的返回值会根据
它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。

mapGetters辅助函数仅仅是将 store 中的 getter 映射到局部计算属性：多个组件都需要用的时候只用定义一次。
*/
export default {
  name: 'App',
  components: {
  },
  computed: {
    ...mapState(["msg","name","age"]),
    ...mapGetters(["tenYearsOld"]),
    ctenYearsOld(state){
      return state.age + 10;
    },
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
