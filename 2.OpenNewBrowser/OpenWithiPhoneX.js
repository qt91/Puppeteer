/**
 * Mở browser
 * Khai báo trình duyệt của thiết bị Iphone
 * Truy cập vào webstie vitalify.asia
 * Chụp lại nội dung và lưu với tên vfaIphoneX.png
 *
 * @type {module.exports|*|module.exports}
 */
const puppeteer = require('puppeteer');
const iPhone = puppeteer.devices['iPhone X'];//iPhone X landscape
//https://github.com/GoogleChrome/puppeteer/blob/master/lib/DeviceDescriptors.js

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.emulate(iPhone);
    await page.goto('https://vitalify.asia');
    await page.screenshot({path:'vfaIphoneX.png'});
    await browser.close();
})();