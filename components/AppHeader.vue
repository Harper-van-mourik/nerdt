<template>
  <nav class="container md:container">
    <div class="flex items-center justify-between py-4">
      <a
        href="/"
        class="rounded-md focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-4"
      >
        <img src="~/assets/img/nerdt-logo.svg" alt="nerdt logo" class="w-20" />
      </a>

      <div class="flex items-center gap-4">
        <div class="flex items-center gap-2">
          <BaseNavLink href="/posts">Posts</BaseNavLink>
          <BaseNavLink href="/about">About</BaseNavLink>
        </div>
        <BaseButton size="sm">Login</BaseButton>
      </div>
    </div>
  </nav>
</template>
