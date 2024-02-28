/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import login from "../../Pages/LoginPage/LoginPage.cy";

Given("acessei a pagina", () => {
    login.enterURL();
});

When("preencho com o valor Cpf o campo Cpf", (datatable) => {
    datatable.hashes().forEach((element) => {
        login.InserirCpf(element.Cpf);
    });
});

And("preencho com o valor Senha o campo Senha", (datatable) => {
    datatable.hashes().forEach((element) => {
        login.InserirSenha(element.Senha);
    });
});

And("clico no botão Entrar", () => {
    login.ClicarnobotãoEntrar();
});
Then("a pagina home deverá ser exibida", () => {
    login.Validarpaginahome();
});