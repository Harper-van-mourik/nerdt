import type { Auth } from "firebase/auth";
import { getAuth, signOut } from "firebase/auth";

export const email: Ref<string> = ref("");

export function NavigateToQueryRedirectWithFallback(): void {
  const { query } = useRoute();

  if (query.redirect) {
    navigateTo(query!.redirect.toString());
  } else {
    navigateTo("/");
  }
}

export function signOutToLogin(): void {
  const auth: Auth = getAuth();
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      navigateTo("/");
    })
    .catch((error) => {
      // todo: handle sign-out errors
    });
}
