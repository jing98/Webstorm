<template>
  <ul class="todo-main1">
    <li>
      <input type="checkbox" v-model="todo.complete"/>

      <!--<span>{{todo.title}}</span>-->

      <!--  v-for : 遍历数组/对象
            v-on : 绑定事件监听, 一般简写为@
            v-bind : 强制绑定解析表达式, 可以省略v-bind,简写为:
            v-model : 双向数据绑定
            -->
      <input class="i" type="text" v-model="todo.title" :disabled="diasabledInput" @keyup.enter="dis">
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
        diasabledInput: true
      }
    },
    props: {
      /*父组件通过 props 向下传递数据给子组件
        注意：组件中的 所有 props 中的数据，都是通过 父组件传递给子组件的
        props 中的数据，都是只读的，无法重新赋值
      */
      todo: Object,      //事项对象
      index: Number,
      deleteTodo: Function,
    },
    methods: {
      deleteItem() {

        /*if (!this.todo.complete) {
          const {todo, index, deleteTodo} = this
          if (window.confirm(`确认删除${todo.title}吗？`)) {
            deleteTodo(index)
          }
        } else {
          const {todo, index, deleteTodo} = this
          if (window.confirm(`确认删除${todo.title}吗？`)) {
            deleteTodo(index)
          }
        }*/

        const {todo, index, deleteTodo} = this
        if (window.confirm(`确认删除${todo.title}吗？`)) {
          deleteTodo(index)
        }
      },
      edit(title) {//编辑事项
        if (!this.todo.complete) {
          this.todo.title = ''
          this.diasabledInput = false
        } else {
          window.confirm('事项已完成，不能编辑！')
          this.diasabledInput = true
        }
      },
      dis() {
        this.diasabledInput = true
      }
    }
  }
</script>

<style scoped>
  li {
    list-style: none;
  }

  .i {
    border: 0;
    width: 58%;
    height: 40px;
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
