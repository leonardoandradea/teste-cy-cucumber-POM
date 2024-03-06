/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import CadPessoa from "./CadPessoaActions"
import CadNew from "../../../ActionsCommons/CadnovoActions";

Given("acessei a pagina de Inclusão de pessoa", () => {
    CadPessoa.VerificarPag();
});

When("clico no botão {string}", (Botão) => {
    CadNew.Clicar_Novo(Botão);
});
