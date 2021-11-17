import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import App from "./App.vue";
import router from "./router";

const head = createHead();
const app = createApp(App).use(router).use(head).mount("#app");

export default { app, head };
