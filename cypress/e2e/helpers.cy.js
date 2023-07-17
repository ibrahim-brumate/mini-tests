/// <reference types="cypress" />
describe("main tests", () => {
  before(() => {
    cy.visit("http://127.0.0.1:5500/");
  });

  beforeEach(() => {
    cy.reload();
  });

  it("should test cy.wrap()", () => {
    const obj = {
      name: "Ibrahim",
      age: 40,
    };

    expect(obj).to.have.property("name");

    cy.wrap(obj).should("have.property", "name");
  });
});
