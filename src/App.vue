<template>
  <v-app>
    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid pa-0>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

      <v-footer app>
      <!-- -->
       </v-footer>
    </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
     
  }),
  created(){
    //this.$router.push("/login")
  }
};
</script>

<style>
.body{
  background-color: #A7D7C5;
}
</style>
