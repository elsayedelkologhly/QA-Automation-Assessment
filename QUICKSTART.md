# Quick Start Guide

## 🚀 Getting Started in 5 Minutes

This guide will help you set up and run the QA Automation Assessment tests quickly.

## Prerequisites Check

Before starting, verify you have:

```powershell
# Check Node.js version (should be 18+)
node --version

# Check npm version
npm --version
```

If Node.js is not installed, download from: https://nodejs.org/

## Installation Steps

### Step 1: Navigate to Project Directory

```powershell
cd C:\Users\skoroghly\Downloads\QA_Automation_Assessment
```

### Step 2: Install Dependencies

```powershell
npm install
```

This will install:
- Playwright (Web & API testing)
- TypeScript
- Mocha & Chai (Mobile testing)
- WebdriverIO (Mobile driver)
- Appium (Mobile automation)

**Expected output:** `added 640 packages` (takes ~1 minute)

### Step 3: Install Playwright Browsers

```powershell
npx playwright install chromium
```

This downloads the Chromium browser for testing (~100MB).

## Running Tests

### Run Web Tests

```powershell
npm run test:web
```

**What it does:**
- Tests user login functionality on automationexercise.com
- Creates a unique test user
- Performs login verification
- Cleans up test data

**Expected output:**
```
✓ should successfully login with valid credentials (19.6s)
✓ should display error message with invalid credentials (7.4s)
2 passed (29.9s)
```

### Run API Tests

```powershell
npm run test:api
```

**What it does:**
- Tests the /api/verifyLogin endpoint
- Tests positive and negative scenarios
- Validates response codes and messages

**Expected output:**
```
✓ POST /verifyLogin - should successfully login with valid credentials (1.9s)
✓ POST /verifyLogin - should return error with invalid credentials (234ms)
✓ POST /verifyLogin - should return error with missing email (223ms)
✓ POST /verifyLogin - should return error with missing password (228ms)
4 passed (4.8s)
```

### Run All Tests

```powershell
npm run test:all
```

Runs both web and API tests sequentially.

## View Test Reports

After running tests, open the HTML report:

```powershell
npx playwright show-report
```

This opens an interactive report in your browser showing:
- Test results
- Screenshots (for failures)
- Videos (for failures)
- Execution timeline
- Detailed logs

## Project Structure Overview

```
QA_Automation_Assessment/
├── pages/           → Page Object Models
├── tests/           → Web UI tests
├── api/             → API tests
├── helpers/         → Test utilities
├── mobile/          → Mobile tests (requires Appium)
└── test-results/    → Test artifacts (screenshots, videos)
```

## Common Commands

| Command | Description |
|---------|-------------|
| `npm run test:web` | Run web UI tests |
| `npm run test:api` | Run API tests |
| `npm run test:all` | Run web + API tests |
| `npx playwright show-report` | View test report |
| `npx playwright test --ui` | Run tests in UI mode (interactive) |
| `npx playwright test --debug` | Run tests in debug mode |

## Troubleshooting

### ❌ "Cannot find module '@playwright/test'"

**Solution:**
```powershell
npm install
```

### ❌ "browserType.launch: Executable doesn't exist"

**Solution:**
```powershell
npx playwright install chromium
```

### ❌ Tests fail with timeout errors

**Solution:**
- Check internet connection
- Verify https://www.automationexercise.com is accessible
- Try running tests again (website may be temporarily slow)

### ❌ "Port is already allocated"

**Solution:**
- Another test run may still be active
- Close any open browser instances
- Restart your terminal

## What's Next?

### Explore the Code

1. **Page Objects:** Check `pages/LoginPage.ts` to see the Page Object Model
2. **Test Files:** Review `tests/login.spec.ts` to understand test structure
3. **API Tests:** Explore `api/login-api.spec.ts` for API testing examples

### Run Tests in Different Modes

**Interactive UI Mode:**
```powershell
npx playwright test --ui
```

**Debug Mode (step through tests):**
```powershell
npx playwright test --debug
```

**Headed Mode (see browser):**
```powershell
npx playwright test --headed
```

**Specific Test File:**
```powershell
npx playwright test tests/login.spec.ts
```

**Specific Test:**
```powershell
npx playwright test -g "should successfully login"
```

### View Documentation

- **README.md** - Complete setup and usage guide
- **ARCHITECTURE.md** - Technical architecture details
- **PART1_ANSWERS.md** - Theoretical Q&A about testing
- **TEST_RESULTS.md** - Latest test execution summary

## Mobile Testing (Optional)

Mobile tests require additional setup:

### Prerequisites
1. Android Studio with Android SDK
2. Android Emulator or physical device
3. Appium server

### Setup Steps

```powershell
# Install Appium globally
npm install -g appium

# Install UiAutomator2 driver
appium driver install uiautomator2

# Start Android emulator (from Android Studio)
# Or connect physical device via USB

# Start Appium server
appium

# In a new terminal, run mobile tests
npm run test:mobile
```

See `mobile/README.md` for detailed mobile testing setup.

## Tips for Success

### ✅ Best Practices

1. **Run tests one suite at a time** while learning the framework
2. **Check test reports** after each run to understand results
3. **Review the code** to understand implementation patterns
4. **Modify tests** to experiment and learn

### 🎯 Understanding Test Results

**Green/✓** = Test passed
**Red/✘** = Test failed (check screenshot/video in report)
**Yellow/⚠** = Test skipped or flaky

### 📊 Test Artifacts

After each test run, find artifacts in:
- `test-results/` - Screenshots, videos, traces
- `playwright-report/` - HTML report

## Quick Reference Card

```
╔══════════════════════════════════════════════════════════╗
║              QA AUTOMATION QUICK REFERENCE               ║
╠══════════════════════════════════════════════════════════╣
║ Install Dependencies    │ npm install                    ║
║ Install Browsers        │ npx playwright install chromium║
║ Run Web Tests          │ npm run test:web               ║
║ Run API Tests          │ npm run test:api               ║
║ Run All Tests          │ npm run test:all               ║
║ View Report            │ npx playwright show-report     ║
║ Debug Tests            │ npx playwright test --debug    ║
║ UI Mode               │ npx playwright test --ui       ║
╚══════════════════════════════════════════════════════════╝
```

## Getting Help

### Documentation Files
- **README.md** - Main documentation
- **ARCHITECTURE.md** - Technical details
- **PART1_ANSWERS.md** - Testing concepts

### Online Resources
- Playwright Docs: https://playwright.dev
- Automation Exercise Site: https://automationexercise.com/api_list

### Test Results
- HTML Report: `npx playwright show-report`
- Test Artifacts: `test-results/` folder

## Success Checklist

- [ ] Node.js and npm installed
- [ ] Dependencies installed (`npm install`)
- [ ] Playwright browsers installed
- [ ] Web tests pass (`npm run test:web`)
- [ ] API tests pass (`npm run test:api`)
- [ ] Test report viewed
- [ ] Code reviewed and understood

---

**Ready to start?** Run your first test:

```powershell
npm run test:web
```

Then view the report:

```powershell
npx playwright show-report
```

Happy Testing! 🎉
