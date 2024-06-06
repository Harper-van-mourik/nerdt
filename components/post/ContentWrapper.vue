<template>
  <div class="flex flex-col gap-8">
    <div class="self-center max-w-4xl">
      <h1 class="pb-2 text-xl font-bold"><slot name="title"></slot></h1>

      <slot></slot>
    </div>
    <div>
      <slot name="right"></slot>
    </div>
  </div>
</template>
