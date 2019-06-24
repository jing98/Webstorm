/*
* 使用localStorage存储数据的工具模块
* 1.函数    向外暴露1个功能
* 2.对象    向外暴露多个功能
* 需要向外暴露1个功能还是多个功能
* */

const TODOS_KEY = 'todos_key'
export default {
  saveTodos(todos) {
    window.localStorage.setItem('TODOS_KEY', JSON.stringify(todos))
  },
  readTodos() {
    return JSON.parse(window.localStorage.getItem('TODOS_KEY') || '[]')
  }
}
