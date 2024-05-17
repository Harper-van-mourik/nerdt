<script setup lang="ts">
const { path } = useRoute();
const { formatTime } = useTime();
const posts = usePosts();
const post = posts[0];
</script>

<template>
  <section class="container py-16 md:container">
    <div class="grid grid-cols-4">
      <div class="col-span-2 col-start-2">
        <p class="text-xs text-slate-400">
          {{ formatTime(post.time) }}
        </p>
        <h1 class="pb-2 text-xl font-bold">{{ post.title }}</h1>

        <p>
          {{ post.content }}
        </p>
      </div>
      <div class="col-span-1">other posts</div>
    </div>
  </section>
</template>
