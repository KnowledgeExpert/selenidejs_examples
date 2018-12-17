import { AfterEach, BeforeEach, Suite, Test } from 'samael';
import { Browser, have } from 'selenidejs';
import { Builder } from 'selenium-webdriver';


Suite('my suite', () => {
    Browser.configuration.timeout = 10000;
    Browser.configuration.screenshotPath = '';

    BeforeEach(async () => {
        const webdriver = new Builder()
            .withCapabilities({browserName: 'chrome', enableVNC: true})
            .usingServer('http://localhost:4444/wd/hub')
            .build();
        Browser.configuration.webdriver = webdriver;
    });

    AfterEach(async () => {
        await Browser.quit();
    });

    Array(10).fill(null).forEach((_, index) => {
        Test(`my test #${index}`, async () => {
            await Browser.open('http://the-internet.herokuapp.com/dynamic_loading/2');
            await Browser.element('button').click();
            await Browser.element('#finish').should(have.text('Hello World!'));
        });
    });

});
