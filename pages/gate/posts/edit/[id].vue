<script setup lang="ts">
import { collection, doc } from "firebase/firestore";

const route = useRoute();

const db = useFirestore();
const post = useDocument(doc(collection(db, "posts"), `${route.params.id}`), {
  once: true,
});
</script>

<template>
  <PostEdit :initial-Post="post" v-if="post"></PostEdit>
</template>
