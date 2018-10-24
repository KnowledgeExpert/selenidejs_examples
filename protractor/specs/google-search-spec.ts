import { be, Browser, have, perform, take } from 'selenidejs';

describe('google test', () => {
    it('straightforward - usual', async () => {
        await Browser.open('https://www.google.com/');
        await Browser.element('#lst-ib').setValue('Selenidejs npm');
        await Browser.element('#lst-ib').pressEnter();
        await Browser.all('.g .r').filterBy(be.visible).should(have.size(10));
        await Browser.all('.g .r').first().should(have.text('selenidejs - npm'));
        await Browser.all('.g .r').first().element('a').click();
        await Browser.should(have.url('https://www.npmjs.com/package/selenidejs'));
    });

    it('straightforward - chaining', async () => {
        await Browser.open('https://www.google.com/');
        await Browser.element('#lst-ib').setValue('Selenidejs npm').then(perform.pressEnter);
        await Browser.all('.g .r').filterBy(be.visible)
            .should(have.size(10))
            .then(take.nth(0))
            .then(element => element.should(have.text('selenidejs - npm')))
            .then(take.element('a'))
            .then(perform.click);
        await Browser.should(have.url('https://www.npmjs.com/package/selenidejs'));
    });

});
