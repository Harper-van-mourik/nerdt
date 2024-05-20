<script setup lang="ts">
const posts = usePosts();
</script>

<template>
  <section class="py-24">
    <div class="container flex flex-col gap-8 md:container">
      <div>
        <h1 class="text-lg font-bold">Posts</h1>
        <p>All news</p>
      </div>
      <div class="grid grid-cols-4 gap-6">
        <div v-for="post in posts">
          <PostCard v-bind="post"></PostCard>
        </div>
      </div>
    </div>
  </section>
</template>
