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

import { relatedPosts, type Post } from "~/composables/usePosts";

// const posts = usePosts();
// const { title, content } = posts[1];
const route = useRoute();

const db = useFirestore();

const post: Ref<Post | null> = ref(null);

onMounted(async (): Promise<void> => {
  const q = query(
    collection(db, "posts"),
    where("slug", "==", route.path.replace("/posts/", ""))
  );

  const querySnapshot: QuerySnapshot<DocumentData, DocumentData> =
    await getDocs(q);
  querySnapshot.forEach((doc) => {
    const postData = doc.data() as Post;
    post.value = { id: doc.id, ...postData };
  });
});

onMounted(async (): Promise<void> => {
  if (!relatedPosts.value) {
    const q = query(
      collection(db, "posts"),
      where("status", "==", "published"),
      limit(3)
    );

    const tempArray: Post[] = [];

    const querySnapshot: QuerySnapshot<DocumentData, DocumentData> =
      await getDocs(q);
    querySnapshot.forEach((doc) => {
      const postData = doc.data() as Post;
      tempArray.push({ id: doc.id, ...postData });
    });

    relatedPosts.value = tempArray;
  }
});
</script>

<template>
  <div class="container flex flex-col gap-8 md:container" v-if="post">
    <PostHero v-bind="post" />

    <PostContentWrapper>
      <template #title>{{ post.title }}</template>

      <div :class="tiptapClasses" v-html="post.content"></div>

      <template #right>
        <div class="flex flex-col col-span-3 gap-4">
          <p class="font-bold">Related posts</p>

          <div class="flex flex-col gap-4">
            <div v-for="post in relatedPosts">
              <PostCard v-bind="post"></PostCard>
            </div>
          </div>
        </div>
      </template>
    </PostContentWrapper>
  </div>
</template>

<style>
p:empty::after {
  content: "\00A0";
}
</style>
