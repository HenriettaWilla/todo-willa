/* eslint-disable no-undef */

describe('My First Test', () => {
    it('Should open the application', () => {
      cy.visit('http://localhost:8081')
      cy.contains('Welcome').click();
      cy.url().should('include', '/');
    })
})