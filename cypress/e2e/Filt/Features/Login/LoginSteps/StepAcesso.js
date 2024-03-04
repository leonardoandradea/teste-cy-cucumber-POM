/// <reference types="cypress" />
import { Before, Given, When } from "cypress-cucumber-preprocessor/steps"
Before(()=>{
    cy.visit('/')
})

Given("acessei o sistema", () => {
    cy.RealizarLogin();
    cy.visit('/')
  
});

When("clico no menu {string}",(menu) => {
    cy.get('.toolbar-menu')
    .click()
    cy.get('.menus-sidenav')
    .find('.itens-menu-principal')
    .contains(menu) 
    .click()

}) 