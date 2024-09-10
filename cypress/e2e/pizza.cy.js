//inputa metin giren test

//birden fazla malzeme seçebilen bir test

//formu gönderen bir test

describe('siparis-formu', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('http://localhost:5173/siparis-formu')
    })

    it('.type() - type into a DOM element', () => {
        cy.get('#text').type('Alper Mutlu AKCAN')
        cy.get('#text').should('have.value', 'Alper Mutlu AKCAN')



})
})