/*
* 入口js：创建Vue实例
* */

import Vue from 'vue'
import App from './App'

new Vue({
  el:'#app',
  components:{ /* 映射组件标签*/
    App
  },
  template:'<App/>'   /*在模板中使用组件标签*/
})
