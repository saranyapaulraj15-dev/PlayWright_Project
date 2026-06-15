import { Page, Locator } from "@playwright/test";
import {
    FillOptions,
    ClickOptions,
    defaultFillOptions,
    defaultClickOptions,
    WaitForOptions,
    defaultWaitOptions,
    DispatchEventOptions,
    EvaluateOptions
} from "./baseOption";

export class BaseClass {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
/**
 * Method to fill value for Locator or specific input field or text area
 * @param  {Locator} locator 
 * @param {string} value 
 * @param {FillOptions} options 
 */
    async fill(locator: Locator, value: string, options: FillOptions = defaultFillOptions) {
        try {
            await locator.fill(value, options);
        } catch (e: any) {
            throw new Error(`Failed to fill value '${value}' | ${e.message}`);
        }
    }

    /**
     * method to get all inner text
     * @param {Locator} locator 
     * @returns 
     */
    async getAllInnerTexts(locator: Locator): Promise<string[]> {
        try {
            return await locator.allInnerTexts();
        } catch (e: any) {
            throw new Error(`Failed to get allInnerTexts | ${e.message}`);
        }
    }

    /**
     * Method to get all text contents
     * @param {Locator} locator 
     * @returns 
     */
    async getAllTextContents(locator: Locator): Promise<string[]> {
        try {
            return await locator.allTextContents();
        } catch (e: any) {
            throw new Error(`Failed to get allTextContents | ${e.message}`);
        }
    }

    /**
     * Method to blur the element 
     * @param {Locator} locator 
     */

    async blur(locator: Locator) {
        try {
            await locator.blur();
        } catch (e: any) {
            throw new Error(`Failed to blur element | ${e.message}`);
        }
    }

    /**
     * Method to get Bounding Box
     * @param {Locator} locator 
     * @returns 
     */

    async getBoundingBox(locator: Locator) {
        try {
            return await locator.boundingBox();
        } catch (e: any) {
            throw new Error(`Failed to get boundingBox | ${e.message}`);
        }
    }

    /**
     * Method to check the element
     * @param {Locator} locator 
     */
    async check(locator: Locator) {
        try {
            await locator.check();
        } catch (e: any) {
            throw new Error(`Failed to check element | ${e.message}`);
        }
    }

    /**
     * Method to clear the element
     * @param {Locator} locator 
     */
    async clear(locator: Locator) {
        try {
            await locator.clear();
        } catch (e: any) {
            throw new Error(`Failed to clear element | ${e.message}`);
        }
    }

    /**
     * Method to click the element
     * @param {Locator} locator 
     * @param {ClickOptions} options 
     */
    async click(locator: Locator, options: ClickOptions = defaultClickOptions) {
        try {
            await locator.click(options);
        } catch (e: any) {
            throw new Error(`Failed to click element | ${e.message}`);
        }
    }

    /**
     * Method to count the value
     * @param  {Locator} locator 
     * @returns 
     */
    async count(locator: Locator): Promise<number> {
        try {
            return await locator.count();
        } catch (e: any) {
            throw new Error(`Failed to get count | ${e.message}`);
        }
    }

    /**
     * Method to double click
     * @param {Locator} locator 
     */
    async doubleClick(locator: Locator) {
        try {
            await locator.dblclick();
        } catch (e: any) {
            throw new Error(`Failed to double click | ${e.message}`);
        }
    }

    /**
     * Method to dispatch the Event
     * @param {Locator} locator 
     * @param {string} event 
     */
    async dispatchEvent(locator: Locator, event: string) {
        try {
            await locator.dispatchEvent(event);
        } catch (e: any) {
            throw new Error(`Failed to dispatch event ${event} | ${e.message}`);
        }
    }

    /**
     * Method to drag the elements
     * @param {Locator} source 
     * @param {Locator} target 
     */
    async dragTo(source: Locator, target: Locator) {
        try {
            await source.dragTo(target);
        } catch (e: any) {
            throw new Error(`Failed to drag element | ${e.message}`);
        }
    }

    /**
     * Method to evaluate the message
     * @param {Locator} locator 
     * @param {EvaluateOptions} fn 
     * @returns 
     */
    async evaluate(locator: Locator, fn: any) {
        try {
            return await locator.evaluate(fn);
        } catch (e: any) {
            throw new Error(`Failed to evaluate | ${e.message}`);
        }
    }

    /**
     * Method to evaluate all the message
     * @param {Locator} locator 
     * @param {EvaluateOptions} fn 
     * @returns 
     */
    async evaluateAll(locator: Locator, fn: any) {
        try {
            return await locator.evaluateAll(fn);
        } catch (e: any) {
            throw new Error(`Failed to evaluateAll | ${e.message}`);
        }
    }

    /**
     * Method to focus the element
     * @param {Locator} locator 
     */
    async focus(locator: Locator) {
        try {
            await locator.focus();
        } catch (e: any) {
            throw new Error(`Failed to focus element | ${e.message}`);
        }
    }

    /**
     * Method to get attribute value
     * @param {Locator} locator 
     * @param {string} attr 
     * @returns 
     */
    async getAttribute(locator: Locator, attr: string) {
        try {
            return await locator.getAttribute(attr);
        } catch (e: any) {
            throw new Error(`Failed to get attribute ${attr} | ${e.message}`);
        }
    }

    /**
     * Method to hover the element
     * @param {Locator} locator 
     */
    async hover(locator: Locator) {
        try {
            await locator.hover();
        } catch (e: any) {
            throw new Error(`Failed to hover element | ${e.message}`);
        }
    }

    /**
     * Method to get inner HTML
     * @param {Locator} locator 
     * @returns 
     */
    async getInnerHTML(locator: Locator) {
        try {
            return await locator.innerHTML();
        } catch (e: any) {
            throw new Error(`Failed to get innerHTML | ${e.message}`);
        }
    }

    /**
     * Method to get Inner Text
     * @param {Locator} locator 
     * @returns 
     */
    async getInnerText(locator: Locator) {
        try {
            return await locator.innerText();
        } catch (e: any) {
            throw new Error(`Failed to get innerText | ${e.message}`);
        }
    }

    /**
     * Method to get Input Value
     * @param {Locator} locator 
     * @returns 
     */
    async getInputValue(locator: Locator) {
        try {
            return await locator.inputValue();
        } catch (e: any) {
            throw new Error(`Failed to get input value | ${e.message}`);
        }
    }

    /**
     * Method to check the value
     * @param {Locator} locator 
     * @returns 
     */
    async isChecked(locator: Locator) {
        try {
            return await locator.isChecked();
        } catch (e: any) {
            throw new Error(`Failed to check isChecked | ${e.message}`);
        }
    }

    /**
     * Method to check isDisable
     * @param {Locator} locator
     * @returns 
     */
    async isDisabled(locator: Locator) {
        try {
            return await locator.isDisabled();
        } catch (e: any) {
            throw new Error(`Failed to check isDisabled | ${e.message}`);
        }
    }

    /**
     * Method to Edit the message
     * @param {Locator} locator 
     * @returns 
     */
    async isEditable(locator: Locator) {
        try {
            return await locator.isEditable();
        } catch (e: any) {
            throw new Error(`Failed to check isEditable | ${e.message}`);
        }
    }

    /**
     * Method to check Enable the Element
     * @param {Locator} locator 
     * @returns 
     */
    async isEnabled(locator: Locator) {
        try {
            return await locator.isEnabled();
        } catch (e: any) {
            throw new Error(`Failed to check isEnabled | ${e.message}`);
        }
    }

    /**
     * Method to check hidden details
     * @param {Locator} locator 
     * @returns 
     */
    async isHidden(locator: Locator) {
        try {
            return await locator.isHidden();
        } catch (e: any) {
            throw new Error(`Failed to check isHidden | ${e.message}`);
        }
    }

    /**
     * Method to check visible the details
     * @param {Locator} locator 
     * @returns 
     */
    async isVisible(locator: Locator) {
        try {
            return await locator.isVisible();
        } catch (e: any) {
            throw new Error(`Failed to check isVisible | ${e.message}`);
        }
    }

    /**
     * Method to press the value
     * @param {Locator} locator 
     * @param {string} key 
     */

    async press(locator: Locator, key: string) {
        try {
            await locator.press(key);
        } catch (e: any) {
            throw new Error(`Failed to press ke y ${key} | ${e.message}`);
        }
    }

    /**
     * Method to capture a screenshot of the data
     * @param {Locator} locator 
     * @param {string} path 
     */
    async takeScreenshot(locator: Locator, path: string) {
        try {
            await locator.screenshot({ path });
        } catch (e: any) {
            throw new Error(`Failed to take screenshot | ${e.message}`);
        }
    }

    /**
     * Method to scroll the page
     * @param {Locator} locator 
     */
    async scroll(locator: Locator) {
        try {
            await locator.scrollIntoViewIfNeeded();
        } catch (e: any) {
            throw new Error(`Failed to scroll element | ${e.message}`);
        }
    }

    /**
     * Method to select the Options
     * @param {Locator} locator 
     * @param {string} value 
     */
    async selectOption(locator: Locator, value: string) {
        try {
            await locator.selectOption(value);
        } catch (e: any) {
            throw new Error(`Failed to select option ${value} | ${e.message}`);
        }
    }

    /**
     *Method to set checked  
     * @param {Locator} locator 
     * @param {boolean} value 
     */
    async setChecked(locator: Locator, value: boolean) {
        try {
            await locator.setChecked(value);
        } catch (e: any) {
            throw new Error(`Failed to setChecked ${value} | ${e.message}`);
        }
    }

    /**
     * Method to tap the element
     * @param {Locator} locator 
     */
    async tap(locator: Locator) {
        try {
            await locator.tap();
        } catch (e: any) {
            throw new Error(`Failed to tap element | ${e.message}`);
        }
    }

    /**
     * Method to get text content
     * @param {Locator} locator 
     * @returns 
     */
    async getTextContent(locator: Locator) {
        try {
            return await locator.textContent();
        } catch (e: any) {
            throw new Error(`Failed to get textContent | ${e.message}`);
        }
    }

    /**
     * Method to type
     * @param {Locator} locator 
     * @param {string} value 
     */
    async type(locator: Locator, value: string) {
        try {
            await locator.type(value);
        } catch (e: any) {
            throw new Error(`Failed to type '${value}' | ${e.message}`);
        }
    }

    /**
     * Method to uncheck the element
     * @param {Locator} locator 
     */
    async uncheck(locator: Locator) {
        try {
            await locator.uncheck();
        } catch (e: any) {
            throw new Error(`Failed to uncheck element | ${e.message}`);
        }
    }

    /**
     * Method to waitFor the element
     * @param {Locator} locator 
     * @param {WaitForOptions} options 
     */
    async waitFor(locator: Locator, options: WaitForOptions = defaultWaitOptions) {
        try {
            await locator.waitFor(options);
        } catch (e: any) {
            throw new Error(`Failed to waitFor element | ${e.message}`);
        }
    }
}