<script setup lang="ts">
import type { Auth } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { email } from "~/composables/useAuth";

const password: Ref<string> = ref("");
const isLoading: Ref<boolean> = ref(false);
const errorMessage: Ref<string> = ref("");

const auth: Auth = getAuth();

function submitSignUp(email: string, password: string): void {
  if (isLoading.value) return;

  errorMessage.value = "";
  isLoading.value = true;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      NavigateToQueryRedirectWithFallback();
    })
    .catch((error) => {
      errorMessage.value = error.message;
    })
    .finally(() => {
      isLoading.value = false;
    });
}

const user = await getCurrentUser();

if (user) {
  navigateTo({
    path: "/",
  });
}
</script>

<template>
  <div class="container flex justify-center md:container">
    <div class="flex flex-col w-full gap-8 max-w-60">
      <h1 class="text-lg font-bold text-center">Signup</h1>
      <div class="flex flex-col gap-2">
        <BaseLink to="/login">&laquo; Back to login</BaseLink>
        <form
          @submit.prevent="submitSignUp(email, password)"
          class="flex flex-col gap-4"
        >
          <FormInput
            v-model="email"
            type="email"
            label="Email"
            name="email"
            placeholder="Email"
          ></FormInput>
          <FormInput
            v-model="password"
            type="password"
            label="Password"
            name="password"
            placeholder="••••••••"
          ></FormInput>
          <BaseButton submmit :disabled="isLoading"> Register </BaseButton>
          <div v-if="errorMessage" class="text-center text-rose-500">
            {{ errorMessage }}
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
