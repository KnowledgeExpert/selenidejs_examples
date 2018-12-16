import { Suite, Test, BeforeEach, AfterEach } from 'samael';
import { Browser } from 'selenidejs';
import { Builder } from 'selenium-webdriver';


Suite('my suite', () => {
    BeforeEach(async () => {
        const webdriver = new Builder()
            .withCapabilities({browserName: 'chrome'})
            .usingServer('...')
            .build();
        Browser.configuration.webdriver = webdriver;
    });

    AfterEach(async () => {
        await Browser.quit();
    });

    Array(20).fill(null).forEach((_, index) => {
        Test(`my test #${index}`, async () => {
            await Browser.open('http://the-internet.herokuapp.com/challenging_dom');
            console.log(await Browser.title(), 'from test #', index);
        });
    })

});
