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
    <div class="container flex flex-col gap-2 md:container">
      <div class="relative">
        <img
          :src="featured_image"
          :alt="title"
          class="object-cover w-full h-48 lg:h-96 rounded-xl"
        />
        <div
          class="absolute top-0 left-0 flex flex-col justify-end w-full h-full p-4"
        >
          <div
            class="flex justify-between text-white [&>div]:bg-gradient-to-r [&>div]:from-black/70 [&>div]:to-black/30 [&>div]:rounded-lg [&>div]:backdrop-blur-sm"
          >
            <div class="flex pr-3">
              <NuxtLink :to="`/posts/`" class="py-2 pl-3 font-bold underline"
                >Posts</NuxtLink
              >
              <p class="py-2 text-slate-50">
                &nbsp;/ {{ getTextAfterSlash(path) }}
              </p>
            </div>

            <div class="px-3 py-2">
              <p>
                {{ formatTime(time) }}
              </p>
            </div>
          </div>
        </div>
      </div>
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
