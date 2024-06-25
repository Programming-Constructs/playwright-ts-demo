import { Page } from "@playwright/test";

export class AccionHomePage {

  page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  
}