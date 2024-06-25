import test, { expect } from "@playwright/test";

import { AccionHomePage } from "./home-page.po";

test('should accept cookies', async ({ page }) => {

  const homePage = new AccionHomePage(page);

  await homePage.goto();
  
  await homePage.acceptCookies();

  await homePage.getHeaderMenu();

//   expect(await homePage.getMicrosoftLogo()).toBeTruthy();

  expect(homePage.headerMenu).toContainText([
    `Services`,
    `Generative AI`,
    `Industries`,
    `Innovations`,
    `Insights`,
    `Careers`,
    `About`
]);
  
});