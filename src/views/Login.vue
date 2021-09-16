<template>
 <div >
        <v-app>
            <v-container fluid class="text-center body py-16">
              <v-card
                    class="mx-auto my-16 rounded-xl pt-4"
                    max-width="600"
                    max-height="600"
                    color="grey lighten-4"
                   
                >
                    <h3 class="justify-center m-0" id="titleLogin">
                          Login In The Page
                        
                    </h3>
                    <p id="textLogin">
                        Login with your account to enjoy all the services 
                        <br>
                        without any ads for free!
                    </p>
                    <v-container pt-0 class="pb-16"  >
                         <form @submit.prevent="submit" >
                            <v-text-field
                            v-model="email"
                            label="Email"
                            outlined
                            required
                            ></v-text-field>
                            
                            <v-text-field
                            v-model="password"
                            label="Password"
                            outlined
                            required
                            ></v-text-field>
                           <button
                                 id="createButton"
                                 type="submit"
                            >
                               Login
                           </button>
                         </form>
                         <p class="pt-4">Don't have an account yet? <router-link to="/register" class="Register">Register</router-link></p>
                    </v-container>
                   
                
                </v-card>
            </v-container>
        </v-app>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data(){
      return{
          //V-models
          email: '',
          password: '',
          passwordRepeat: '',
      }
    
      },
      methods:{
          submitRegister(){

          }
      }
  }
</script>

<style>
@font-face {
        font-family: "Karla-Bold" ;
        src: local("Karla"),
        url(../fonts/Karla/static/Karla-Bold.ttf) format("truetype");
    }
      @font-face {
        font-family: "Karla-Medium" ;
        src: local("Karla"),
        url(../fonts/Karla/static/Karla-Medium.ttf) format("truetype");
    }
.body{
    background-color: #A7D7C5;
    width: 100%;
    height: 100%;
}
#titleLogin{
    color: #212B27;
    font-size: 36px;
    padding-top: 35px;
    padding-bottom: 15px;
    font-family: "Karla-Bold";
    font-weight: bold;
}
#textLogin{
    font-family: "Karla-Medium";
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: #32403B;
    text-align: center;
}
#createButton{
    background: #84C7AE;
    border-radius: 15px;
    font-family: 'Karla-Bold';
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    width: 255px;
    height: 59px;
    color: #FFFFFF;
}
.Register{
    font-family: 'Karla-Medium';
    font-size: 17px;
    color: #32403B;
}
.Register:link{
    text-decoration: none;
    color: #32403B;
     border-bottom: 1px solid;
     
}
.Register:visited{
    text-decoration: none;
    color: #32403B;
    border-bottom: 1px solid;
}

</style>
