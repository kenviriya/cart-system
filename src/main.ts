import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import { persistCartPlugin } from "./stores/persistCart";
import "./assets/main.css";

const app = createApp(App);
const pinia = createPinia();

pinia.use(persistCartPlugin);
app.use(pinia);

app.mount("#app");
