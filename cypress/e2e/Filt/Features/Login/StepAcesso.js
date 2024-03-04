/// <reference types="cypress" />
import { Given } from "cypress-cucumber-preprocessor/steps"

Given("acessei o sistema", () => {
    cy.RealizarLogin();
});