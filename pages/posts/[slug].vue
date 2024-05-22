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
  <PostHero v-bind="posts[1]" />
  <section class="container px-4 py-8 md:container">
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
