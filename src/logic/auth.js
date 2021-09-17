import axios from "axios"; //Import de axios
import Vue from 'vue'
//HABRA QUE HACERLO DESDE UNA API CREADA DESDE PHP
const ENDPOINT_PATH = "https://reqres.in/api/"; //Url de la api

export default {
  register(email, password) {
    const user = { email, password };
    return axios.post(ENDPOINT_PATH + "register", user);
  },
  login(email, password) {
    const user = { email, password };
    return axios.post(ENDPOINT_PATH + "login", user);
  },
  setUserLogged(userLogged){
   // this.$cookie.set('userLogged', userLogged)
    localStorage.setItem('userLogged', JSON.stringify(userLogged));
  },
  getUserLogged(){
  // this.$cookie.get('userLogged')
   return localStorage.getItem('userLogged')
  },
  deleteSession(){
   // this.$cookie.delete('userLogged')
  }
    };