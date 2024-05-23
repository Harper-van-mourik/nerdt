<script setup>
import { useCurrentUser } from "vuefire";

const user = useCurrentUser();
</script>

<template>
  <div class="text-xl font-bold">settings/account</div>
  <p v-if="user">Hello {{ user.providerData[0] }}</p>

  <form submit.prevent="" class="flex flex-col max-w-sm gap-4">
    <FormInput
      label="Email"
      name="email"
      v-model="user.providerData[0].email"
      disabled
    />

    <FormInput
      label="Display name"
      name="display-name"
      placeholder="Create a name"
      v-model="user.providerData[0].displayName"
    />

    <BaseButton>Save</BaseButton>
  </form>
</template>
