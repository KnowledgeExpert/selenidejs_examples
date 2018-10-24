import { browser } from 'protractor';
import { Browser } from 'selenidejs';

export const config = {
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
        Browser.setDriver({webdriver: browser.driver as any});
    }
};
