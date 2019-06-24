<template>
  <div>
    <p>cilck {{count}} times,count is {{evevOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementasync">increment async</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        count: 0
      }
    },
    computed: {
      evevOrOdd() {
        return this.count % 2 === 0 ? '偶数' : '奇数'
      }
    },
    methods: {
      //增加
      increment() {
        const count = this.count
        this.count = count + 1
      },
      //减少
      decrement() {
        const count = this.count
        this.count = count - 1
      },
      //如果是奇数才增加
      incrementIfOdd() {
        const count = this.count
        if (count % 2 === 1) {
          this.count = count + 1
        }
      },
      //过1s才增加
      incrementasync() {
        setTimeout(() => {
          const count = this.count
          this.count = count + 1
        }, 1000)
      }
    }
  }
</script>

<style scoped>

</style>

