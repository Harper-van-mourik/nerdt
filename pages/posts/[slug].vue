<script setup lang="ts">
const { path } = useRoute();
const { formatTime } = useTime();
const posts = usePosts();
const { title, time, content, featured_image } = posts[1];

function getTextAfterSlash(input: string) {
  const parts = input.split("/");
  return parts[parts.length - 1];
}
</script>

<template>
  <section class="text-xs">
    <div class="container flex flex-col gap-2 py-8 md:container">
      <div class="flex justify-between px-4">
        <span>
          <NuxtLink :to="`/posts/`" class="font-bold hover:underline"
            >Posts</NuxtLink
          ><span class="text-slate-500">
            / {{ getTextAfterSlash(path) }}</span
          ></span
        >

        <p>
          {{ formatTime(time) }}
        </p>
      </div>

      <img
        :src="featured_image"
        alt=""
        class="object-cover w-full h-48 lg:h-96 rounded-xl"
      />
    </div>
  </section>
  <section class="container px-4 pb-4 md:container">
    <div class="grid gap-4 lg:grid-cols-4 lg:gap-8">
      <div class="lg:col-span-2 lg:col-start-2">
        <h1 class="pb-2 text-xl font-bold">{{ title }}</h1>

        <p>
          {{ content }}
        </p>
      </div>
      <div class="flex flex-col col-span-1 gap-4">
        <p class="font-bold">Related posts</p>

        <div class="flex flex-col gap-4">
          <div v-for="post in posts">
            <PostCard v-bind="post"></PostCard>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
