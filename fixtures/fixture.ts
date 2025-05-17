import { test as base, expect } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import {SignupLoginPage} from "../pages/signupLoginPage";

type AutomationFixture = {
  // put page here
  homePage: HomePage;
  signupLoginPage: SignupLoginPage;
};

export const test = base.extend<AutomationFixture>({

  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },

  signupLoginPage: async ({page}, use) => {
    const signupLoginPage = new SignupLoginPage(page);
    await use(signupLoginPage);
  },
});

export { expect };
