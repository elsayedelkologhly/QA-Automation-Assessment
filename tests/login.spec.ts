import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { UserHelper } from '../helpers/userHelper';
import { generateUniqueEmail, testCredentials } from '../helpers/testData';

test.describe('User Login Flow', () => {
  let loginPage: LoginPage;
  let testEmail: string;
  const testPassword = testCredentials.password;
  const testName = testCredentials.name;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
  });

  test('should successfully login with valid credentials', async ({ page }) => {
    // Generate unique email and register a new user
    testEmail = generateUniqueEmail();
    await UserHelper.registerUser(page, testEmail, testPassword, testName);
    
    // Logout first
    await loginPage.logoutLink.click();
    await page.waitForURL(/.*login/);
    
    // Verify we are on the login page
    await expect(page).toHaveURL(/.*login/);
    await expect(page.locator('h2:has-text("Login to your account")')).toBeVisible();

    // Enter valid login credentials
    await loginPage.login(testEmail, testPassword);

    // Assert successful login by confirming the username appears
    await expect(loginPage.loggedInUsername).toBeVisible({ timeout: 10000 });
    
    const username = await loginPage.getLoggedInUsername();
    expect(username).toBeTruthy();
    expect(username.length).toBeGreaterThan(0);

    // Additional assertion: Verify logout link is visible
    await expect(loginPage.logoutLink).toBeVisible();
    
    // Cleanup: Delete the test user
    await UserHelper.deleteUser(page);
  });

  test('should display error message with invalid credentials', async ({ page }) => {
    await loginPage.navigateToLogin();
    
    // Attempt login with invalid credentials
    await loginPage.login('invalid@example.com', 'wrongpassword');

    // Assert error message is displayed
    const errorMessage = page.locator('p[style*="color: red"]');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Your email or password is incorrect!');
  });
});
