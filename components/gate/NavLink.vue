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
    class="w-full px-3 py-2 text-sm rounded-2xl hover:bg-slate-900"
  >
    <slot></slot>
  </component>
</template>
