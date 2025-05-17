import { test, expect } from "../fixtures/fixture";

test("go to root url", async ({ signupLoginPage }) => {
  await signupLoginPage.newSignupVisibility();
});
