<template>
  <ul class="todo-main">
    <input class="in1" type="text" value="进行中" readonly/><button class="b">{{todos.length}}</button>
    <TodoItem v-for="(todo,index) in todos" :key="index" :todo="todo" :index="index" :deleteTodo="deleteTodo"/>
    <!--v-for 用于循环待办事项数组 其中todo代表每条事项，index代表数组索引(0开始)-->
    <!--<li v-for="(todo,index) in todos"  v-if="!todo.complete">
      <TodoItem :key="index" :todo="todo" :index="index" :deleteTodo="deleteTodo"/>
    </li>-->
    <input class="in3" type="text" value="已完成" readonly/><button class="b">{{completeSize}}</button>
    <TodoItem  v-for="(todo,index) in finished" :key="index" :todo="todo" :index="index" :finish="finish"/>
    <!--<li v-for="(todo,index) in finished"  v-if="todo.complete">
      <TodoItem  :key="index" :todo="todo" :index="index" :finish="finish"/>
    </li>-->
  </ul>
</template>

<script>
  import TodoItem from './TodoItem'
  export default {
    props:{
      todos:Array,
      finished:Array,    //完成事项数组
      deleteTodo:Function
    },
    computed: {
      completeSize() {
        return this.todos.reduce((preTotal, todo) => preTotal + (todo.complete ? 1 : 0), 0)
      },
    },
   components:{
     TodoItem
   }
  }
</script>

<style scoped>
  .todo-main {
    padding: 0 0 0 4px;
  }
  .in1,.in3{
    display: inline-block;
    width: 80%;
    height: 35px;
    padding: 0 10px;
    font-size: 16px;
    border-color: white green white green;
  }
  .in1{
    color: blue;
  }
  .in3{
    color: green;
  }
  .b{
    width: 13%;
    height: 40px;
    border: 1px green;
    background-color: green;
    color: white;
    padding: 0;
  }
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0;
    border-bottom: 1px solid #ddd;
  }

</style>
