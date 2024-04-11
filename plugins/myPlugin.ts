import { defineNuxtPlugin } from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      sayHello: (msg: String) => {
        console.log(msg);
      },
    },
  };
});
