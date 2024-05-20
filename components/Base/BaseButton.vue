<script setup lang="ts">
interface ButtonProps {
  size?: "sm" | "md";
}

const props = withDefaults(defineProps<ButtonProps>(), {
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
</script>

<template>
  <NuxtLink
    class="text-sm text-white shadow bg-slate-950 hover:bg-slate-800 active:bg-slate-700"
    :class="buttonClasses"
  >
    <slot></slot>
  </NuxtLink>
</template>
