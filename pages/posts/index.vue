<script setup lang="ts">
const posts = usePosts();
</script>

<template>
  <section class="py-24 text-white bg-black">
    <div
      class="container flex flex-col gap-8 md:container [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-2 [&_a:focus-visible]:outline-dashed [&_a:focus-visible]:rounded-lg"
    >
      <div>
        <h1 class="text-lg font-bold">Posts</h1>
        <p>All news</p>
      </div>
      <div class="grid grid-cols-4 gap-6">
        <NuxtLink
          :to="`/posts/${slug}`"
          v-for="{ title, content, slug, featured_image } in posts"
          class="group"
        >
          <div
            :style="`background-image: url('${featured_image}')`"
            class="flex flex-col justify-end h-48 p-2 overflow-hidden transition-all ease-in bg-center bg-no-repeat bg-cover rounded-xl group-hover:p-0 group-hover:duration-300 group-focus:p-0 group-focus:duration-300 outline-white outline-2 -outline-offset-4"
          >
            <div
              class="relative flex flex-col w-full p-6 text-white transition-all ease-in group-hover:p-8 group-hover:gap-2 group-focus:p-8 group-focus:gap-2 rounded-xl bg-gradient-to-r from-black/70 to-black/30 backdrop-blur-sm group-hover:h-full group-hover:duration-300 group-focus:h-full group-focus:duration-300"
            >
              <div
                class="absolute ease-in opacity-0 group-hover:duration-300 group-hover:opacity-100 top-4 group-hover:right-4 group-focus:duration-300 group-focus:opacity-100 group-focus:right-4 right-8"
              >
                <div
                  class="flex items-center justify-center w-5 h-5 transition border rounded-full border-white/0 hover:border-white group-focus:border-white"
                >
                  &rarr;
                </div>
              </div>

              <div class="font-bold">{{ title }}</div>
              <div
                class="line-clamp-1 group-hover:line-clamp-4 group-focus:line-clamp-4"
              >
                {{ content }}
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
