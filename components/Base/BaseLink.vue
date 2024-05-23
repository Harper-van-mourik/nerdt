<script setup lang="ts">
interface Link {
  to?: string;
}

const props = withDefaults(defineProps<Link>(), {});

const componentToShow = computed(() => {
  if (props.to) {
    return resolveComponent("NuxtLink");
  }
  return "button";
});
</script>

<template>
  <component
    :is="componentToShow"
    :to="to"
    class="rounded hover:underline active:text-slate-700"
  >
    <slot></slot>
  </component>
</template>
