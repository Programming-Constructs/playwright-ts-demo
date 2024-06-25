import { Page, Locator } from "@playwright/test";

export class Links {

  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  byText(text: string): Locator {

    return this.page.locator('a', { hasText: text });

  }

  byAltText(alt: string): Locator {

    return this.page.getByAltText(alt);

  }

}