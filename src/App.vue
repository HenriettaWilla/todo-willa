<template>
  <div id="app">
   <create-todo></create-todo>

  </div>
</template>

<script>
import CreateTodo from './components/CreateTodo.vue';

export default {
  name: 'App',
  components: {
    CreateTodo
  },
  data() {
    return{
      todo:  {
        id: '',
        title: '',
        description: '',
        status: '',
        dueDate: '',
        timeline:''
      },
      todos: [],
      dataFields: ['todos'],
      editedTodo: null

    }
  },
   
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
  width: 100%;
  min-height: 300px;
 

  .hello-image {
    border: 5px solid orangered;
  }
   
      
}
</style>

