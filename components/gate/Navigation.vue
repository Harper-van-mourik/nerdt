<template>
  <div class="h-full">
    <div
      class="flex flex-col items-center justify-between w-20 h-full gap-4 p-2 text-white bg-black"
    >
      <div class="flex flex-col gap-8">
        <GateNavLink to="/gate">
          <img
            src="~/assets/img/nerdt-logo-dark.svg"
            alt="nerdt logo"
            class="w-full"
          />
        </GateNavLink>

        <div class="flex flex-col gap-2">
          <GateNavLink to="/gate/post"> Posts </GateNavLink>
        </div>
      </div>

      <GateNavLink to="/"> &#x21a4; </GateNavLink>
    </div>
  </div>
</template>
