<template>
  <div>
      Email: {{user.email}}, Token: {{user.token}}
  </div>  
</template>

<script>
  import auth from '../logic/auth'
  export default {
    name: 'Home',
    
    data(){
      return{

        user: {}
      }
    },

    methods:{
      getUserLogged(){
     
       this.user=  JSON.parse(auth.getUserLogged())
       //this.user = this.user.email
       console.log(this.user)
  
      }
    },
    created(){
       this.getUserLogged()
    }
  
  }
</script>
