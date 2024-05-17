<template>
  <div
    class="flex flex-col gap-2 p-6 border rounded-md shadow border-slate-300"
  >
    <h5 class="font-bold"><slot name="title"></slot></h5>
    <p class="text-sm">
      <slot></slot>
    </p>
  </div>
</template>
