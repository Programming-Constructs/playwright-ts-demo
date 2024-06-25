import { Page, Locator } from "@playwright/test";

export class Buttons {

  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  byTag(): Locator {

    return this.page.locator('button');

  }

  byText(text: string): Locator {

    return this.page.locator('button', { hasText: text });

  }

}