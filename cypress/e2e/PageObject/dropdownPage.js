
class DropdownPage {
  // Locators
  dropdown = '#dropdown'

  // Visit page
  visit() {
    cy.visit('/dropdown')   
  }

  // Actions
  getDropdown() {
    return cy.get(this.dropdown)
  }

  selectOption(optionText) {
    this.getDropdown().select(optionText)
  }

  selectByValue(value) {
    this.getDropdown().select(value)
  }

  // Assertions
  verifyValue(expectedValue) {
    this.getDropdown().should('have.value', expectedValue)
  }

  verifyVisible() {
    this.getDropdown().should('be.visible')
  }

  verifyDefaultValue(expectedValue = null) {
    this.getDropdown().should('have.value', expectedValue)
  }
}

module.exports = new DropdownPage()
