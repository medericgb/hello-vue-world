import { createApp } from "vue";
import App from "./App.vue";

// Import Router
import router from "./router/index";

// Components
// Declare in main.js to access globally in your app
import Home from "./views/Home.vue";
import Products from "./components/Products.vue";

const app = createApp(App);
app.component("Products", Products);
// Use Router
app.use(router);
app.mount("#app");
