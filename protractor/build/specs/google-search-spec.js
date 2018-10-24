"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const selenidejs_1 = require("selenidejs");
describe('google test', () => {
    it('straightforward - usual', async () => {
        await selenidejs_1.Browser.open('https://www.google.com/');
        await selenidejs_1.Browser.element('#lst-ib').setValue('Selenidejs npm');
        await selenidejs_1.Browser.element('#lst-ib').pressEnter();
        await selenidejs_1.Browser.all('.g .r').filterBy(selenidejs_1.be.visible).should(selenidejs_1.have.size(10));
        await selenidejs_1.Browser.all('.g .r').first().should(selenidejs_1.have.text('selenidejs - npm'));
        await selenidejs_1.Browser.all('.g .r').first().element('a').click();
        await selenidejs_1.Browser.should(selenidejs_1.have.url('https://www.npmjs.com/package/selenidejs'));
    });
    it('straightforward - chaining', async () => {
        await selenidejs_1.Browser.open('https://www.google.com/');
        await selenidejs_1.Browser.element('#lst-ib').setValue('Selenidejs npm').then(selenidejs_1.perform.pressEnter);
        await selenidejs_1.Browser.all('.g .r').filterBy(selenidejs_1.be.visible)
            .should(selenidejs_1.have.size(10))
            .then(selenidejs_1.take.nth(0))
            .then(element => element.should(selenidejs_1.have.text('selenidejs - npm')))
            .then(selenidejs_1.take.element('a'))
            .then(selenidejs_1.perform.click);
        await selenidejs_1.Browser.should(selenidejs_1.have.url('https://www.npmjs.com/package/selenidejs'));
    });
});
//# sourceMappingURL=google-search-spec.js.map