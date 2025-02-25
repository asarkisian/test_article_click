import { expect } from '@wdio/globals'

describe('Dummy Application', () => {
    it('Load the page and click on the first article', async () => {
        await browser.url('https://tmz.com/hip-hop/')
        const elements = await browser.$$('article[id^="blogroll-"]>header[class*="header"]>a');
        await elements[0].click();

        // validate if it errors out here...
    })
})
