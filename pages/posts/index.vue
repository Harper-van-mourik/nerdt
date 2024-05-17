<script setup lang="ts">
const posts = usePosts();
</script>

<template>
  <div class="container md:container">
    <h1 class="text-lg font-bold">Posts</h1>
    <div class="grid grid-cols-4 gap-6">
      <NuxtLink
        :to="`/posts/${slug}`"
        class="flex flex-col justify-end inline-block h-32 p-4 border rounded-md shadow active:text-slate-700 focus:outline-none focus:ring focus:ring-slate-300 border-slate-200"
        v-for="{ title, content, slug } in posts"
      >
        <div class="font-bold">{{ title }}</div>
        <div>{{ content }}</div>
      </NuxtLink>
    </div>
  </div>
</template>
