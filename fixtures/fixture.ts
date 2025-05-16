import { test as base, expect } from "@playwright/test";
import { HomePage } from "../pages/homePage";

type AutomationFixture = {
  // put page here
  homePage: HomePage;
};

export const test = base.extend<AutomationFixture>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
});

export { expect };
