/// <reference types="cypress" />
import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
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
});
When("clico no submenu {string}",(menu) => {
    cy.get('.ng-star-inserted')
    .contains(menu) 
    .click()
});
When("clico no SubSubMenu {string}",(menu) => {
// cy.get('.ng-star-inserted > .ng-star-inserted:nth-child(3) > a').click();
    cy.get('.ng-star-inserted')
    .find('a')
    .contains(menu) 
    .click()
});