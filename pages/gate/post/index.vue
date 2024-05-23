<script setup lang="ts">
import { useFirestore } from "vuefire";
const db = useFirestore();

import { useCollection } from "vuefire";
import { collection } from "firebase/firestore";

const firePosts = useCollection(collection(db, "posts"));

const timeOptions = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};
</script>

<template>
  <div class="flex flex-col gap-8">
    <div class="flex justify-between">
      <div class="text-xl font-bold">Posts overview</div>

      <BaseButton to="/gate/post/new">Create new post</BaseButton>
    </div>

    <div
      class="overflow-hidden border border-solid shadow-xl rounded-xl border-slate-200"
    >
      <div class="overflow-x-scroll">
        <div
          class="grid grid-cols-4 px-4 pt-2 pb-1 text-sm font-medium border-b border-1 text-slate-500"
        >
          <div class="col-auto">Name</div>
          <div>Status</div>
          <div>Time</div>
          <div>Actions</div>
        </div>
        <div
          v-for="{
            title,
            slug,
            status,
            timestamp_created,
            timestamp_updated,
          } in firePosts"
          class="grid grid-cols-4 px-4 py-2 transition-colors bg-slate-50 hover:bg-slate-100"
        >
          <div class="flex flex-col">
            <p class="font-bold">{{ title }}</p>
            <p class="text-xs text-slate-500">/{{ slug }}</p>
          </div>
          <div>
            <p>{{ status }}</p>
          </div>
          <div>
            <p class="text-sm">
              {{
                formatFirebaseSecondsTime(
                  timestamp_created.seconds,
                  timeOptions
                )
              }}
            </p>

            <p class="text-xs text-slate-500">
              updated:
              {{
                formatFirebaseSecondsTime(
                  timestamp_updated.seconds,
                  timeOptions
                )
              }}
            </p>
          </div>

          <div class="flex gap-2 text-sm">
            <div>
              <BaseLink target="_blank" :to="returnPostsSlug(slug)"
                >View</BaseLink
              >
            </div>
            <!-- <div>
            <BaseLink>Edit</BaseLink>
          </div>
          <div>
            <BaseLink>Copy</BaseLink>
          </div>
          <div>
            <BaseLink>Delete</BaseLink>
          </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
