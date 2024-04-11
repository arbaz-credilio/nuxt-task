import { defineNuxtRouteMiddleware } from "nuxt/app";

export default defineNuxtRouteMiddleware ((to, from) => {
    console.log("this is custom middle ware");
})