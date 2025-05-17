import { expect, type Locator, type Page } from "@playwright/test";

export class SignupLoginPage {
  readonly page: Page;
  readonly newSignupHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newSignupHeader = page.getByRole("heading", {name: "new User Signup!"});
  }

  async newSignupVisibility() {
    await expect(this.newSignupHeader).toBeVisible();
  }



}
