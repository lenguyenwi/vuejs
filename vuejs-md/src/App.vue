<template>
  <div id="app">
    <hello></hello>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components:{
    Hello
  }
}
</script>

<style>
#app {
  margin: 60px 30px 0px 30px;
}
</style>
