/// <reference types="cypress" />

describe.skip("main tests", () => {
  it("title test", () => {
    cy.visit("https://topdevs.pt");
    cy.title().should("be.equal", "Document");

    cy.get("button").each(($el, index) => {
      switch (index) {
        case 0:
          cy.wrap($el).should("contain", "Um");
          break;
        case 1:
          cy.wrap($el).should("contain", "Dois");
          break;
        case 2:
          cy.wrap($el).should("contain", "Três");
          break;
      }
      cy.wrap($el).click();
      cy.wrap($el).should("contain", "Clicado");
    });
  });
});

describe.skip("second test", () => {
  it("links test", () => {
    cy.visit("https://topdevs.pt");

    cy.title().should("be.equal", "Home");

    cy.get("header > a:nth-child(2)").click();
    cy.title().should("be.equal", "Acerca");

    cy.get("body > a").click();
    cy.title().should("be.equal", "Home");
  });
});

describe("third test", () => {
  it("form test", () => {
    cy.visit("https://topdevs.pt");

    cy.get('input[name="phone"]').type("ferionqfpe").should("be.empty");

    cy.get('input[name="phone"]').type("111111").clear();

    cy.get('input[type="submit"]').click();
  });
});
