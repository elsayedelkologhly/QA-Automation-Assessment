/**
 * Test Data Generator Module
 * 
 * Provides utilities for generating unique test data to ensure test isolation
 * and prevent data conflicts during parallel test execution.
 * 
 * @module testData
 */

/**
 * Generate a unique email address using timestamp
 * 
 * This ensures each test run uses a unique email, preventing conflicts
 * when tests run in parallel or when previous test data wasn't cleaned up.
 * 
 * @returns {string} Unique email address in format: testuser{timestamp}@automation.test
 * @example
 * const email = generateUniqueEmail();
 * // Returns: "testuser1703344567890@automation.test"
 */
export const generateUniqueEmail = (): string => {
  const timestamp = Date.now();
  return `testuser${timestamp}@automation.test`;
};

/**
 * Reusable test credentials
 * 
 * Contains standard test data that can be used across multiple tests.
 * Password meets common security requirements (uppercase, lowercase, number, special char).
 * 
 * @constant
 * @type {Object}
 */
export const testCredentials = {
  /** Test user password - meets common security requirements */
  password: 'Test@1234',
  /** Full name of test user */
  name: 'Test User',
  /** First name for form fields */
  firstName: 'Test',
  /** Last name for form fields */
  lastName: 'User',
  /** Company name for address forms */
  company: 'Test Company',
  /** Street address for forms */
  address: '123 Test St',
  /** Country for address forms */
  country: 'United States',
  /** State for address forms */
  state: 'California',
  /** City for address forms */
  city: 'Los Angeles',
  /** ZIP code for address forms */
  zipcode: '90001',
  /** Mobile phone number */
  mobile: '1234567890'
};
