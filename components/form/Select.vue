<script setup lang="ts">
import { useAttrs } from "vue";
import type { PropType } from "vue";

const attrs = useAttrs();

const model = defineModel();

interface Options {
  value: string;
  label: string;
}

interface Props {
  options: Options[];
}

const props = defineProps<Props>();
</script>

<template>
  <label class="block">
    <span class="block mb-2 text-sm font-medium text-slate-600">{{
      attrs.label
    }}</span>

    <select
      v-model="model"
      class="block w-full px-3 py-2 text-sm bg-white border rounded-md shadow-sm focus:outline-2 border-slate-300 focus:outline-dashed placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus:outline-offset-2 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
    >
      <option :value="value" v-for="{ value, label } in props.options">
        {{ label }}
      </option>
    </select>
  </label>
</template>
