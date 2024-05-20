<template>
  <div
    class="flex flex-col justify-between min-h-svh text-slate-950 [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-2 [&_a:focus-visible]:outline-dashed"
  >
    <div>
      <AppHeader></AppHeader>
      <NuxtPage />
    </div>
    <AppFooter></AppFooter>
  </div>
</template>
