<script setup lang="ts">
import { Timestamp, doc, setDoc, collection } from "firebase/firestore";
import type { Post } from "~/composables/usePosts";

const tiptapOutputHtml: Ref<string> = ref("");

const post: Ref<Post> = ref({
  title: "Title goes here",
  slug: "",
  status: "draft",
  content: "",

  featured_image:
    "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1240&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
});

const db = useFirestore();

async function createPost() {
  // the slug is also the id
  if (!post.value?.slug) return;

  const firebaseDateNow: Timestamp = Timestamp.now();

  if (!post.value.timestamp_created) {
    post.value.timestamp_created = firebaseDateNow;
  }

  post.value.timestamp_updated = firebaseDateNow;

  const newDocRef = doc(collection(db, "posts"));
  await setDoc(newDocRef, {
    id: newDocRef.id,
    ...post.value,
  });
}

function tiptapChange(html: string) {
  post.value.content = html;
}
</script>

<template>
  <div class="flex flex-col gap-8">
    <PostHero v-bind="post" />

    <PostContentWrapper>
      <template #title>{{ post.title }}</template>
      <div>
        <TiptapEditor @change="tiptapChange" />
      </div>

      <template #right>
        <form class="flex flex-col gap-4" @submit.prevent="createPost">
          <div class="flex justify-between">
            <div class="text-xl font-bold text-center">New post</div>
            <BaseButton submit>Create post</BaseButton>
          </div>

          <FormInput
            v-model="post.title"
            label="Title"
            name="title"
            placeholder="Enter your title"
          ></FormInput>

          <FormInput
            v-model="post.slug"
            label="Slug"
            name="slug"
            placeholder="Enter your slug"
            :pattern="patternSlug"
          ></FormInput>

          <FormInput
            v-model="post.featured_image"
            label="Featured image"
            name="featured-image"
            placeholder="url"
          ></FormInput>
        </form>
      </template>
    </PostContentWrapper>
  </div>
</template>
