<script setup lang="ts">
import { useAttrs } from "vue";

const attrs = useAttrs();

const model = defineModel();
</script>

<template>
  <label class="block">
    <span class="block mb-2 text-sm font-medium text-slate-600">{{
      attrs.label
    }}</span>

    <input
      v-model="model"
      type="text"
      placeholder="Enter your title"
      v-bind="attrs"
      class="block w-full px-3 py-2 text-sm bg-white border rounded-md shadow-sm focus:outline-2 border-slate-300 focus:outline-dashed placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus:outline-offset-2 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
      required
    />
  </label>
</template>
