<script setup lang="ts">
const posts = usePosts();
</script>

<template>
  <div class="container md:container">
    <h1 class="text-lg font-bold">Posts</h1>
    <div class="grid grid-cols-4 gap-6">
      <NuxtLink
        :to="`/posts/${slug}`"
        v-for="{ title, content, slug } in posts"
        class="rounded-md focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-offset-2"
      >
        <BaseCard>
          <div class="p-6">
            <div class="font-bold">{{ title }}</div>
            <div>{{ content }}</div>
          </div>
        </BaseCard>
      </NuxtLink>
    </div>
  </div>
</template>
