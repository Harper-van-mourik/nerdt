<script setup lang="ts">
import {
  collection,
  query,
  where,
  getDocs,
  type QuerySnapshot,
  type DocumentData,
  limit,
} from "firebase/firestore";

import { featuredPosts, type Post } from "~/composables/usePosts";

const db = useFirestore();
onMounted(async (): Promise<void> => {
  if (!featuredPosts.value) {
    const q = query(
      collection(db, "posts"),
      where("status", "==", "published"),
      limit(4)
    );

    const tempArray: Post[] = [];

    const querySnapshot: QuerySnapshot<DocumentData, DocumentData> =
      await getDocs(q);
    querySnapshot.forEach((doc) => {
      const postData = doc.data() as Post;
      tempArray.push({ id: doc.id, ...postData });
    });

    featuredPosts.value = tempArray;
  }
});
</script>

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
      <div v-for="post in featuredPosts">
        <PostCard v-bind="post"></PostCard>
      </div>
    </div>
  </div>
</template>
