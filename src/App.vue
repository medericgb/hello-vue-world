<template>
  <nav id="header">
    <router-link :to="{ name: 'Home' }">HOME</router-link>
    <router-link :to="{ name: 'Contact' }">CONTACT</router-link>
  </nav>
  <router-view></router-view>
</template>

<script>
import Home from "../src/views/Home.vue";

export default {
  name: "App",
  components: {
    Home,
  },
  data() {
    return {};
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap");

body {
  font-family: Nunito;
  margin: 0;
}

#header {
  margin: 0 auto;
  height: 70px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}

#header a {
  font-size: 20px;
  margin: 5px;
  text-decoration: none;
  color: #fff;
}
</style>
