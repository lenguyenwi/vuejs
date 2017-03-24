<template>
  <div class="projectsFirebase">
    <!-- <hello></hello> -->
    <md-card>
      <md-card-header>
        <div class="md-title">
          Material Design With Vue.js 2 Demo
        </div>
        <div class="md-subhead">
          by CodingTheSmartWay.com
        </div>
      </md-card-header>
      <md-card-content>
        <!-- <md-button class="md-raised md-primary" v-on:click="fillTable()">Fill Table</md-button>
        <md-button class= "md-raised md-primary" v-on:click="clearTable()">Clear Table</md-button> -->
        <form v-on:submit="addProject">
          <input type ="text" v-model="newProject.projectname" placeholder="Enter Name">
        </br>
          <input type ="text" v-model="newProject.language" placeholder="Enter language">
        </br>
          <input type ="text" v-model="newProject.decription" placeholder="Enter decription">
        </br>
          <input type="submit" value="Submit">
        </form>
        <button v-on:click="greet('Hello World!!!')">Say Greeting</button>
      </md-card-content>
      <md-table>
        <md-table-header>
          <md-table-row>
            <md-table-head>First name</md-table-head>
            <md-table-head>Last name</md-table-head>
            <md-table-head>decription</md-table-head>
          </md-table-row>
        </md-table-header>
        <md-table-body>
            <md-table-row v-for="project in projects">
              <md-table-cell><a v-bind:href="projects.projectName">{{project.projectName}}</a></md-table-cell>
              <md-table-cell>{{project.proLanguages}}</md-table-cell>
              <md-table-cell>{{project.proDecription}}</md-table-cell>
              <button v-on:click="deleteProject(project)">x</button>
            </md-table-row>
        </md-table-body>

      </md-table>
    </md-card>
  </div>
</template>

<script>

import Firebase from 'firebase'
let config ={
// <this muss add firebase login data>
}

let app = Firebase.initializeApp(config);
let db = app.database();
let projectsRef = db.ref('projects');

export default {
  name: 'projectsFirebase',
  firebase: {
    projects: projectsRef
  },

  data() {
    return{
      newProject: {},
      Projects: []
    }
  },
  methods:{
    addProject: function(e){
    projectsRef.push({
      projectName: this.newProject.projectname,
      proLanguages: this.newProject.language,
      proDecription: this.newProject.decription
      }
    );
    e.preventDefault();//make the web browser not restart after click button submit
    },
    greet: function(para){
      alert(para);
    },
    deleteProject:function(project){
      projectsRef.child(project['.key']).remove();
    }
  },
}
</script>

<style>
#projectsFirebase {
  margin: 60px 30px 0px 30px;
}
</style>
