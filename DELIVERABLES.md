# Assessment Deliverables Checklist


## ✅ Part 1: Written Questions (COMPLETED)

**Deliverable:** PDF or DOCX containing answers to theoretical questions

**File:** `PART1_ANSWERS.pdf`

**Content:**
- ✅ Question 1: Advantages of automating tests using Page Object Model (POM)
- ✅ Question 2: When to avoid automating a test case
- ✅ Question 3: Causes of flaky tests and how to reduce flakiness
- ✅ Question 4: Difference between UI tests and API tests, and when each is suitable


## ✅ Part 2: Web Automation (COMPLETED)

**Technology:** Playwright + TypeScript

**Website:** https://www.automationexercise.com

**Deliverables:**

### Required Files

| File | Status | Description |
|------|--------|-------------|
| `tests/login.spec.ts` | ✅ | Web automation test file |
| `pages/LoginPage.ts` | ✅ | Page Object Model implementation |
| `playwright.config.ts` | ✅ | Playwright configuration |
| `README.md` | ✅ | Installation and execution guide |

### Test Implementation

- ✅ Navigate to the website
- ✅ Click "Signup / Login"
- ✅ Enter valid login credentials (dynamically created)
- ✅ Assert successful login by confirming username appears
- ✅ Basic Page Object Model implementation
- ✅ At least one assertion (multiple assertions implemented)
- ✅ Fixtures (Playwright default fixtures used)
- ✅ Screenshot on failure (configured in playwright.config.ts)

### Additional Features

- ✅ Negative test case (invalid credentials)
- ✅ Dynamic user registration (no hardcoded credentials)
- ✅ Automatic test data cleanup
- ✅ Comprehensive documentation

**Test Results:** 2/2 tests passing (~30 seconds)

---

## ✅ Part 3: API Automation (COMPLETED)

**Technology:** Playwright API Testing

**API Documentation:** https://www.automationexercise.com/api_list

**Deliverables:**

| File | Status | Description |
|------|--------|-------------|
| `api/login-api.spec.ts` | ✅ | API test implementation |

### Test Implementation

**Required:**
- ✅ Login API test with valid credentials
- ✅ Assertions on status code
- ✅ Assertions on response message

**Optional (Implemented):**
- ✅ Negative test with invalid credentials
- ✅ Negative test with missing email parameter
- ✅ Negative test with missing password parameter

### Additional Features

- ✅ Dynamic user creation via API
- ✅ Test data cleanup
- ✅ Comprehensive error handling

**Test Results:** 4/4 tests passing (~5 seconds)

---

## ✅ Part 4: Mobile Automation (COMPLETED)

**Technology:** Appium + WebdriverIO + Mocha

**Sample App:** `MobileApp/WikipediaSample.apk`

**Deliverables:**

| Path | Status | Description |
|------|--------|-------------|
| `mobile/pages/WikipediaHomePage.js` | ✅ | Mobile Page Object |
| `mobile/tests/wikipedia.spec.js` | ✅ | Mobile test implementation |
| `mobile/README.md` | ✅ | Mobile setup instructions |

### Test Implementation

- ✅ Launch app
- ✅ Tap an element (search button)
- ✅ Assert page transition
- ✅ One Page Object implementation
- ✅ One test file
- ✅ Mocha framework used
- ✅ Appium integration

**Status:** Implementation complete (requires Appium server to run)


## 📈 Test Execution Summary

| Test Suite | Tests | Pass | Fail | Duration |
|------------|-------|------|------|----------|
| Web Tests | 2 | 2 | 0 | ~30s |
| API Tests | 4 | 4 | 0 | ~5s |
| **Total** | **6** | **6** | **0** | **~35s** |

**Success Rate:** 100% ✅
