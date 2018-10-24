"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const selenidejs_1 = require("selenidejs");
exports.config = {
    SELENIUM_PROMISE_MANAGER: false,
    seleniumAddress: 'http://217.73.84.220:4444/wd/hub',
    framework: 'jasmine2',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 2000000,
        isVerbose: true
    },
    specs: ['./specs/**/*-spec.js'],
    onPrepare: async function () {
        selenidejs_1.Browser.setDriver({ webdriver: protractor_1.browser.driver });
    }
};
//# sourceMappingURL=protractor.conf.js.map