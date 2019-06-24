import Vue from 'vue'
import App from './App'
import store from './store'

new Vue({//配置对象的属性名都是一些确定的名称，不能随便修改
  el:'#app',
  components:{App},
  template:'<App/>',
  store     //所有的组件对象都多了一个属性：$store
})
