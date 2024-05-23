<template>
  <div class="h-full">
    <div
      class="flex flex-col justify-between w-32 h-full gap-4 p-2 text-white bg-black"
    >
      <div class="flex flex-col gap-8">
        <NuxtLink to="/gate" class="flex justify-center">
          <img
            src="~/assets/img/nerdt-logo-dark.svg"
            alt="nerdt logo"
            class="w-20"
          />
        </NuxtLink>

        <div class="flex flex-col gap-2">
          <GateNavLink to="/gate/post"> Posts </GateNavLink>
          <GateNavLink to="/gate/settings"> Settings </GateNavLink>
        </div>
      </div>

      <GateNavLink @click="signOutToLogin"> &#x21a4; </GateNavLink>
    </div>
  </div>
</template>
