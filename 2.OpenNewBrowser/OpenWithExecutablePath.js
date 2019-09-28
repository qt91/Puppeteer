/**
 * Mở browser
 * Tùy chỉnh ứng dụng Browser sẽ được mở lên => trỏ tới thư mục chứa app
 * Tùy chỉnh thư mục dữ liệu sẽ được lưu lại thành profile mới
 * Truy cập vào webstie chatwork.com
 */
const puppeteer = require('puppeteer');
const userName = 'MacOS';
const executablePath = `/Applications/Google Chrome.app/Contents/${userName}/Google Chrome`;//Chrome in MacOS
const userDataDir = 'Data/chatwork';
(async () => {
    const browser = await puppeteer.launch({
        headless      :false,
        executablePath:executablePath,
        userDataDir   :userDataDir,
    });
    const page = await browser.newPage();
    await page.goto('https://chatwork.com');
})();