<template>
  <div class="hello">
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
        <form v-on:submit="addContact">
          <input type ="text" v-model="newContact.firstname" placeholder="Enter Name">
        </br>
          <input type ="text" v-model="newContact.lastname" placeholder="Enter Lastname">
        </br>
          <input type ="text" v-model="newContact.email" placeholder="Enter Email">
        </br>
          <input type="submit" value="Submit">
        </form>
        <button v-on:click="fillTable()">Fill Table</button>
        <button v-on:click="clearTable()">Clear Table</button>
        <button v-on:click="greet('Hello World!!!')">Say Greeting</button>
        <button v-on:click="deletefristRow()">clear 1st row</button>
      </md-card-content>
      <md-table>
        <md-table-header>
          <md-table-row>
            <md-table-head>First name</md-table-head>
            <md-table-head>Last name</md-table-head>
            <md-table-head>Email</md-table-head>
          </md-table-row>
        </md-table-header>
        <md-table-body>
            <md-table-row v-for="contact in contacts">
              <md-table-cell>{{contact.firstname}}</md-table-cell>
              <md-table-cell>{{contact.lastname}}</md-table-cell>
              <md-table-cell>{{contact.email}}</md-table-cell>
              <button v-on:click="deleteContact(contact)">x</button>
            </md-table-row>
        </md-table-body>
      </md-table>
    </md-card>
  </div>
</template>

<script>

export default {
  name: 'hello',
  // components:{
  //   Hello
  // },
  data() {
    return{
      newContact: {},
      contacts: [
        // {firstname:'lenguyenwi',lastname:'vinsmoke',email:'allbluesky@gmail.com'},
        // {firstname:'lenguyenwi',lastname:'vinsmoke',email:'allbluesky@gmail.com'},
        // {firstname:'lenguyenwi',lastname:'vinsmoke',email:'allbluesky@gmail.com'}
      ]
    }
  },
  methods:{
    addContact: function(e){
    this.contacts.push({
      firstname: this.newContact.firstname,
      lastname: this.newContact.lastname,
      email: this.newContact.email
      }
    );
    e.preventDefault();//make the web browser not restart after click button submit
    },
    fillTable: function() {
      this.contacts.push({firstname:'lenguyenwi',lastname:'vinsmoke',email:'allbluesky@gmail.com'});
      this.contacts.push({firstname:'johhannes',lastname:'funny',email:'stupid@gmail.com'});
      this.contacts.push({firstname:'sanji',lastname:'kun',email:'bluesea@gmail.com'})
    },
    clearTable: function(){
      this.contacts.splice(0,this.contacts.length);
    },
    greet: function(para){
      alert(para);
    },
    deletefristRow: function(){
            this.contacts.splice(0,1);
    },
    deleteContact:function(contact){
      this.contacts.splice(this.contacts.indexOf(contact),1);
    }
  },
}
</script>

<style>
#hello {
  margin: 60px 30px 0px 30px;
}
</style>
