# Mobile Automation Setup Guide

## Prerequisites
- Node.js installed
- Android Studio with Android SDK
- Appium Server 2.0+
- Android Emulator or Physical Device

## Installation Steps

1. Install Appium globally:
```bash
npm install -g appium
```

2. Install UiAutomator2 driver:
```bash
appium driver install uiautomator2
```

3. Start Appium Server:
```bash
appium
```

4. Set up Android Emulator:
   - Open Android Studio
   - Create/Start an Android Virtual Device (API level 29+)

5. Verify device is connected:
```bash
adb devices
```

## Running Mobile Tests

From the project root:
```bash
npm run test:mobile
```

## Configuration Notes
- App path: `MobileApp/WikipediaSample.apk`
- Appium server: `http://localhost:4723`
- Platform: Android
- Automation: UiAutomator2

## Troubleshooting
- Ensure Appium server is running before executing tests
- Verify emulator/device is online with `adb devices`
- Check Android SDK path is set in environment variables
