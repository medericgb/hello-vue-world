<template>
  <article>
    <div class="product-img">
      <img :src="image" alt="Pizza" height="180" width="150" />
    </div>
    <div class="product-description">
      <h3>{{ titre }}</h3>
      <p>Prix: {{ prix }} XOF</p>
      <p>{{ ingredients }}</p>
      <a href="#"> Commander >> </a>
    </div>
  </article>
</template>

<script>
export default {
  name: "Products",
  data() {
    return {
      titre: "Pizza royale",
      prix: 2500,
      ingredients: ["Fromage", "Poivrons", "Piments"],
      image: "./assets/images/pizza-menu.jpg",
    };
  },
};
</script>

<style scoped>
article {
  border: 1px solid black;
  width: 500px;
  margin: 15px;
  padding: 20px;
  display: flex;
}

.product-img {
  height: 100px;
  width: 120px;
}

.product-description a {
  text-decoration: none;
  color: red;
}
</style>
