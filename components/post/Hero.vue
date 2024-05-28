<script setup lang="ts">
import type { Post } from "~/composables/usePosts";

const post = defineProps<Post>();

const timeOptions = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
};
</script>

<template>
  <section class="text-xs">
    <div class="flex flex-col gap-2">
      <div class="relative">
        <img
          :src="featured_image"
          :alt="title"
          class="object-cover w-full h-48 lg:h-96 rounded-xl"
        />
        <div
          class="absolute top-0 left-0 flex flex-col justify-end w-full h-full p-4"
        >
          <div
            class="flex justify-between text-white [&>div]:bg-gradient-to-r [&>div]:from-black/70 [&>div]:to-black/30 [&>div]:rounded-lg [&>div]:backdrop-blur-sm"
          >
            <div class="flex pr-3">
              <NuxtLink :to="`/posts/`" class="py-2 pl-3 font-bold underline"
                >Posts/</NuxtLink
              >
              <p class="py-2 text-slate-50">{{ slug }}</p>
            </div>

            <div class="px-3 py-2" v-if="timestamp_created">
              <p>
                <ClientOnly>
                  {{
                    formatFirebaseSecondsTime(
                      timestamp_created.seconds,
                      timeOptions
                    )
                  }}
                </ClientOnly>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
