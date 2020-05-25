<template>
 <div class="all-todos">
     
     <div class="row">
        <div class="col-sm-5"  v-for="todo in todos" :key="todo.index" >
              <div class="card">
                <div class="card-header">
                    <p>{{ todo.title}}</p>
                     <div class="right-items">
                        <p class="due-date"> {{todo.dueDate}} </p> 
                        <label class="status" @dblclick="editTodoStatus(todo)">{{ todo.status}}</label>
                        <div :class="{ editing : todo == editedTodo }">
                          <input type="text" class="edit" v-model="todo.status" @blur="doneEdit()" @keyup.enter="doneEdit(todo)">

                        </div>
                     </div>
                </div>
                <div class="card-body">
                    <p class="card-text"> {{ todo.description}} </p>
                     <div class="footer-btn">
                        <button class="edit-btn"  data-toggle="modal" data-target="#editModal">Edit</button>
                        <button class="delete-btn" @click="deleteTodo(todo)">Delete</button>
                    </div>
                </div>
            </div>
            <!-- Modal -->
<div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit Todo</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <form>
            <div class="wrapper">
              <label>Title</label>
              <input type="text"  name="title" class="title" v-model="todo.title">
          </div>
          <div class="wrapper">
              <label>Description</label>
              <input type="text"  name="description" v-model="todo.description" class="description">
            </div>
          <div class="wrapper">
                
              <label>Select Status</label>
                <div>
                  <select class="status"  v-model="todo.status">
                  <option value="TODO">TODO</option>
                  <option value="DOING">DOING</option>
                  <option value="DONE">DONE</option>
                  <option value="OTHER">OTHER</option>
                </select>
                </div>
          </div>
          <div class="wrapper">
            <label>Due date</label>
              <datepicker v-model="todo.dueDate" name="due-date"></datepicker>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary"  @click.prevent="editTodo(todo)">Save changes</button>
      </div>
    </div>
  </div>
</div>
        </div>
    </div>
 
 </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';

export default {
  name: 'ShowTodo',
  components: { Datepicker},
  props: {
    todos: Array
  },
  data(){
      return {
        editedTodo: null,
          to: {
               id: '',
        title: '',
        description: '',
        status: '',
        dueDate: '',
        timeline:''
          }
      }
  },
  methods: {
      deleteTodo(todo){
        this.$emit('delete', todo)
      },
      editTodo(todo){
        this.$emit('edit', {todo})

      },
      editTodoStatus(todo){
        this.editedTodo = todo

      },
      doneEdit(todo){
        if(!this.editedTodo){
          return
        }
        if(!todo.status){
          this.$emit('delete', todo)
        }
        this.editedTodo = null
        todo.status = todo.status.trim()
        this.$emit('editStatus', {todo})

      }
  }
}
</script>

<style lang="scss">
   .all-todos{
    .todos{
        
    }
    .edit{
      display: none;
    }
    .editing .edit{
      display: block;
      margin: 0 0 0 -113px;
      width: 120px;
    }
    .row{
        padding: 30px;
        justify-content: space-around;
    }
    .card{
        margin-top: 40px;
    }
    .footer-btn{
        width: 100%;
        margin: 0 auto;
    }
    .card-header{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        font-size: 20px;
        font-weight: bold;
    }
    .todo-list{
        border: 1px solid lightgray;
        box-shadow: 2px 3px #e8e4e4;
        width: 50%;
        margin: 0 auto;
        min-height: 40px;
    }
    .header{
        display: flex;
        justify-content: space-between;
    }
    .right-items{
        display: flex;
        width: 60%;
    }
    .delete-btn{
        margin-top: 10px;
        width: 80px;
        background: #e88780;
        height: 40px;
        border-radius: 18px;
        font-weight: bold;
        font-size: 15px;
        color: #fff;
        border: none;
        margin-left: 5px;
    }
    .edit-btn{
      margin-top: 10px;
      width: 80px;
      background: lightseagreen;
      height: 40px;
      border-radius: 18px;
      font-weight: bold;
      font-size: 15px;
      margin-right: 5px;
      color: #fff;
      border: none;
    }
    .status, .due-date{
        border: 1px solid lightgray;
        padding: 5px;
        background: lightgray;
        font-weight: bold;
        margin-left: 12px;
        font-size: 15px;
        // margin-left: 5px;
    }
    
   }
</style>
