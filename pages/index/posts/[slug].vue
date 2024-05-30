<script setup lang="ts">
import {
  collection,
  query,
  where,
  getDocs,
  limit,
  type QuerySnapshot,
  type DocumentData,
  type Query,
  type Firestore,
} from "firebase/firestore";
import { type RouteLocationNormalizedLoaded } from "vue-router";

import { relatedPosts, type Post } from "~/composables/usePosts";

const route: RouteLocationNormalizedLoaded = useRoute();

const db: Firestore = useFirestore();

const post: Ref<Post | null> = ref(null);
const isLoading: Ref<boolean> = ref(true);

onMounted((): void => {
  getPostFromSlug();
  getRelatedPosts();
});

async function getPostFromSlug(): Promise<void> {
  const slug = route.path.replace("/posts/", "");
  const q = query(collection(db, "posts"), where("slug", "==", slug));

  const querySnapshot: QuerySnapshot<DocumentData, DocumentData> =
    await getDocs(q);

  querySnapshot.forEach((doc): void => {
    const postData: Post = doc.data() as Post;
    post.value = { id: doc.id, ...postData };
  });
}

async function getRelatedPosts(): Promise<void> {
  if (!relatedPosts.value) {
    const slug = route.path.replace("/posts/", "");

    const q: Query<DocumentData, DocumentData> = query(
      collection(db, "posts"),
      where("slug", "!=", slug),
      where("status", "==", "published"),
      limit(3)
    );

    const tempArray: Post[] = [];

    const querySnapshot: QuerySnapshot<DocumentData, DocumentData> =
      await getDocs(q);
    querySnapshot.forEach((doc): void => {
      const postData: Post = doc.data() as Post;
      tempArray.push({ id: doc.id, ...postData });
    });

    relatedPosts.value = tempArray;
  }
  isLoading.value = false;
}
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
            <template v-if="!isLoading">
              <div v-for="post in relatedPosts">
                <PostCard :post="post"></PostCard>
              </div>
            </template>

            <template v-if="isLoading">
              <div v-for="_ in 3">
                <PostCard :is-loading="true"></PostCard>
              </div>
            </template>
          </div>
        </div>
      </template>
    </PostContentWrapper>
  </div>
</template>

<style>
/* render html spacing for empty paragraphs */
p:empty::after {
  content: "\00A0";
}
</style>
