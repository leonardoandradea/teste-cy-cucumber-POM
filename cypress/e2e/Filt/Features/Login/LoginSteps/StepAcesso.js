/// <reference types="cypress" />
import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
Before(()=>{
    cy.visit('/')
})

Given("acessei o sistema", () => {
    cy.RealizarLogin()
    cy.visit('/');
  
});

When("clico no menu {string}",(menu) => {
    cy.get('.sidenav-container')
    .find('.topo-esquerda')
    .click()
    cy.get('.menus-sidenav')
    .find('.itens-menu-principal')
    .contains(menu) 
    .click()

})
When("clico no submenu {string}",(menu) => {
    cy.get('app-menu')
    .find('app-sidenav-item')
    .find('.item')
    .contains(menu) 
    .click()
});
// When("clico no SubSubMenu {string}",(menu) => {
//     cy.get('app-sidenav-link')
//     .find('a')
//     .contains(menu) 
//     .click()
// });
When("clico no SubSubMenu {string}", (menu) => {
    cy.get('app-sidenav-link')
      .find('a')
      .filter((index, element) => {
        // Use a expressão regular para testar se o texto do elemento corresponde exatamente ao texto passado no parâmetro
        const regex = new RegExp(`^${menu}$`);
        return regex.test(element.textContent.trim());
      })
      .click();
  });
  
  
  
  
  


