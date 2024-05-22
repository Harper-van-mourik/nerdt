<template>
  <nav class="container md:container">
    <div class="flex items-center justify-between py-4">
      <a href="/">
        <img src="~/assets/img/nerdt-logo.svg" alt="nerdt logo" class="w-20" />
      </a>

      <div class="flex items-center gap-4">
        <div class="flex items-center gap-2">
          <BaseNavLink to="/posts">Posts</BaseNavLink>
          <BaseNavLink to="/about">About</BaseNavLink>
        </div>
        <BaseButton to="/gate/post/new" size="sm">New</BaseButton>
      </div>
    </div>
  </nav>
</template>
