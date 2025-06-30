# Playwright Page Object Model – E-commerce Test Suite

This repository demonstrates an end-to-end E-commerce web application test framework built using [Playwright](https://playwright.dev/) with the **Page Object Model** design pattern.

> ⚠️ **Note**: This project is still under active development. Contributions, suggestions, and improvements are welcome.

## 📌 Overview

- **Framework**: [Playwright](https://playwright.dev/)
- **Design Pattern**: Page Object Model (POM)
- **Test Type**: End-to-End Testing
- **Data Management**: External JSON file for test data
- **Language**: JavaScript

This project simulates a real-world user journey on an E-commerce platform including login, shopping cart operations, order review, and order history verification.

## 📁 Project Structure
Playwright_PageObjects/
├── .github/ # GitHub configuration (if any workflows or settings exist)
├── page_objects/ # Page Object Model classes
│ ├── CartPage.js
│ ├── OrdersHistoryPage.js
│ ├── OrdersReviewPage.js
│ ├── dashboard_page.js
│ ├── login_page.js
│ └── pageObjectManager.js
├── tests-examples/ # (Reserved for additional example tests)
├── tests/ # Main test specs
│ └── end_to_end_test.spec.js
├── utils/ # Utility files and test data
│ └── loginDetails.json
├── .gitignore
├── package-lock.json
├── package.json
└── playwright.config.js # Playwright configuration file


## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/mithuntc/Playwright_PageObjects.git
cd Playwright_PageObjects

2. Install Dependencies
npm install

3. Run Tests
npx playwright test

To run with UI: npx playwright test --headed

4. View Report 
npx playwright show-report

✅ Features
Structured using Page Object Model (POM) for reusability and scalability.

Clean separation of concerns for pages, tests, and utilities.

JSON-based test data for easy modification and management.

Easy-to-understand test script for complete user flow validation.

🛠️ In Development
Adding more test cases and scenarios.

Integrating CI/CD workflow.

Enhancing reporting and logging.

Cross-browser testing support.
