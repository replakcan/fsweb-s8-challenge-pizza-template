describe("siparis-formu", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/siparis-formu");
  });

  it(".type() - type into a DOM element", () => {
    cy.get("#text").type("Alper Mutlu AKCAN");
    cy.get("#text").should("have.value", "Alper Mutlu AKCAN");
  });
  it(".check() - check a checkbox", () => {
    cy.get('.data-cy-not-disabled').not("[disabled]").check();

    cy.get('.data-cy-not-disabled').not("[disabled]").should("be.checked");

    cy.get('.data-cy-disabled').not("[disabled]").check();

    cy.get('.data-cy-disabled').not("[disabled]").should("be.disabled");
  });
});
