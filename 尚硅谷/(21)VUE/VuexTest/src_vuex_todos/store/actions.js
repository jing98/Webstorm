/*
包含多个接收组件通知触发mutation调用，间接更新状态的方法的对象
 */
import {ADD_TODO, DELETE_TODO, SELECT_ALL_TODOS, DELETE_COMPLETE_TODOS,RECEIVE_TODOS} from './mutation-types'
import storageUtils from '../utils/storageUtils'

export default {

  addTodo({commit}, todo) {
    // 提交对mutation的请求
    commit(ADD_TODO, {todo}) // 传递给mutation的是一个包含数据的对象
  },

  deleteTodo({commit}, index) {
    commit(DELETE_TODO, {index})
  },

  selectAll({commit}, isCheck) {
    commit(SELECT_ALL_TODOS, {isCheck})
  },

  deleteAllCompleted({commit}) {
    commit(DELETE_COMPLETE_TODOS)
  },

  //异步获取todos并更新状态
  reqTodos({commit}) {
    //模拟
    setTimeout(() => {
      //读取数据
      const todos = storageUtils.readTodos()
      //提交mutation
      commit(RECEIVE_TODOS,todos)
    }, 1000)
  }
}
