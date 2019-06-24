/*
包含n个基于state的getter计算属性方法的对象模块
 */
export default {

  // 总数量
  totalSize(state) {
    return state.todos.length
  },
  // 完成的数量
  completeSize(state) {
    /*
    reduce() 方法对数组中的每个元素执行一个由您自己提供的reducer函数(升序执行)，将其结果汇总为单个返回值
    * */
    return state.todos.reduce((preTotal, todo) => {
      return preTotal + (todo.complete ? 1 : 0)
    }, 0)
  },

  // 判断是否需要全选
  isAllSelect(state, getters) {
    // return getters.completeSize === getters.totalSize && getters.completeSize > 0
    return getters.completeSize === getters.totalSize && state.todos.length > 0
  }
}
