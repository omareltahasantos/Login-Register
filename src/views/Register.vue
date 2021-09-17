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
                    <h3 class="justify-center m-0" id="titleRegister">
                        Create An Account
                        
                    </h3>
                    <p id="textRegister">
                        Create an account to enjoy all the services 
                        <br>
                        without any ads for free!
                    </p>
                    <v-container pt-0 class="pb-16"  >
                         <form @submit.prevent="register()" >
                            <v-text-field
                            type="email"
                            v-model="email"
                            placeholder="Email"
                            label="Email"
                            outlined
                            required
                            ></v-text-field>
                            
                            <v-text-field
                            type="password"
                            v-model="password"
                            placeholder="Password"
                            label="Password"
                            outlined
                            required
                            ></v-text-field>
                            <v-text-field
                            type="password"
                            v-model="passwordRepeat"
                            placeholder="Repeat Password"
                            label="Repeat Password"
                            outlined
                            required
                            ></v-text-field>
                           <button
                                 id="createButton"
                                 type="submit"
                            >
                               Create Account
                           </button>
                         </form>
                         <p class="pt-4">Already Have An Account? <router-link to="/login" class="SignIn">Sign In</router-link></p>
                    </v-container>
                   
                
                </v-card>
            </v-container>
        </v-app>
    </div>
</template>

<script>
import auth from '../logic/auth';

export default {
  name: 'Register',
  data(){
      return{
          //V-models
          email: '',
          password: '',
          passwordRepeat: '',
          error:false
      }
    
      },
      methods:{
        async register(){
            try {
                const response = await auth.register(this.email, this.password)
                 const user = {email:this.email, token: response.data.token}
                 auth.setUserLogged(user)
                // console.log(auth.getUserL ogged() + "adadad")
                 this.$router.push("/")
            } catch (error) {
                console.log(error)
            }
          
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
#titleRegister{
    color: #212B27;
    font-size: 36px;
    padding-top: 35px;
    padding-bottom: 15px;
    font-family: "Karla-Bold";
    font-weight: bold;
}
#textRegister{
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
.SignIn{
    font-family: 'Karla-Medium';
    font-size: 17px;
    color: #32403B;
}
.SignIn:link{
    text-decoration: none;
    color: #32403B;
     border-bottom: 1px solid;
     
}
.SignIn:visited{
    text-decoration: none;
    color: #32403B;
    border-bottom: 1px solid;
}

</style>
