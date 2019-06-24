<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo"/>
      <TodoList :todos="todos" :deleteTodo="deleteTodo"/>
      <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"/>
    </div>
  </div>

</template>

<script>
  import TodoHeader from './components/TodoHeader'
  import TodoList from './components/TodoList'
  import TodoFooter from './components/TodoFooter'

  export default {
    data() {
      return {
        //从localStorage读取todos
        todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')
      }
    },
    methods: {
      addTodo(todo) {
        this.todos.unshift(todo)
      },
      deleteTodo(index) {
        this.todos.splice(index, 1)
      },
      //删除所有选中的todo,filter把传入的函数依次作用于每个元素，然后根据返回值是 true 还是false决定保留还是丢弃该元素。
      deleteCompleteTodos() {
        this.todos = this.todos.filter(todo => !todo.complete)
      },
      //全选/全不选
      selectAllTodos(check) {
        this.todos.forEach(todo => todo.complete = check)
      }
    },

    watch: {//深度监视
      todos:{
        deep:true,   //深度监视
        handler:function (value) {
          //将todos最新的值的JSON数据，保存到localStorage
          window.localStorage.setItem('todos_key',JSON.stringify(value))
        }
      }
    },
    components: {
      TodoHeader,
      TodoList,
      TodoFooter
    }

  }

</script>

<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }

  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>

