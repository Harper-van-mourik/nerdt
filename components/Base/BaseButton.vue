<script setup lang="ts">
interface Button {
  size?: "sm" | "md";
  to?: string;
}

const props = withDefaults(defineProps<Button>(), {
  size: "md",
});

const buttonClasses = computed(() => {
  switch (props.size) {
    case "sm":
      return "px-2 py-1 rounded";
    default:
      return "px-3 py-2 rounded-md";
  }
});

const componentToShow = computed(() => {
  if (props.to) {
    return resolveComponent("NuxtLink");
  }
  return "button";
});
</script>

<template>
  <component
    :to="to"
    :is="componentToShow"
    class="text-sm text-white shadow bg-slate-950 hover:bg-slate-800 active:bg-slate-700"
    :class="buttonClasses"
  >
    <slot></slot>
  </component>
</template>
