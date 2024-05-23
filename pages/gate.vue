<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
</script>

<template>
  <div class="flex h-full">
    <GateNavigation />
    <div class="w-full py-8 overflow-y-scroll">
      <div class="container md:container">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>
