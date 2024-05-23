<script setup lang="ts">
const classes = [
  "[&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-2 [&_a:focus-visible]:outline-dashed",
  "[&_button:focus-visible]:outline-2 [&_button:focus-visible]:outline-offset-2 [&_button:focus-visible]:outline-dashed",
];
</script>

<template>
  <div class="h-full text-slate-950" :class="classes">
    <NuxtPage />
  </div>
</template>

<style>
html,
body,
#__nuxt {
  height: 100%;
}
</style>
