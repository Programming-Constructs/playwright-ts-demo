import { Locator, Page } from "@playwright/test";
import { Buttons, Common } from "../../libs/locators";

export class AccionHomePage {

  page: Page;

  headerMenu: Locator;

  buttons: Buttons;
  common: Common;

  constructor(page: Page) {
    this.page = page;

    this.buttons = new Buttons(page);
    this.common = new Common(page);

  }

  async goto() {
    await this.page.goto('https://accionlabs.com');
  }

  async acceptCookies() {

    await this.buttons.byText('Accept').click();

  }

  async getMicrosoftLogo() {

    await this.common.getBySelector('img[alt="Microsoft (1)"]');
  }

  async getHeaderMenu() {

    this.headerMenu = this.common.getBySelector('.pwr-header__menu ul > li > a[aria-haspopup="true"]');

  }
  
}