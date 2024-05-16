<template>
  <nav class="md:container">
    <div class="flex items-center justify-between py-4">
      <a
        href="/"
        class="rounded-md focus:outline-none focus:ring focus:ring-violet-300"
      >
        <img src="~/assets/img/nerdt-logo.svg" alt="nerdt logo" class="w-20" />
      </a>

      <div class="flex items-center gap-4">
        <div class="flex items-center gap-2">
          <BaseLink size="sm">snippets</BaseLink>
          <BaseLink size="sm">about</BaseLink>
        </div>
        <BaseButton size="sm">Cool and now?</BaseButton>
      </div>
    </div>
  </nav>
</template>
