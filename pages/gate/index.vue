<script setup lang="ts">
import { useCurrentUser } from "vuefire";
const user = useCurrentUser();
</script>

<template>
  <div class="text-xl font-bold">Admin's gate</div>
  <p>
    Logged in as: <span class="font-bold">{{ user?.email }}</span>
  </p>

  <p>
    id: <span class="font-bold">{{ user?.uid }}</span>
  </p>
</template>
