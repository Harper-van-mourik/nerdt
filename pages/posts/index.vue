<script setup lang="ts">
const posts = usePosts();
</script>

<template>
  <section class="">
    <div class="container flex flex-col gap-8 md:container">
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <div class="flex items-center col-span-1 p-4">
          <div class="flex flex-col gap-2">
            <h1 class="text-lg font-bold">nerdt posts</h1>
            <p>
              News about cutting-edge tricks and techniques designed to elevate
              your front-end development skills. From (Tailwind) CSS animations
              to innovative JavaScript hacks, we've got you covered.
            </p>
          </div>
        </div>
        <div v-for="post in posts">
          <PostCard v-bind="post"></PostCard>
        </div>
      </div>
    </div>
  </section>
</template>
