<script setup lang="ts">
const posts = usePosts();
</script>

<template>
  <section class="py-24 text-white bg-black">
    <div class="container flex flex-col gap-8 md:container">
      <div>
        <h1 class="text-lg font-bold">Posts</h1>
        <p>All news</p>
      </div>
      <div class="grid grid-cols-4 gap-6">
        <NuxtLink
          :to="`/posts/${slug}`"
          v-for="{ title, content, slug, featured_image } in posts"
          :style="`background-image: url('${featured_image}')`"
          class="flex flex-col justify-end h-48 p-2 overflow-hidden transition-all ease-in-out bg-center bg-no-repeat bg-cover rounded-xl focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-offset-2 group hover:p-0"
        >
          <div
            class="flex flex-col w-full p-6 text-white transition-all ease-in-out group-hover:gap-2 group-hover:p-8 rounded-xl group-hover:rounded-none bg-gradient-to-r from-black/70 to-black/30 backdrop-blur-sm group-hover:h-full"
          >
            <div class="font-bold">{{ title }}</div>
            <div class="line-clamp-1 group-hover:line-clamp-4">
              {{ content }}
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
