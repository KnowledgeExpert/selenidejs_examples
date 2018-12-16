"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const samael_1 = require("samael");
const selenidejs_1 = require("selenidejs");
const selenium_webdriver_1 = require("selenium-webdriver");
samael_1.Suite('my suite', () => {
    samael_1.BeforeEach(async () => {
        const webdriver = new selenium_webdriver_1.Builder()
            .withCapabilities({ browserName: 'chrome' })
            .usingServer('http://ip-5236.sunline.net.ua:4444/wd/hub')
            .build();
        selenidejs_1.Browser.configuration.webdriver = webdriver;
    });
    samael_1.AfterEach(async () => {
        await selenidejs_1.Browser.quit();
    });
    Array(20).fill(null).forEach((_, index) => {
        samael_1.Test(`my test #${index}`, async () => {
            await selenidejs_1.Browser.open('http://the-internet.herokuapp.com/challenging_dom');
            console.log(await selenidejs_1.Browser.title(), 'from test #', index);
        });
    });
});
//# sourceMappingURL=spec.js.map