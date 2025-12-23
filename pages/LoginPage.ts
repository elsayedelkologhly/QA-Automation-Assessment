import { Page, Locator } from '@playwright/test';

/**
 * Page Object Model for the Login/Signup page
 * Encapsulates all elements and actions related to user authentication
 * 
 * @class LoginPage
 * @description Follows the Page Object Model design pattern to separate
 * test logic from page structure, making tests more maintainable
 */
export class LoginPage {
  readonly page: Page;
  
  // Element locators - defined as readonly to prevent accidental modification
  readonly signupLoginLink: Locator;
  readonly loginEmailInput: Locator;
  readonly loginPasswordInput: Locator;
  readonly loginButton: Locator;
  readonly loggedInUsername: Locator;
  readonly logoutLink: Locator;

  /**
   * Constructor - Initializes all page elements
   * @param {Page} page - Playwright Page object
   */
  constructor(page: Page) {
    this.page = page;
    // Using data-qa attributes for stable element selection
    this.signupLoginLink = page.locator('a[href="/login"]');
    this.loginEmailInput = page.locator('input[data-qa="login-email"]');
    this.loginPasswordInput = page.locator('input[data-qa="login-password"]');
    this.loginButton = page.locator('button[data-qa="login-button"]');
    // Using text-based locator for logged-in username display
    this.loggedInUsername = page.locator('a:has-text("Logged in as") b');
    this.logoutLink = page.locator('a[href="/logout"]');
  }

  /**
   * Navigate to the login page
   * @returns {Promise<void>}
   */
  async navigateToLogin(): Promise<void> {
    await this.page.goto('/');
    await this.signupLoginLink.click();
  }

  /**
   * Perform login action with provided credentials
   * @param {string} email - User email address
   * @param {string} password - User password
   * @returns {Promise<void>}
   */
  async login(email: string, password: string): Promise<void> {
    await this.loginEmailInput.fill(email);
    await this.loginPasswordInput.fill(password);
    await this.loginButton.click();
  }

  /**
   * Get the username of the currently logged-in user
   * @returns {Promise<string>} The username text or empty string
   */
  async getLoggedInUsername(): Promise<string> {
    return await this.loggedInUsername.textContent() || '';
  }

  /**
   * Check if a user is currently logged in
   * @returns {Promise<boolean>} True if logged in, false otherwise
   */
  async isLoggedIn(): Promise<boolean> {
    return await this.loggedInUsername.isVisible();
  }
}
