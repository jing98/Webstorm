<template>
  <ul class="todo-main">
    <input class="in1" type="text" value="进行中" readonly/>
    <button class="b">{{todos.length-completeSize}}</button>
    <!--v-for 用于循环待办事项todos数组,其中todo代表每条事项，index代表数组索引(0开始)-->
    <li v-for="(todo,index) in todos" :key="index" v-if="!todo.complete">
      <!--父组件，可以在引用子组件的时候，通过 属性绑定(v-bind :) 的形式，
      把需要传递给子组件的数据，以属性绑定的形式，传递到子组件内部，供子组件使用-->
      <TodoItem :todo="todo" :index="index" :deleteTodo="deleteTodo"/>
    </li>

    <!-- <TodoItem v-for="(todo,index) in todos" :key="index" :todo="todo" :index="index" :deleteTodo="deleteTodo"/>-->

    <input class="in3" type="text" value="已完成" readonly/>
    <button class="b">{{completeSize}}</button>
    <li v-for="(todo,index) in todos" :key="index" v-if="todo.complete">
      <TodoItem :todo="todo" :index="index" :deleteTodo="deleteTodo"/>
    </li>

    <!-- <TodoItem v-for="(todo,index) in finished" :key="index" :todo="todo" :index="index" :finish="finish"/>-->

  </ul>
</template>

<script>
  import TodoItem from './TodoItem'

  export default {
    props: {//使用props属性来定义父组件传递过来的数据,父组件通过 props 向下传递数据给子组件
      todos: Array,
      // finished: Array,    //完成事项数组
      deleteTodo: Function
    },

    /*data() {
      return {
        //从localStorage读取finished
        finished: JSON.parse(window.localStorage.getItem('finished_key') || '[]')
      }
    },
    watch: {//深度监视
      finished: {
        deep: true,   //深度监视
        handler: function (value) {
          //将finished最新的值的JSON数据，保存到localStorage
          window.localStorage.setItem('finished_key', JSON.stringify(value))
        }
      }
    },*/
    /* methods: {
       finish(index) {
         if (this.todo.complete) {
           this.todos.push(this.todos[index])
           this.todos.deleteTodo(index)
         }
       }
     },*/

    computed: {
      completeSize() {
        /*接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值*/
        return this.todos.reduce((preTotal, todo) => preTotal + (todo.complete ? 1 : 0), 0)
      },
    },
    components: {
      TodoItem
    }
  }
</script>

<style scoped>
  @media screen and (min-width: 360px) and (max-width: 1024px) {
    .in1, .in3 {
      display: inline-block;
      width: 78%;
      height: 35px;
      padding: 0 11px;
      font-size: 16px;
      border: 1px solid cornflowerblue;
      border-radius: 10px;
    }
  }

  @media only screen and (width: 320px){
    .in1, .in3 {
      display: inline-block;
      width: 77%;
      height: 35px;
      padding: 0 11px;
      font-size: 16px;
      border: 1px solid cornflowerblue;
      border-radius: 10px;
    }
  }

  .todo-main {
    padding: 0;
  }

  .in1 {
    color: blue;
  }

  .in3 {
    margin-top: 10px;
    color: green;
  }

  .b {
    width: 13%;
    height: 40px;
    border: 1px green;
    background-color: green;
    color: white;
    padding: 15px;
    border-radius: 10px;
  }

  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0;
    /*border-bottom: 1px solid #ddd;*/
  }

</style>
