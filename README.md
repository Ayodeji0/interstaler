# Cypress Dropdown Testing (Page Object Model)

This project is to complete the assessment task for the role of QA i tested with  **Cypress** with the **Page Object Model (POM)** pattern.

  The URL is [the-internet.herokuapp.com/dropdown](http://the-internet.herokuapp.com/dropdown) for the assessment .

---

## 📂 Project Structure

cypress/
e2e/
dropdownTest.cy.js # Test suite
pages/
dropdownPage.js # Page Object for dropdown
cypress.config.js # Cypress configuration
package.json # Dependencies and scripts
README.md # Documentation

---

## 🚀 Setup Instructions

1. **Clone the repository** (or copy the files into a folder, e.g., `interstellar`):
   ```bash
   git clone https://github.com/Ayodeji0/interstaler.git
   cd cypress-interstaler
  ## INSTALL DEPENDENCIES
   npm init -y                # if package.json does not exist
   npm install cypress --save-dev
   use npx cypress open to run cypress in interactive mode
   use npx run cypress in headless mode
   ## You can find this in the package.json file
   "scripts": {
  "cypress:open": "cypress open",
  "cypress:run": "cypress run"
}

## TEST COVERAGE 
✅ Verify dropdown loads and is visible.

✅ Verify default state (placeholder: "Please select an option").

✅ Select Option 1 and verify value.

✅ Select Option 2 and verify value.
## NOTE 
Default placeholder option has value=null, not an empty string.

External third-party requests (like Optimizely) are stubbed with cy.intercept to prevent noise in test output.
