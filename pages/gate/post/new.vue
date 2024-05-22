<script setup lang="ts">
import type { Post } from "~/composables/usePosts";

const post: Ref<Post> = ref({
  id: 0,
  title: "Title goes here",
  slug: "",
  content: "",
  featured_image:
    "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1240&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
});

function addImage() {
  const url = window.prompt("URL");

  if (url && post.value) {
    post.value.featured_image = url;
  }
}
</script>

<template>
  <div class="container flex flex-col gap-8 md:container">
    <PostHero v-bind="post" />

    <PostContentWrapper>
      <template #title>{{ post.title }}</template>
      <div>
        <TiptapEditor />
      </div>

      <template #right>
        <form class="flex flex-col gap-4" @submit.prevent="">
          <div class="flex justify-between">
            <div class="text-xl font-bold text-center">New post</div>
            <BaseButton submit>Create post</BaseButton>
          </div>
          <label class="block">
            <span class="block mb-2 text-sm font-medium text-slate-600"
              >Title</span
            >

            <input
              v-model="post.title"
              type="text"
              placeholder="Enter your title"
              class="block w-full px-3 py-2 text-sm bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </label>

          <label class="block">
            <span class="block mb-2 text-sm font-medium text-slate-600"
              >Slug</span
            >

            <input
              v-model="post.slug"
              type="text"
              placeholder="Slug"
              class="block w-full px-3 py-2 text-sm bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </label>
          <div>
            <BaseButton @click="addImage">Replace image</BaseButton>
          </div>
        </form>
      </template>
    </PostContentWrapper>
  </div>
</template>
