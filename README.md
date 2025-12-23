# QA Automation Assessment

This repository contains the complete implementation of the QA Automation Assessment, covering web automation, API testing, and mobile automation.

## 📚 Documentation

- **[QUICKSTART.md](QUICKSTART.md)** - Get up and running in 5 minutes ⚡
- **[mobile/README.md](mobile/README.md)** - Mobile testing setup guide 📱

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install chromium

# Run tests
npm run test:all

# View report
npx playwright show-report
```

For detailed setup instructions, see **[QUICKSTART.md](QUICKSTART.md)**.

## Project Structure

```
QA_Automation_Assessment/
├── pages/                    # Page Object Models for Web Tests
│   └── LoginPage.ts
├── tests/                    # Web UI Tests (Playwright + TypeScript)
│   └── login.spec.ts
├── api/                      # API Tests (Playwright API Testing)
│   └── login-api.spec.ts
├── helpers/                  # Test Helpers and Utilities
│   ├── testData.ts          # Test data generation
│   └── userHelper.ts        # User registration/deletion helpers
├── mobile/                   # Mobile Automation Tests
│   ├── pages/
│   │   └── WikipediaHomePage.js
│   ├── tests/
│   │   └── wikipedia.spec.js
│   └── README.md
├── MobileApp/               # Sample Mobile Apps
│   ├── WikipediaSample.apk
│   └── LocalSample.ipa
├── playwright.config.ts     # Playwright Configuration
├── tsconfig.json           # TypeScript Configuration
├── package.json            # Dependencies and Scripts
├── README.md              # This file
└── PART1_ANSWERS.md       # Written answers to Part 1 questions
```

## Prerequisites

- **Node.js** (v18 or higher)
- **npm** (comes with Node.js)
- **Android Studio** (for mobile tests)
- **Appium 2.0+** (for mobile tests)
- **Android Emulator or Physical Device** (for mobile tests)

## Installation

1. **Clone or download the repository**

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install Playwright browsers:**
   ```bash
   npm run playwright:install
   ```

4. **For Mobile Tests - Install Appium:**
   ```bash
   npm install -g appium
   appium driver install uiautomator2
   ```

## Running Tests

### Web Automation Tests (Part 2)
Tests the login flow on https://www.automationexercise.com

```bash
npm run test:web
```

**Features:**
- Page Object Model implementation
- Valid and invalid login scenarios
- Screenshot capture on failure
- Assertion on username visibility after login

### API Automation Tests (Part 3)
Tests the `/api/verifyLogin` endpoint

```bash
npm run test:api
```

**Features:**
- Positive test case with valid credentials
- Negative test cases (invalid credentials, missing parameters)
- Status code and response message assertions

### Mobile Automation Tests (Part 4)
Tests Wikipedia sample Android app

**Setup:**
1. Start Android Emulator (Android Studio)
2. Start Appium server:
   ```bash
   appium
   ```
3. Run tests:
   ```bash
   npm run test:mobile
   ```

**Features:**
- Page Object Model for mobile
- Launch app, search functionality, and page transition
- Uses Appium + WebdriverIO + Mocha

### Run All Tests
```bash
npm run test:all
```
*Note: This runs web and API tests only. Mobile tests require separate setup.*

## Test Reports

- **Playwright Tests:** After running, view the HTML report by opening `playwright-report/index.html`
- **Mocha Tests:** Results display in the terminal

## Configuration Details

### Playwright Configuration
- **Base URL:** https://www.automationexercise.com
- **Browser:** Chromium
- **Screenshot:** Captured on failure
- **Video:** Retained on failure
- **Timeout:** 30 seconds per test

### Mobile Configuration
- **Platform:** Android
- **Automation:** UiAutomator2
- **Appium Server:** http://localhost:4723
- **App:** `MobileApp/WikipediaSample.apk`

## Key Implementation Highlights

### Page Object Model (POM)
All tests follow the Page Object Model pattern:
- **Web:** `pages/LoginPage.ts` - Encapsulates login page elements and actions
- **Mobile:** `mobile/pages/WikipediaHomePage.js` - Encapsulates Wikipedia app elements

### Test Data Management
- **Helper Functions:** `helpers/testData.ts` - Generates unique test credentials
- **User Helper:** `helpers/userHelper.ts` - Handles user registration and cleanup
- **Self-Contained Tests:** Each test creates and cleans up its own test data, ensuring no dependencies between test runs

### Fixtures
- Uses Playwright's built-in fixtures (`{ page }`, `{ request }`)
- Clean setup and teardown in `beforeEach` and `after` hooks

### Assertions
- Web: Username visibility, error messages
- API: Response codes (200, 404, 400), response messages
- Mobile: Page transition, element visibility

## Test Strategy

### Dynamic Test Data
The tests use a self-registration approach:
1. **Web Tests:** Each test registers a new user via UI, performs login test, then deletes the user
2. **API Tests:** Each test creates a user via API, tests login endpoint, then deletes the user
3. **Benefits:** No hardcoded credentials, tests are independent and can run in parallel, no test data conflicts

This approach ensures tests are:
- **Reliable:** No dependency on pre-existing test accounts
- **Isolated:** Each test run uses fresh data
- **Maintainable:** No need to manage shared test credentials

## Assumptions & Notes

1. **Test Credentials:**
   - Tests use dynamic user registration - each test creates and deletes its own test user
   - No pre-existing credentials are required
   - Unique email addresses are generated using timestamps to avoid conflicts

2. **Mobile Testing:**
   - Uses `WikipediaSample.apk` (Android app included in MobileApp/)
   - Requires Android Emulator or physical device
   - Appium server must be running on port 4723

3. **CI/CD Considerations:**
   - Tests configured with retry mechanism for CI environments
   - Screenshot and video capture enabled for debugging failures
   - Self-contained tests with no external dependencies

## Troubleshooting

### Web/API Tests
- Ensure stable internet connection
- If tests fail, check https://www.automationexercise.com is accessible
- Tests automatically create and cleanup their own test users

### Mobile Tests
- Verify Android device/emulator is running: `adb devices`
- Ensure Appium server is started: `appium`
- Check app path in `mobile/tests/wikipedia.spec.js`
- Verify UiAutomator2 driver is installed: `appium driver list`

## Technologies Used

- **Playwright** - Web and API automation
- **TypeScript** - Type-safe test development
- **Appium** - Mobile automation framework
- **WebdriverIO** - Mobile test driver
- **Mocha** - Mobile test framework
- **Chai** - Assertion library for mobile tests

## Author

QA Automation Assessment Submission - December 2025

## License

ISC
