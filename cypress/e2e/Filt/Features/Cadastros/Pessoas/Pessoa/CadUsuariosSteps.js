/// <reference types="cypress" />
import { Given, When, Then, And, Before} from "cypress-cucumber-preprocessor/steps"
import CadUsuarioNew from "./CadUsuariosActions";

// Before( ()=>{
//     cy.visit('/')
// });
// Given('que fiz o login no sistema', () => {
//     cy.RealizarLogin()
// })

When("clico no menu {string}", () => {
    // cy.visit('/')
    CadUsuarioNew.MostrarMenus();
});
