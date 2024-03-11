class CadPessoaPage {
  PreencherNome(nome, campo) {
    cy.get('.p-card-content')
    .find('.input-cor')
    .find('input')
    .focus()
    // .should('be.visible')
    .type(nome);
  };
  SelecionarPais(pais){
  cy.get('.ng-tns-c52-15')
  .find('.p-autocomplete-dropdown')
  .click()
  cy.get('.p-autocomplete-item')
  .contains(pais)
  .click()
};
PreencherCpf(cpf,campo){
  cy.get('.p-card-content')
  .find('label')
  .contains(campo)
  .should('be.visible')
  .type(cpf);
};
// PreencherData(data){
//   cy.get('.p-card-content')
//   // .find('label')
//   .find('app-calendar')
//   .click()
//   .should('be.visible')
//   .type(data);
// };
PreencherData(data){
  cy.get('.p-card-content')
    .find('app-calendar input')
    .should('be.visible')
    .type(data);
};
}
  
const CadPessoa = new CadPessoaPage();
export default CadPessoa;