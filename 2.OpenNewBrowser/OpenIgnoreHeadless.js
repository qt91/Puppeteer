/**
 * Mở browser với thuộc tính headless = false
 * Truy cập vào webstie vitalify.asia
 */
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto('https://vitalify.asia');
})();