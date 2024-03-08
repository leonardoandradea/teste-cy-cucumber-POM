/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import Actioncommon from "../../../ActionsCommons/Actionscommons";
import CadPessoa from "./CadPessoaActions";

Given("acessei a pagina de Inclusão de pessoa", () => {
    Actioncommon.VerificarPag();
});

When("clico no botão {string}", (Botão) => {
    Actioncommon.Clicar_Novo(Botão);
});

And("preencho com o valor {string} o campo 'nome'", ( nome) => {
 CadPessoa.PreencherCPF(nome) 
});
