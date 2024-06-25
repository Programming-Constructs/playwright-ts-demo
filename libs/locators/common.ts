import { Locator, Page } from "@playwright/test";
import { Nested } from "../interfaces";

export class Common {

    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    getHeadingByText(headerTag: string, text: string): Locator {

        return this.page.locator(`${headerTag}`, { hasText: text });

    }

    getBySelector(selector: string): Locator {

        return this.page.locator(selector);

    }

    nested(elements: Nested[]): Locator {

        let chained = this.page.locator(elements[0].tag, { hasText: elements[0].attrs.value});

        console.log({chained}, typeof chained);

        elements.slice(1).map(element => {
            chained = chained.locator(element.tag, { hasText: element.attrs.value});
            console.log({chained}, chained.allInnerTexts());
        });
        
        return chained;

    }
}