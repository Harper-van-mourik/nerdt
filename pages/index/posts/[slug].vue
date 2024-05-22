<script setup lang="ts">
const posts = usePosts();
const { title, time, content, featured_image } = posts[1];
</script>

<template>
  <div class="container flex flex-col gap-8 md:container">
    <PostHero v-bind="posts[1]" />

    <div class="grid grid-cols-12">
      <div class="col-span-3"></div>
      <div class="col-span-6">
        <h1 class="pb-2 text-xl font-bold">{{ title }}</h1>

        <p>
          {{ content }}
        </p>
      </div>
      <div class="flex flex-col col-span-3 gap-4">
        <p class="font-bold">Related posts</p>

        <div class="flex flex-col gap-4">
          <div v-for="post in posts">
            <PostCard v-bind="post"></PostCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
