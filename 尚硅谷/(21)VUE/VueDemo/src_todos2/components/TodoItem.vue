<template>
  <!--
    onmouseenter="" onmouseleave=""  鼠标经过时自身触发事件，经过其子元素时不触发该事件。（父亲的东西就是父亲的，不归儿子所有）
    onmouseover="" onmouseout=""     鼠标经过时自身触发事件，经过其子元素时也触发该事件；（父亲有的东西，儿子也有）
  -->

  <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style="{background: bgColor}">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
  </li>
</template>

<script>
  import PubSub from 'pubsub-js'
  export default {
    data() {
      return {
        bgColor: 'white', //默认的背景颜色
        isShow: false   //按钮默认是否显示
      }
    },
    props: {
      todo: Object,
      index: Number,
    },
    methods: {
      handleEnter(isEnter) {
        if (isEnter) {
          this.bgColor = 'gray'
          this.isShow = true
        } else {
          this.bgColor = 'white'
          this.isShow = false
        }
      },
      deleteItem() {
        const {todo, index,deleteTodo} = this
        if (window.confirm(`确认删除${todo.title}吗？`)) {
          //deleteTodo(index)
          //发布消息
          PubSub.publish('deleteTodo',index)
        }
      }
    }
  }
</script>

<style scoped>
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    /*display: none;*/
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>

