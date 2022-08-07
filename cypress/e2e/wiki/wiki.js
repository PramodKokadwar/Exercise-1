import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  const wikipage = require("../../pages/WikiPage");

  Given("A user opens a wiki website", () => {
    cy.visit("/");
  });

  When("A user search {string}", (text) => {
    wikipage.typeText(text);
  });

  And("A user click on search button", () => {
    wikipage.clickSearch();
  });
  Then("A user will get search result apollo 11", () => {
    cy.url().should("contains", "/Apollo_11");
    cy.screenshot()
    cy.contains('Apollo 11')
  });

 
  
  