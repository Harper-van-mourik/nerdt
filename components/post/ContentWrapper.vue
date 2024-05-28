<template>
  <div class="grid grid-cols-12 gap-12">
    <div class="col-span-3">
      <slot name="left"></slot>
    </div>
    <div class="col-span-6">
      <h1 class="pb-2 text-xl font-bold"><slot name="title"></slot></h1>

      <slot></slot>
    </div>
    <div class="flex flex-col col-span-3 gap-4">
      <slot name="right"> </slot>
    </div>
  </div>
</template>
