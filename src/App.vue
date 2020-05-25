<template>
  <div id="app">
    <CreateTodo msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import CreateTodo from './components/CreateTodo.vue'

export default {
  name: 'App',
  components: {
    CreateTodo
  }
}
</script>

<style lang="scss">
 body{
    background: lightseagreen;
  }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: lightseagreen;
 

  .hello-image {
    border: 5px solid orangered;
  }
}
</style>

