<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- 3、引用了组件TodoHeader，并给这个子组件传入了方法addTodo-->
      <TodoHeader :addTodo="addTodo"/>
      <TodoList :todos="todos" :deleteTodo="deleteTodo"/>
    </div>
  </div>
</template>

<script>
  /*1、引入组件*/
  import TodoHeader from './components/TodoHeader'
  import TodoList from './components/TodoList'

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
      }
    },
    watch: {//深度监视
      todos: {
        deep: true,   //深度监视
        handler: function (value) {
          //将todos最新的值的JSON数据，保存到localStorage
          window.localStorage.setItem('todos_key', JSON.stringify(value))
        }
      }
    },
    components: {
      /*2、映射组件标签*/
      TodoList,
      TodoHeader
    }
  }
</script>

<style scoped>

</style>

