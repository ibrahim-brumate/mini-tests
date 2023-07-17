/// <reference types="cypress" />

describe("basics tests for classes", () => {
  it("assertions link", () => {
    cy.visit("http://127.0.0.1:5500/main.html");

    cy.title().should("be.equal", "Document");
    cy.get("main > h1:first-child").should("contain.text", "Rebeca");
    cy.get('[data-test-id="carlos"]').should("contain", "Carlos");
    cy.get('[data-test-id="input"]').should("contain.value", "Ibrahim");
  });
});
