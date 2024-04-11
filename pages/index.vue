<script setup>
const { sayHello } = useFunc();
sayHello("arbaz");
const counter = useState("counter", () => Math.round(Math.random() * 1000));
const { val } = useFoo();
</script>
<template>
  <div>
    <p>index page</p>
    <IconBell />
  </div>
  <div>
    Counter: {{ counter }}
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
  </div>
  <Counter />
  {{ val }}
</template>
