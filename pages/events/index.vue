<script setup>
const { val } = useFoo();
</script>
<template>
  <div>event page</div>
  <Event />
  {{ val }}
  <button @click="val = 'jhsgfhskfniuhdi'">click</button>
</template>
