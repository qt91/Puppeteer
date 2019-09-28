/**
 * Mở browser
 * Truy cập vào webstie vitalify.asia
 * Chụp lại nội dung và lưu với tên vitalify.png
 *
 * @type {module.exports|*|module.exports}
 */
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://vitalify.asia');
    await page.screenshot({path:'vitalify.png'});
    await browser.close();
})();