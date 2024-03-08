class CadPessoaPage {
  PreencherCPF(nome) {
    cy.get('.col-12')
    .find('#nome')
    .focus()
    .type(nome)
    return this;
  }}
  
 const CadPessoa = new CadPessoaPage();
 export default CadPessoa;