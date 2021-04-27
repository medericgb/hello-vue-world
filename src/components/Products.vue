<template>
  <article>
    <div class="product-img"></div>
    <div class="product-desctiption">
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
  data() {},
};
</script>

<style>
</style>
