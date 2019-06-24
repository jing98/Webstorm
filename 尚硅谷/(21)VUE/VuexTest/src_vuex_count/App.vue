<template>
  <div>
    <!--<p>cilck {{$store.state.count}} times,count is {{evevOrOdd}}</p>-->
    <p>cilck {{count}} times,count is {{evevOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementasync">increment async</button>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex'

  export default {

    computed: {
      ...mapState(['count']),  //mapState()返回值:{count(){return this.$store['count']}}
      ...mapGetters(['evevOrOdd'])   //mapGetters()返回值:{evevOrOdd(){return this.$store.getters['evevOrOdd']}}
      /*evevOrOdd() {
        return this.$store.getters.evevOrOdd
      }
        count(){
          return this.$store.state.count
        }
      */
    },
    methods: {
      ...mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementasync'])
    }
    /*methods: {
      //增加
      increment() {
        //通知vuex去增加
        this.$store.dispatch('increment')  //触发store中对应的action调用
      },
      //减少
      decrement() {
        this.$store.dispatch('decrement')
      },
      //如果是奇数才增加
      incrementIfOdd() {
        this.$store.dispatch('incrementIfOdd')
      },
      //过1s才增加
      incrementasync() {
        this.$store.dispatch('incrementasync')
      }
    }*/
  }
</script>

<style scoped>

</style>

