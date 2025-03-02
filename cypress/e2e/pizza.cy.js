describe("siparis-formu", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/siparis-formu");
  });

  // input alanini doldurur
  it(".type() - type into a DOM element", () => {
    cy.get("#text").type("Alper Mutlu AKCAN");
    cy.get("#text").should("have.value", "Alper Mutlu AKCAN");
  });

  //ilgili checkboxlari isaretler, isaretlenmemesi gerekenler disabled mi diye bakar
  it(".check() - check a checkbox", () => {
    cy.get(".data-cy-not-disabled").not("[disabled]").check();
    cy.get(".data-cy-not-disabled").not("[disabled]").should("be.checked");
    cy.get(".data-cy-disabled").should("be.disabled");
  });

  //tests for submit button
  it(".click()", () => {
    cy.get('select').select('Orta')

    cy.get('.data-cy-boyut').check()

    cy.get(".data-cy-not-disabled").not("[disabled]").check();
    cy.get(".data-cy-not-disabled").not("[disabled]").should("be.checked");

    cy.get("#text").type("Alper Mutlu AKCAN");
    cy.get("#text").should("have.value", "Alper Mutlu AKCAN");

    cy.contains('ORDER NOW').click()
  })


});
