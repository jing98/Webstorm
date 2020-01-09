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
        /*向数组的开头添加一个或更多元素，并返回新的长度*/
        this.todos.unshift(todo)
      },
      deleteTodo(index) {
        /*splice()方法可删除从index处开始的零个或多个元素，并且用参数列表中声明的一个或多个值来替换那些被删除的元素*/
        this.todos.splice(index, 1)
      },
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

