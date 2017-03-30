<template>
  <div id="app">
      <md-card-header>
        <div class="md-title">
          Project profile
        </div>
        <div class="md-subhead">
          by Lenguyenwi
        </div>
      </md-card-header>
      <ul>
       <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/Login">Login</router-link></li>
      </ul>
     <router-view></router-view>
  </div>
</template>
<script>
// import Hello from './components/Hello'
import ProjectsFirebase from './components/ProjectsFirebase'
import Login from './components/Login'

  // Hello,
export default {
  name: 'app',
  components:{
  ProjectsFirebase,
  Login
  }
}
</script>

<style>
#app {
  margin: 60px 30px 0px 30px;
}

/*navbar horizonta with drop down elements*/
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color:  #3f84a4;

}
/*normal: #3f84a4;*/
/*hover: #23527c*/
li {
    float: left;
}

li a, .dropbtn {
    display: inline-block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;

}

li a:hover, .dropdown:hover .dropbtn {
    background-color: #23527c;
}

li.dropdown {
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
}

.dropdown-content a:hover {background-color: #f1f1f1}

.dropdown:hover .dropdown-content {
    display: block;
}


</style>
