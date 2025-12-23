const { remote } = require('webdriverio');
const { expect } = require('chai');
const WikipediaHomePage = require('../pages/WikipediaHomePage');

describe('Wikipedia Mobile App Tests', function() {
  let driver;
  let homePage;

  before(async function() {
    // Configure Appium capabilities for Android
    const capabilities = {
      platformName: 'Android',
      'appium:platformVersion': '11.0',
      'appium:deviceName': 'Android Emulator',
      'appium:app': require('path').resolve(__dirname, '../../MobileApp/WikipediaSample.apk'),
      'appium:automationName': 'UiAutomator2',
      'appium:noReset': true,
      'appium:fullReset': false
    };

    driver = await remote({
      protocol: 'http',
      hostname: 'localhost',
      port: 4723,
      path: '/',
      capabilities
    });

    homePage = new WikipediaHomePage(driver);
  });

  after(async function() {
    if (driver) {
      await driver.deleteSession();
    }
  });

  it('should launch app, search for an article, and verify page transition', async function() {
    // Launch app (already launched in before hook)
    console.log('App launched successfully');

    // Tap search button
    await homePage.tapSearchButton();
    console.log('Search button tapped');

    // Enter search query
    await homePage.enterSearchQuery('Appium');
    console.log('Search query entered');

    // Wait a moment for search results
    await driver.pause(2000);

    // Tap first search result
    await homePage.tapFirstResult();
    console.log('First search result tapped');

    // Assert page transition - verify article page is displayed
    const isArticleDisplayed = await homePage.isArticleTitleDisplayed();
    expect(isArticleDisplayed).to.be.true;

    const articleTitle = await homePage.getArticleTitle();
    console.log('Article title:', articleTitle);
    expect(articleTitle).to.not.be.empty;
    expect(articleTitle.toLowerCase()).to.include('appium');
  });
});
