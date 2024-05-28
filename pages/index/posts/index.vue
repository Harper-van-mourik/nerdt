<script setup lang="ts">
import { posts, type Post } from "~/composables/usePosts";

import {
  collection,
  query,
  where,
  getDocs,
  type QuerySnapshot,
  type DocumentData,
  type Query,
  type Firestore,
} from "firebase/firestore";

const db: Firestore = useFirestore();

onMounted(async (): Promise<void> => {
  if (!posts.value) {
    const q: Query<DocumentData, DocumentData> = query(
      collection(db, "posts"),
      where("status", "==", "published")
    );
    const querySnapshot: QuerySnapshot<DocumentData, DocumentData> =
      await getDocs(q);

    const tempArray: Post[] = [];

    querySnapshot.forEach((doc): void => {
      const postData: Post = doc.data() as Post;
      tempArray.push({ id: doc.id, ...postData });
    });

    posts.value = tempArray;
  }
});
</script>

<template>
  <section>
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

        <template v-if="posts">
          <div v-for="post in posts">
            <PostCard v-bind="post"></PostCard>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
