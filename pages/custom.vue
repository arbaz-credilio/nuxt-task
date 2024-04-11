<script setup>
definePageMeta({
  layout: "custom",
  middleware: "custom-auth",
});
const { $sayHello } = useNuxtApp();
$sayHello("arbaz");
console.log("sdfgsghfjkhnjk");
</script>

<template>
  <div>this is custom page</div>
</template>
