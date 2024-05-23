<script setup lang="ts">
interface NavLink {
  to?: string;
}

const props = withDefaults(defineProps<NavLink>(), {});

const componentToShow = computed(() => {
  if (props?.to) {
    return resolveComponent("NuxtLink");
  }
  return "button";
});
</script>

<template>
  <component
    :is="componentToShow"
    :to="to"
    class="flex items-center justify-center w-full px-2 rounded-2xl aspect-square hover:bg-slate-900"
  >
    <slot></slot>
  </component>
</template>
