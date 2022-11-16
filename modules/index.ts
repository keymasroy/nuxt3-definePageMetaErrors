import { defineNuxtModule } from "@nuxt/kit";
import { resolve } from "pathe";

export default defineNuxtModule({
  meta: {
    name: "custom",
  },
  setup(option, nuxt) {
    console.log('start custom module..')
    nuxt.hook("pages:extend", (pages) => {
      pages.push({
        path: "/login",
        name: "login",
        file: resolve(__dirname, "../external-pages/login.vue"),
      });
    });
  },
});
