<script setup lang="ts">
import { useFirestore } from "vuefire";

import { useCollection } from "vuefire";
import { collection, doc, updateDoc } from "firebase/firestore";
import type { PostStatus } from "~/composables/usePosts";

const db = useFirestore();
const firePosts = useCollection(collection(db, "posts"));

const timeOptions = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

async function archivePost(id: string) {
  const docRef = doc(db, "posts", id);

  const status: PostStatus = "archived";

  await updateDoc(docRef, {
    status,
  });
}

function statusColorClasses(status: PostStatus) {
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
</script>

<template>
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
      } in firePosts"
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
          <BaseLink target="_blank" :to="returnPostsSlug(slug)">View</BaseLink>
        </div>
        <div>
          <BaseLink @click="archivePost(id)">Archive</BaseLink>
        </div>
        <div>
          <BaseLink :to="'posts/edit/' + id">Edit</BaseLink>
        </div>
      </div>
    </div>
  </div>
</template>
