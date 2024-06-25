import { Page, Locator, expect } from "@playwright/test";

import { Common, Links } from '../../../libs/locators';

export class DocsPage {

  readonly page: Page;

  getStartedLink: Locator;
  gettingStartedHeader: Locator;

  pomLink: Locator;
  tocList: Locator;

  links: Links;
  common:Common;

  constructor(page: Page) {
    this.page = page;
    
    this.links = new Links(page);
    this.common = new Common(page);

  }

  async goto() {
    await this.page.goto('https://playwright.dev');
  }

  async getStarted() {

    this.getStartedLink = this.links.byText('Get started');
    this.gettingStartedHeader = this.common.getHeadingByText('h1', 'Installation');

    await this.getStartedLink.first().click();
    await expect(this.gettingStartedHeader).toBeVisible();

  }

  async toc() {

    this.tocList = this.common.getBySelector('article div.markdown ul > li > a');

    await this.getStarted();

  }

  async pageObjectModel() {
    
    this.pomLink = this.common.nested([
      { tag: 'li', attrs: { name: 'text', value: 'Guides' } },
      { tag: 'a', attrs: { name: 'text', value: 'Page object models' } },
    ]);

    await this.getStarted();
    await this.pomLink.click();

  }
  
}