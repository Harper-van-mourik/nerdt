<script setup lang="ts">
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { email } from "~/composables/useAuth";

const isSent: Ref<boolean> = ref(false);
const isLoading: Ref<boolean> = ref(false);
const errorMessage: Ref<string> = ref("");

const auth = getAuth();

function submitPasswordReset(email: string): void {
  if (isLoading.value) return;

  isLoading.value = true;
  sendPasswordResetEmail(auth, email)
    .then(() => {
      isSent.value = true;
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
      <h1 class="text-lg font-bold text-center">Password reset</h1>

      <div class="flex flex-col gap-2">
        <BaseLink to="/login">&laquo; Back to login</BaseLink>
        <form
          @submit.prevent="submitPasswordReset(email)"
          class="flex flex-col w-full gap-4"
        >
          <FormInput
            v-model="email"
            type="email"
            label="Email"
            name="email"
            placeholder="hello@example.com"
          ></FormInput>

          <BaseButton submmit :disabled="isLoading || isSent">
            Reset
          </BaseButton>

          <div v-if="errorMessage" class="text-center text-rose-500">
            {{ errorMessage }}
          </div>

          <div class="text-center text-emerald-500" v-show="isSent">
            Password reset email is sent
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
