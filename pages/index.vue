<template>
  <AppHero></AppHero>

  <div class="container flex flex-col gap-8 md:container">
    <div class="max-w-screen-md">
      <h1 class="text-lg font-bold">Trending nerdt posts</h1>
      <p>
        News about cutting-edge tricks and techniques designed to elevate your
        front-end development skills. From (Tailwind) CSS animations to
        innovative JavaScript hacks, we've got you covered.
      </p>
    </div>
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      <div v-for="post in posts">
        <PostCard v-bind="post"></PostCard>
      </div>
    </div>
  </div>
</template>
