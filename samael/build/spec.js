"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const samael_1 = require("samael");
const selenidejs_1 = require("selenidejs");
const selenium_webdriver_1 = require("selenium-webdriver");
samael_1.Suite('my suite', () => {
    selenidejs_1.Browser.configuration.timeout = 10000;
    selenidejs_1.Browser.configuration.screenshotPath = '';
    samael_1.BeforeEach(async () => {
        const webdriver = new selenium_webdriver_1.Builder()
            .withCapabilities({ browserName: 'chrome', enableVNC: true })
            .usingServer('http://localhost:4444/wd/hub')
            .build();
        selenidejs_1.Browser.configuration.webdriver = webdriver;
    });
    samael_1.AfterEach(async () => {
        await selenidejs_1.Browser.quit();
    });
    Array(10).fill(null).forEach((_, index) => {
        samael_1.Test(`my test #${index}`, async () => {
            await selenidejs_1.Browser.open('http://the-internet.herokuapp.com/dynamic_loading/2');
            await selenidejs_1.Browser.element('button').click();
            await selenidejs_1.Browser.element('#finish').should(selenidejs_1.have.text('Hello World!'));
        });
    });
});
//# sourceMappingURL=spec.js.map