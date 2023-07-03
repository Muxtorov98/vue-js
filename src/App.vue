<template>
    <form @submit.prevent="register">
        <input type="text" placeholder="email" v-model="form.email">
        <input type="text" placeholder="password" v-model="form.password">
        <button type="submit">save</button>
    </form>
</template>

<script>

import {mapActions} from "vuex";

export default {
  name: 'App',
  methods: {
     ...mapActions(['pushUser']),
     register() {
       this.pushUser(this.form)
     },
  },

  data() {
      return {
         form: {
           email: "",
           password: ""
        }
      }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
