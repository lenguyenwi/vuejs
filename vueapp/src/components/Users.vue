<template>
  <div class="users">
    <h1>Hallo Users</h1>
    <form v-on:submit="addUser">

      <input type ="text" v-model="newUser.name" placeholder="Enter Name">
    <br/>
      <input type ="text" v-model="newUser.email" placeholder="Enter Email">
    </br>
      <input type ="submit" value="Submit">
    </form>
    <ul>
      <li v-for="user in users">
        <input type ="checkbox" class="toggle" v-model="user.contacted">
          <span :class="{contacted: user.contacted}">
            {{user.name}}:{{user.email}} <button v-on:click="deleteUser(user)">x</button>
          </span>

      </li>
    </ul>
  </div>
</template>

<script>
  export default{
  name : 'users',
  props:{
  },
  data(){
    return{
      newUser:{},
      users: [{
            name: 'Le Nguyen',
            email: 'lenguyenwi@gmail.com',
            contacted: false

      },
      {
            name: 'Ronny',
            email: 'ronny@gmail.com',
            contacted: false

      },
      {
            name: 'John',
            email: 'Jo@gmail.com',
            contacted: false

      },
      ]
    }
  },
  methods:{
    addUser: function(e){
      this.users.push({
        name: this.newUser.name,
        email: this.newUser.email,
        contacted: false
      });
      e.preventDefault();
      // console.log('add');
      // e.preventDefault();
    },
    deleteUser: function(user){
      this.users.splice(this.users.indexOf(user),1);
    },

  },
  //if the methods also out side from the field's methods this will be called automatically
    created: function(){
        // this.$http.get('https://devtest.ccaware.de/rest/Emergency/10?v=1.2&key=')//this is work with intern HttpSite because is have same doman, no CORS problem
        //CORS Cross Origin Resource Sharing
      this.$http.get('https://jsonplaceholder.typicode.com/users')
      .then(function(response){
        // console.log(response.data);
        this.users = response.data;
      });
    }
  }
</script>
<style scoped>
.contacted{
  text-decoration: line-through;
}
</style>
