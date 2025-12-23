class WikipediaHomePage {
  constructor(driver) {
    this.driver = driver;
  }

  // Locators
  get searchButton() {
    return this.driver.$('~Search Wikipedia');
  }

  get searchInput() {
    return this.driver.$('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")');
  }

  get firstSearchResult() {
    return this.driver.$('android=new UiSelector().resourceId("org.wikipedia.alpha:id/page_list_item_title").instance(0)');
  }

  get articleTitle() {
    return this.driver.$('android=new UiSelector().resourceId("org.wikipedia.alpha:id/view_page_title_text")');
  }

  // Actions
  async tapSearchButton() {
    await this.searchButton.waitForDisplayed({ timeout: 10000 });
    await this.searchButton.click();
  }

  async enterSearchQuery(query) {
    await this.searchInput.waitForDisplayed({ timeout: 10000 });
    await this.searchInput.setValue(query);
  }

  async tapFirstResult() {
    await this.firstSearchResult.waitForDisplayed({ timeout: 10000 });
    await this.firstSearchResult.click();
  }

  async getArticleTitle() {
    await this.articleTitle.waitForDisplayed({ timeout: 10000 });
    return await this.articleTitle.getText();
  }

  async isArticleTitleDisplayed() {
    return await this.articleTitle.isDisplayed();
  }
}

module.exports = WikipediaHomePage;
