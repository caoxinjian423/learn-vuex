<template>
  <div id="app">
    属性赋值dmsg：{{dmsg}}
    <hr>
    计算属性赋值cmsg:{{cmsg}}
    <hr>
    mapState数组赋值msg:{{msg}}
    <br>
    mapState数组赋值age:{{age}}
    <br>
    mapState对象赋值myMsg:{{myMsg}}
    <br>
    <button @click="handleClick">点击更新store中的msg</button>
  </div>
</template>

<script>
import {mapState} from 'vuex';

/*
dmsg:存在响应式丢失问题，即store中的msg更改后，不会变化
cmsg:属性较多时，比较麻烦
mapState是vuex提供的辅助函数，帮助我们生成计算属性
*/
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      dmsg: this.$store.state.msg,
    }
  },
  computed: {
    ...mapState(["msg","name","age"]),
    ...mapState({
      myMsg:"msg",
    }),
    cmsg() {
      return this.$store.state.msg;
    },
  },
  methods: {
    handleClick() {
      this.$store.state.msg="更改后的msg";
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
