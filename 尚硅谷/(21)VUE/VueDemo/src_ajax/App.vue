<template>
  <div v-if="!repoUrl">loading</div>
  <div v-else>most star repo is <a :href="repoUrl">{{repoName}}</a></div>
</template>
<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        repoUrl: '',
        repoName: ''
      }
    },

    mounted() {
      //使用vue-resource发ajax请求获取数据
      const url = 'https://api.github.com/search/repositories?q=v&sort=stars'
      /*this.$http.get(url).then(
        response => {
          //成功了
          const result = response.data
          //得到最受欢迎的repo（第一个）
          const mostRepo = result.items[0]
          this.repoUrl = mostRepo.html_url
          this.repoName = mostRepo.name
        },
        response => {
          alert('请求失败')
        }
      )*/

      //使用axios发送请求
      axios.get(url).then(response => {
        //成功了
        const result = response.data
        //得到最受欢迎的repo（第一个）
        const mostRepo = result.items[0]
        this.repoUrl = mostRepo.html_url
        this.repoName = mostRepo.name
      }).catch(erroe => {
        alert('请求失败')
      })
    }
  }
</script>

<style scoped>

</style>

