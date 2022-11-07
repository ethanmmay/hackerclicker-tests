describe('Multiplier Check', () => {
  it('Multipliers are Accurate', () => {
    cy.visit('/')
    cy.get('#cashAmount').should('have.text', '$0')
    cy.get('.clicker-item').click()
    cy.get('#cashAmount').should('have.text', '$25')
    for (let i = 1; i < 4; i++) {
      cy.get('.clicker-item').click()
    }
    cy.get('#cashAmount').should('have.text', '$100')
    cy.get('#hackPriceButton0').click()
    cy.get('.clicker-item').click()
    cy.get('#cashAmount').should('have.text', '$30')
    for (let i = 1; i < 17; i++) {
      cy.get('.clicker-item').click()
    }
    cy.get('#hackPriceButton1').click()
    cy.get('.clicker-item').click()
    cy.get('#cashAmount').should('have.text', '$55')
    for (let i = 1; i < 22; i++) {
      cy.get('.clicker-item').click()
    }
    cy.get('#hackPriceButton2').click()
    cy.get('.clicker-item').click()
    cy.get('#cashAmount').should('have.text', '$90')
  })
})