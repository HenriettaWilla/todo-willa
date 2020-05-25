<template>
  <div class="todo-container">
    <div class="todo">
     <div class="form-wrapper">
        <p class="todo-title">Create Todos</p>
        <form>
            <div class="wrapper">
              <label for="title">Title</label>
              <input type="text" id="title" name="title" class="title" v-model="todo.title">
          </div>
          <div class="wrapper">
              <label for="description">Description</label>
              <input type="text" id="description" name="description" v-model="todo.description" class="description">
            </div>
          <div class="wrapper">   
              <label for="status">Select Status</label>
                <div>
                  <select class="status" id="status" v-model="todo.status">
                  <option value="TODO">TODO</option>
                  <option value="DOING">DOING</option>
                  <option value="DONE">DONE</option>
                  <option value="OTHER">OTHER</option>
                </select>
                </div>
          </div>
          <div class="wrapper">
            <label for="due-date">Due date</label>
              <datepicker v-model="todo.dueDate" name="due-date" id="due-date" class="due-date"></datepicker>
          </div>
          <div class="wrapper">
            <button class="submit-btn" type="submit" @click.prevent="addTodo()">Submit</button>
          </div>
        </form>
     </div>
  </div>
    <show-todos :todos="this.todos" @delete="deleteTodo" @edit="editTodo" @editStatus="editTodoStatus"></show-todos>

  </div>

</template>

<script>
import Datepicker from 'vuejs-datepicker';
import ShowTodos from './ShowTodos.vue';
export default {
  name: 'CreateTodo',
  components: {
    Datepicker, ShowTodos
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
  mounted () {
    this.dataFields.forEach(field => this.checkStorage(field))
  },
methods: {
  addTodo(){
    this.formatDate()
    this.todos.push(this.todo)
    this.saveTodos()
    this.todo = { }

  },
  formatDate(){
    const todayDate = this.todo.dueDate.toISOString().slice(0,10);
    

    //const today=new Date();
    //const cmas=new Date(this.todo.dueDate);
    // if(today.getMonth()==11 && today.getDate()>25) 
    //   {
    //     cmas.setFullYear(cmas.getFullYear()+1); 
    //   }  
    //   const one_day=1000*60*60*24;
    //   const date_status = Math.ceil((cmas.getTime()-today.getTime())/(one_day))
    //   this.todo.timeline = date_status
      this.todo.id = 'id' + (new Date()).getTime();
      this.todo.dueDate = todayDate

  },
  
   checkStorage (key) {
      if (sessionStorage.getItem(key)) {
        try {
          this[key] = JSON.parse(sessionStorage.getItem(key))
        } catch (e) {
          sessionStorage.removeItem(key)
        }
      }
    },
    deleteTodo(value) {
      this.todos.splice(this.todos.indexOf(value), 1)
      this.saveTodos()
    },
    saveTodos(){
       this.dataFields.forEach(field => 
        sessionStorage.setItem(field, JSON.stringify(this[field]))
      )
    },
    editTodoStatus(value){
      console.log(value, 'yyyy', this.todos.indexOf(value))


    },
    editTodo(value){

      console.log(value, this.todos.indexOf(value), 'jksjksss')
     const b =this.todos.filter((td) => {
          return td.id = value.id? 
       {...td,
          title: value.title,
          description: value.description,
          dueDate: value.dueDate,
          status: value.status
        }
        : null;
      })
      console.log(b ,'islk')
    }



}
}
</script>

<style lang="scss">
   .todo-container{
       .todo{
        width: 40%;
        margin: 0 auto;
        border-radius: 10px;
        border: 1px solid rgb(158, 140, 140);
        background: #fff;        
        min-height: 300px;
        @media screen and (max-width: 600px){
          width: 100%;
        }
    }
    .form-wrapper{
      width: 80%;
      margin: 0 auto;
    }
    .title,
    .description, 
    .status,
    .due-date
    {
      width: 100%;
      height: 30px;
    }
    .status{
        width: 100%;
        background: #fff;
        height: 35px;
        margin: 0;
    }
    .todo-title{
      font-weight: bold;
      font-size: 25px;
      margin-top: 20px;
    }
    .wrapper{
      margin-bottom:30px;
    }
    .submit-btn{
      width: 100%;
      margin-top: 20px;
      background: lightseagreen;
      height: 40px;
      border-radius: 18px;
      font-weight: bold;
      font-size: 20px;
      color: #fff;
      border: none;
    }
   
    .vdp-datepicker * {
      width: 100%;
      min-height: 35px;
      
  }
    
    label{
      float: left;
      margin-bottom: 5px;
    }
   }
</style>
