<script setup lang="ts">
import type { Auth } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { email } from "~/composables/useAuth";

const password: Ref<string> = ref("");
const isLoading: Ref<boolean> = ref(false);
const errorMessage: Ref<string> = ref("");

const auth: Auth = getAuth();

function submitSignIn(email: string, password: string): void {
  if (isLoading.value) return;

  errorMessage.value = "";
  isLoading.value = true;

  signInWithEmailAndPassword(auth, email, password)
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
</script>

<template>
  <div class="container flex justify-center md:container">
    <div class="flex flex-col w-full gap-8 max-w-60">
      <h1 class="text-lg font-bold text-center">Login</h1>
      <form
        @submit.prevent="submitSignIn(email, password)"
        class="flex flex-col gap-4"
      >
        <FormInput
          v-model="email"
          type="email"
          label="Email"
          name="email"
          placeholder="Email"
        >
        </FormInput>
        <FormInput
          v-model="password"
          type="password"
          label="Password"
          name="password"
          placeholder="••••••••"
        ></FormInput>
        <BaseButton submmit :disabled="isLoading"> Login </BaseButton>
        <div v-if="errorMessage" class="text-center text-rose-500">
          {{ errorMessage }}
        </div>
      </form>

      <div class="flex flex-col gap-2 text-center">
        <BaseLink to="/register">Create an account</BaseLink>
        <BaseLink to="/reset-password">Reset password</BaseLink>
      </div>
    </div>
  </div>
</template>
