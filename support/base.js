const { chromium } = require('playwright');

class Base {
  async openBrowser() {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    return this.page;
  }

  async closeBrowser() {
    await this.browser.close();
  }
}

module.exports = { Base };