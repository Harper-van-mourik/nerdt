<script setup lang="ts">
import {
  Timestamp,
  doc,
  setDoc,
  collection,
  updateDoc,
} from "firebase/firestore";
import type { Post } from "~/composables/usePosts";

interface Props {
  isNew?: boolean;
  initialPost?: any;
}
const props = withDefaults(defineProps<Props>(), {});

const post: Ref<Post | null> = ref(null);

onMounted((): void => {
  setInitialPost();
});

function setInitialPost(): void {
  post.value = props.isNew ? postDefault : props.initialPost;
}

function submitPost(): void {
  if (props.isNew) {
    createPost();
  } else {
    updatePost();
  }
}

const db = useFirestore();
async function createPost(): Promise<void> {
  if (!post.value) return;

  const firebaseDateNow: Timestamp = Timestamp.now();
  post.value.timestamp_created = firebaseDateNow;
  post.value.timestamp_updated = firebaseDateNow;

  const newDocRef = doc(collection(db, "posts"));
  await setDoc(newDocRef, {
    id: newDocRef.id,
    ...post.value,
  }).then((): void => {
    post.value!.id = newDocRef.id;

    navigateTo({
      path: `/gate/posts/edit/${newDocRef.id}`,
    });
  });
}

async function updatePost(): Promise<void> {
  if (!post.value?.id) return;
  const docRef = doc(db, "posts", post.value?.id);

  await updateDoc(docRef, { ...post.value });
}
</script>

<template>
  <div class="flex flex-col gap-8" v-if="post">
    <PostHero v-bind="post" />

    <PostContentWrapper>
      <template #title>{{ post.title }}</template>
      <div>
        <TiptapEditor v-model="post.content" />
      </div>

      <template #right>
        <form class="flex flex-col gap-4" @submit.prevent="submitPost()">
          <div class="flex justify-between">
            <div class="text-xl font-bold text-center">New post</div>
            <BaseButton submit>
              <template v-if="post.id">Update post</template>
              <template v-else>Create post</template>
            </BaseButton>
          </div>

          <FormSelect
            v-model="post.status"
            :options="postStatusOptions"
          ></FormSelect>

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