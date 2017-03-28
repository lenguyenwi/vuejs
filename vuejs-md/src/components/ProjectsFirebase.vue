<template>
  <div class="projectsFirebase">
    <!-- <hello></hello> -->
    <md-card>
      <md-card-header>
        <div class="md-title">
          Project profile
        </div>
        <div class="md-subhead">
          by Lenguyenwi
        </div>
      </md-card-header>
      <md-card-content>
        <!-- <md-button class="md-raised md-primary" v-on:click="fillTable()">Fill Table</md-button>
        <md-button class= "md-raised md-primary" v-on:click="clearTable()">Clear Table</md-button> -->
        <form v-on:submit="addProject">
          <input class="form-control" type ="text" v-model="newProject.projectname" placeholder="Project name">
        </br>
          <input class="form-control" type ="text" v-model="newProject.languages" placeholder="Project languages">
        </br>
        <input class="form-control" type ="text" v-model="newProject.frameworks" placeholder="Project Frameworks">
        </br>
        <input class="form-control" type ="text" v-model="newProject.tools" placeholder="Project tools">
        </br>
        <input class="form-control" type ="text" v-model="newProject.decription" placeholder="Project decription">
        </br>
          <input class="btn btn-primary" type="submit" value="Submit">
        </form>
          <button class="btn btn-primary" v-on:click="greet('Hello World!!!')">Say Greeting</button>
      </md-card-content>
      <md-table>
        <md-table-header>
          <md-table-row>
            <md-table-head>Project Name</md-table-head>
            <md-table-head>Programming Laguages</md-table-head>
            <md-table-head>Frameworks</md-table-head>
            <md-table-head>Tools</md-table-head>
            <md-table-head>Project decription</md-table-head>
          </md-table-row>
        </md-table-header>
        <md-table-body>
            <md-table-row v-for="project in projects">
              <md-table-cell><a v-bind:href="projects.projectName">{{project.projectName}}</a></md-table-cell>
              <md-table-cell>{{project.proLanguages}}</md-table-cell>
              <md-table-cell>{{project.proFrameworks}}</md-table-cell>
              <md-table-cell>{{project.proTools}}</md-table-cell>
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
 apiKey: "AIzaSyCTQwdFOpVzX9ZN6a9uKtz-GEUNB8R127A",
 authDomain: "vuejs-firebase-01-2980e.firebaseapp.com",
 databaseURL: "https://vuejs-firebase-01-2980e.firebaseio.com",
 storageBucket: "vuejs-firebase-01-2980e.appspot.com",
 messagingSenderId: "9148873999"
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
      proLanguages: this.newProject.languages,
      proFrameworks: this.newProject.frameworks,
      proTools: this.newProject.tools,
      proDecription: this.newProject.decription
      }
    );
    e.preventDefault();//make the web browser not restart after click button submit
    },
    greet: function(para){
      alert(para);
    },

    deleteProject:function(project){
      alert("para");
      projectsRef.child(project['.key']).remove();
    },

  },//end of methods
}//end of export default
</script>

<style>
#projectsFirebase {
  margin: 60px 30px 0px 30px;
}

:root {
  --button-color: white;
  /*--button-background-color: silver;*/
  --button-width: 150px;
}
.btn-primary {
  color: var(--button-color);
  /*background-color: var(--button-background-color);*/
  width: var(--button-width);
  /*border-radius: var(--border-radius);*/
}
</style>
