<template>
  <div class="todo-header">
    <div class="h"><h3>待办事项列表</h3></div>
    <!--title是每个事项名称-->
    <input type="text" placeholder="请写下待办事项" v-model="title" @keyup.enter="addItem"/>
    <button type="submit" @click="addItem">提交</button>
  </div>
</template>

<script>
  export default {
    props: {  //父组件通过 props 向下传递数据给子组件
      addTodo:Function
    },
    data() {
      return {
        title:''
      }
    },
    methods: {
      addItem() {
        //1.检查输入的合法性
        const title = this.title.trim()
        if (!title)
        {
          alert('必须输入')
          return
        }
        //2.根据输入生成一个todo对象
        const todo = {
          title,
          complete:false
        }
        //3.添加到todos
        this.addTodo(todo)
        //4.清除输入
        this.title=''
      }
    }
  }
</script>

<style scoped>
  .todo-header .h{
    height: 50px;
    background-color: green;
  }
  h3{
    text-align: center;
    line-height: 50px;
    color: white;
  }
  .todo-header input {
    height: 28px;
    width: 97%;
    font-size: 14px;
    border: 1px solid cornflowerblue;
    border-radius: 4px;
    margin: 15px 0 0 0;
    padding: 4px 7px;
  }
  .todo-header button{
    width: 100%;
    border-radius: 6px;
    height: 45px;
    background-color: blue;
    border: 0;
    margin: 15px 5px;
    padding: 4px 7px;
  }
</style>
