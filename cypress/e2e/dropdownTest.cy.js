
const dropdownPage = require('./PageObject/dropdownPage.js')

describe('Dropdown Feature (POM)', () => {
  beforeEach(() => {
    // Stub third-party requests like Optimizely
    cy.intercept('GET', '**/event*', { statusCode: 200 }).as('optimizely')
    dropdownPage.visit()
  })

  it('should load dropdown and be visible', () => {
    dropdownPage.verifyVisible()
    dropdownPage.verifyDefaultValue(null) // empty by default
  })

  it('should select Option 1 successfully', () => {
    dropdownPage.verifyVisible()
    dropdownPage.selectOption('Option 1')
    dropdownPage.verifyValue('1')
  })

  it('should select Option 2 successfully', () => {
    dropdownPage.verifyVisible()
    dropdownPage.selectOption('Option 2')
    dropdownPage.verifyValue('2')
  })
})


