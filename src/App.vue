<template>
  <nav id="header">
    <a href="#">Home</a>
    <a href="#">Contact</a>
  </nav>
  <section>
    <Home />
  </section>
</template>

<script>
import Home from "./components/Home.vue";
import Products from "./components/Products.vue";

export default {
  name: "App",
  components: {
    Home,
    Products,
  },
};
</script>

<style>
#header {
  background-color: black;
}

a {
  font-size: 20px;
  margin: 5px;
  text-decoration: none;
  color: #fff;
}
</style>
