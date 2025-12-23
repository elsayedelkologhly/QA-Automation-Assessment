import { test, expect } from '@playwright/test';
import { generateUniqueEmail, testCredentials } from '../helpers/testData';

test.describe('Login API Tests', () => {
  const API_BASE_URL = 'https://www.automationexercise.com';
  let testEmail: string;
  const testPassword = testCredentials.password;

  // Helper function to create a user via API
  async function createUserViaAPI(request: any, email: string, password: string) {
    const response = await request.post(`${API_BASE_URL}/api/createAccount`, {
      form: {
        name: testCredentials.name,
        email: email,
        password: password,
        title: 'Mr',
        birth_date: '1',
        birth_month: '1',
        birth_year: '1990',
        firstname: testCredentials.firstName,
        lastname: testCredentials.lastName,
        company: testCredentials.company,
        address1: testCredentials.address,
        address2: '',
        country: testCredentials.country,
        zipcode: testCredentials.zipcode,
        state: testCredentials.state,
        city: testCredentials.city,
        mobile_number: testCredentials.mobile
      }
    });
    return response;
  }

  // Helper function to delete a user via API
  async function deleteUserViaAPI(request: any, email: string, password: string) {
    try {
      await request.delete(`${API_BASE_URL}/api/deleteAccount`, {
        form: {
          email: email,
          password: password
        }
      });
    } catch (error) {
      console.log('User deletion skipped or failed');
    }
  }

  test('POST /verifyLogin - should successfully login with valid credentials', async ({ request }) => {
    // Create a unique test user
    testEmail = generateUniqueEmail();
    await createUserViaAPI(request, testEmail, testPassword);

    // Make API request with valid credentials
    const response = await request.post(`${API_BASE_URL}/api/verifyLogin`, {
      form: {
        email: testEmail,
        password: testPassword
      }
    });

    // Assert status code
    expect(response.status()).toBe(200);

    // Parse response body
    const responseBody = await response.json();

    // Assert response message
    expect(responseBody).toHaveProperty('responseCode');
    expect(responseBody.responseCode).toBe(200);
    expect(responseBody).toHaveProperty('message');
    expect(responseBody.message).toContain('User exists!');

    // Cleanup: Delete test user
    await deleteUserViaAPI(request, testEmail, testPassword);
  });

  test('POST /verifyLogin - should return error with invalid credentials', async ({ request }) => {
    // Make API request with invalid credentials
    const response = await request.post(`${API_BASE_URL}/api/verifyLogin`, {
      form: {
        email: 'invalid@example.com',
        password: 'wrongpassword'
      }
    });

    // Assert status code
    expect(response.status()).toBe(200);

    // Parse response body
    const responseBody = await response.json();

    // Assert error response
    expect(responseBody).toHaveProperty('responseCode');
    expect(responseBody.responseCode).toBe(404);
    expect(responseBody).toHaveProperty('message');
    expect(responseBody.message).toContain('User not found!');
  });

  test('POST /verifyLogin - should return error with missing email', async ({ request }) => {
    // Make API request without email
    const response = await request.post(`${API_BASE_URL}/api/verifyLogin`, {
      form: {
        password: 'password123'
      }
    });

    // Assert status code and error response
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody.responseCode).toBe(400);
    expect(responseBody.message).toContain('Bad request');
  });

  test('POST /verifyLogin - should return error with missing password', async ({ request }) => {
    // Make API request without password
    const response = await request.post(`${API_BASE_URL}/api/verifyLogin`, {
      form: {
        email: 'testuser@example.com'
      }
    });

    // Assert status code and error response
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody.responseCode).toBe(400);
    expect(responseBody.message).toContain('Bad request');
  });
});
