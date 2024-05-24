<script setup lang="ts"></script>

<template>
  <div class="flex flex-col gap-8">
    <div class="flex justify-between">
      <div class="text-xl font-bold">Posts overview</div>

      <BaseButton to="/gate/post/new">Create new post</BaseButton>
    </div>

    <PostOverview></PostOverview>
  </div>
</template>
