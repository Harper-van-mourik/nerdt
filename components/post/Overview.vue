<script setup lang="ts">
import { useFirestore } from "vuefire";

import { useCollection } from "vuefire";
import { collection, doc, updateDoc } from "firebase/firestore";
import type { PostStatus } from "~/composables/usePosts";

const db = useFirestore();
const firePosts = useCollection(collection(db, "posts"));

const route = useRoute();

const filteredPosts = computed(() => {
  return firePosts.value.filter((post) => {
    if (route.query.filter == "archived") {
      return post.status === "archived";
    }
    if (route.query.filter == "published") {
      return post.status === "published";
    }
    if (route.query.filter == "draft") {
      return post.status === "draft";
    }
    return post.status !== "archived";
  });
});

const timeOptions = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

async function changeStatus(id: string, status: PostStatus): Promise<void> {
  const docRef = doc(db, "posts", id);

  await updateDoc(docRef, {
    status,
  });
}

function statusColorClasses(status: PostStatus): string {
  switch (status) {
    case "published":
      return "bg-emerald-500";
      break;
    case "draft":
      return "bg-amber-500";
      break;
    default:
      return "bg-rose-500";
  }
}

function addQuery(status?: PostStatus): void {
  navigateTo({ path: "/gate/posts/", query: { filter: status } });
}
</script>

<template>
  <div class="flex gap-2">
    <BaseButton @click="addQuery()" :disabled="!route.query.filter"
      >All</BaseButton
    >
    <BaseButton
      @click="addQuery('archived')"
      :disabled="route.query.filter == 'archived'"
      >Archived</BaseButton
    >
  </div>

  <div
    class="overflow-x-scroll border border-solid shadow-xl rounded-xl border-slate-200"
  >
    <div
      class="flex px-4 pt-2 pb-1 text-sm font-medium border-b border-1 text-slate-500 bg-slate-50 min-w-fit"
    >
      <div class="grow min-w-96">Name</div>
      <div class="text-center min-w-16">Status</div>
      <div class="text-right min-w-48">Time</div>
      <div class="text-right min-w-48">Actions</div>
    </div>
    <div
      v-for="{
        id,
        title,
        slug,
        status,
        timestamp_created,
        timestamp_updated,
      } in filteredPosts"
      class="flex px-4 py-2 transition-colors odd:bg-slate-50 hover:bg-slate-100 min-w-fit"
    >
      <div class="flex flex-col text-left grow min-w-96">
        <p class="font-bold line-clamp-1">{{ title }}</p>
        <p class="text-xs text-slate-500">/{{ slug }}</p>
      </div>

      <div class="flex items-center justify-center min-w-16">
        <div
          class="w-2 h-2 rounded-full"
          :class="statusColorClasses(status)"
        ></div>
      </div>

      <div class="text-right">
        <p class="text-sm" v-if="timestamp_created">
          <ClientOnly>
            {{
              formatFirebaseSecondsTime(timestamp_created.seconds, timeOptions)
            }}
          </ClientOnly>
        </p>

        <p class="text-xs text-slate-500 min-w-48" v-if="timestamp_updated">
          <ClientOnly>
            updated:
            {{
              formatFirebaseSecondsTime(timestamp_updated.seconds, timeOptions)
            }}
          </ClientOnly>
        </p>
      </div>

      <div class="flex items-center justify-end gap-2 text-sm min-w-48">
        <div>
          <BaseLink
            v-if="status == 'draft'"
            @click="changeStatus(id, 'archived')"
            >Archive</BaseLink
          >
          <BaseLink
            v-if="status == 'archived'"
            @click="changeStatus(id, 'draft')"
            >Draft</BaseLink
          >
        </div>

        <div>
          <BaseLink target="_blank" :to="returnPostsSlug(slug)">View</BaseLink>
        </div>

        <div>
          <BaseLink :to="`edit/${id}`">Edit</BaseLink>
        </div>
      </div>
    </div>
  </div>
</template>
