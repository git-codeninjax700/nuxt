<script setup>
const route = useNuxtApp();
console.log(route)
</script>
<template>
    <div>event id: {{ $route.params.id }}</div>
</template>