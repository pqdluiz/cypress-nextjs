/// <reference types="cypress" />

import rgbHex from "rgb-hex";

describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("should be verify text in the page", () => {
    cy.get("h1").contains("Vite + React");
    cy.get("p").contains("Click on the Vite and React logos to learn more");
    cy.get("p").contains("Edit src/App.tsx and save to test HMR");
    cy.get("button").contains("count is");
  });

  it("should be success to click button to add number", () => {
    cy.get("button").contains("count is").click().should("not.be.undefined");
  });

  it("should be find images in the page", () => {
    cy.get("img").should("exist");
  });

  it("should verify colors in the page", () => {
    cy.get(".read-the-docs")
      .invoke("css", "color")
      .then((bgcolor) => {
        expect(rgbHex(String(bgcolor))).to.eq("888888");
      });
  });
});
