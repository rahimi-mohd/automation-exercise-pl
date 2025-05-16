import { test, expect } from "../fixtures/fixture";

test("go to root url", async ({ homePage }) => {
  await homePage.navigateTo();
});
