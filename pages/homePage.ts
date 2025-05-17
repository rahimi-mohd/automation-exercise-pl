import { expect, type Locator, type Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly header: Locator;
  readonly iconLink: Locator;
  readonly signupLoginBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = page.getByRole("heading", { name: "AutomationExercise" });
    this.iconLink = page.getByRole("link", { name: "Website for automation" });
    this.signupLoginBtn = page.getByRole("link", { name: "Signup / Login" });
  }

  async navigateTo() {
    await this.page.goto("/");
    await expect(this.iconLink).toBeVisible();
    await expect(this.header).toBeVisible();
  }

  async clickSignupLoginBtn() {
    await this.signupLoginBtn.click();
  }
}
