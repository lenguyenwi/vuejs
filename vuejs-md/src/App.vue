<template>
  <div id="app">
    <!-- <hello></hello> -->
    <projectsFirebase></projectsFirebase>
  </div>
</template>

<script>
// import Hello from './components/Hello'
import ProjectsFirebase from './components/ProjectsFirebase'


  // Hello,
export default {
  name: 'app',
  components:{
  ProjectsFirebase
  }
}
</script>

<style>
#app {
  margin: 60px 30px 0px 30px;
}
</style>
