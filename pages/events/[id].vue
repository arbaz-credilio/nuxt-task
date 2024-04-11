<template>
    <div>
        this is event id {{$route.params.id}}
    </div>
</template>
<script setup>
const route = useRoute();
const nuxt = useNuxtApp()
console.log(route.params.id);
console.log(nuxt);
</script>
