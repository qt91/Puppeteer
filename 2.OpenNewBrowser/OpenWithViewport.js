/**
 * Mở browser với thuộc tính headless = false
 * Tùy chỉnh kích thước trình duyệt 1920x1080
 * Truy cập vào webstie vitalify.asia
 */
const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({
        headless:false,
        args    :[
            '--window-size=1920,1080',
        ]
    });
    const page = await browser.newPage();
    await page.setViewport({
        width :1920,
        height:1080
    })
    await page.goto('https://vitalify.asia');
})();