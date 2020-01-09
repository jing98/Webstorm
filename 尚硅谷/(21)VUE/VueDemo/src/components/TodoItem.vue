<template>
  <ul class="todo-main1">
    <li>
      <input type="checkbox" v-model="todo.complete"/>
      <!--<span>{{todo.title}}</span>-->
      <input class="i" type="text" v-model="todo.title" v-bind:disabled="diasabledInput"/>
      <button class="btn btn-primary" @click="edit">编辑</button>
      <button class="btn btn-danger" @click="deleteItem">删除</button>
    </li>
<!--<li>
      <input type="checkbox" class="in" />
      <input class="in4" type="text" value="喝水"/>
      <button class="btn btn-primary">编辑</button>
      <button class="btn btn-danger" @click="deleteTodo">删除</button>
    </li>
    <li>
      <input type="checkbox" class="in" />
      <input class="in4" type="text" value="跑步"/>
      <button class="btn btn-primary">编辑</button>
      <button class="btn btn-danger" @click="deleteTodo">删除</button>
    </li>
    <li>
      <input type="checkbox" class="in" />
      <input class="in4" type="text" value="旅行"/>
      <button class="btn btn-primary">编辑</button>
      <button class="btn btn-danger" @click="deleteTodo">删除</button>
    </li>-->
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        diasabledInput:true
      }
    },
    props: {
      todo: Object,      //事项对象
      index: Number,
      deleteTodo:Function
    },
    methods:{
      deleteItem() {
        const {todo, index,deleteTodo} = this
        if (window.confirm(`确认删除${todo.title}吗？`)) {
          deleteTodo(index)
        }
      },
      // 将进行事项里勾选的加入到finished(已完成事项数组)
      finish(index) {
        if (todo.complete){
          this.finished.push(this.todos[index])
          this.todos.splice(index,1)
        }
      },
      edit(title){//编辑事项
        this.todo.title = ''
        this.diasabledInput = false
      }
    }
  }
</script>

<style scoped>
  li {
    list-style: none;
  }
  .i{
    border: 0;
    width: 58%;
    height: 50px;
    background-color: white;
  }
  .todo-main1 {
    padding: 0 0 0 4px;
  }
  /*span{
    display: inline-block;
    width: 58%;
  }*/
</style>
