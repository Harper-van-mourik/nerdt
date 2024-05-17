<script setup lang="ts">
const currentDate = new Date();
</script>

<template>
  <section class="container flex justify-center py-16 md:container">
    <div class="flex flex-col max-w-3xl [&:not(.grid)>p]:py-2">
      currentDate.getTime
      <br />
      {{ currentDate.getTime() }}
    </div>
  </section>
</template>
