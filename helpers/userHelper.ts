import { Page } from '@playwright/test';

/**
 * User Helper Class
 * 
 * Provides utility methods for user lifecycle management including registration
 * and deletion. Encapsulates complex user workflows to keep tests clean and focused.
 * 
 * @class UserHelper
 * @description Static utility class for user management operations
 */
export class UserHelper {
  /**
   * Register a new user via the UI
   * 
   * This method handles the complete user registration flow including:
   * - Navigating to signup page
   * - Filling signup form
   * - Completing account details form
   * - Waiting for success confirmation
   * 
   * @static
   * @param {Page} page - Playwright Page object
   * @param {string} email - Unique email address for the new user
   * @param {string} password - Password for the new user account
   * @param {string} name - Display name for the user
   * @returns {Promise<void>}
   * @throws {Error} If registration fails or times out
   * 
   * @example
   * await UserHelper.registerUser(page, 'test@example.com', 'Pass123!', 'Test User');
   */
  static async registerUser(page: Page, email: string, password: string, name: string): Promise<void> {
    // Navigate to signup/login page
    await page.goto('/login');
    
    // Step 1: Fill initial signup form
    await page.locator('input[data-qa="signup-name"]').fill(name);
    await page.locator('input[data-qa="signup-email"]').fill(email);
    await page.locator('button[data-qa="signup-button"]').click();
    
    // Wait for account information page to load
    await page.waitForURL(/.*signup/, { timeout: 10000 });
    
    // Step 2: Fill account details
    await page.locator('#id_gender1').check(); // Select "Mr." title
    await page.locator('#password').fill(password);
    
    // Step 3: Fill address information
    await page.locator('#first_name').fill('Test');
    await page.locator('#last_name').fill('User');
    await page.locator('#company').fill('Test Company');
    await page.locator('#address1').fill('123 Test St');
    await page.locator('#country').selectOption('United States');
    await page.locator('#state').fill('California');
    await page.locator('#city').fill('Los Angeles');
    await page.locator('#zipcode').fill('90001');
    await page.locator('#mobile_number').fill('1234567890');
    
    // Step 4: Submit form
    await page.locator('button[data-qa="create-account"]').click();
    
    // Step 5: Wait for success message
    await page.waitForSelector('h2:has-text("Account Created!")', { timeout: 10000 });
    
    // Step 6: Continue to account
    await page.locator('a[data-qa="continue-button"]').click();
  }

  /**
   * Delete a user account via the UI
   * 
   * Attempts to delete the currently logged-in user. Includes error handling
   * to gracefully handle cases where deletion fails or user is already deleted.
   * 
   * @static
   * @param {Page} page - Playwright Page object
   * @returns {Promise<void>}
   * 
   * @example
   * await UserHelper.deleteUser(page);
   */
  static async deleteUser(page: Page): Promise<void> {
    try {
      // Navigate to delete account page
      await page.locator('a[href="/delete_account"]').click();
      
      // Wait for deletion confirmation
      await page.waitForSelector('h2:has-text("Account Deleted!")', { timeout: 5000 });
      
      // Continue after deletion
      await page.locator('a[data-qa="continue-button"]').click();
    } catch (error) {
      // Gracefully handle deletion failures (e.g., user already deleted, network issues)
      console.log('User deletion skipped or failed');
    }
  }
}
