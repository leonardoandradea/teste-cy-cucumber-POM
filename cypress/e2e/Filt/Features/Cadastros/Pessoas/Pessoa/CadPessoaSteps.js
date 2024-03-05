/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import CadPessoa from "./CadPessoaActions"

Given("acessei a pagina de Inclusão de pessoa", () => {
    CadPessoa.VerificarPag();
});
