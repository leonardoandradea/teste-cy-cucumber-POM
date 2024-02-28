class LoginPage {
    enterURL() {
     cy.visit(
      'https://erp-homologacao.viasoft.com.br/pt'
     );
   }
    InserirCpf(Cpf) {
     cy.get('#username')
     .focus()
     .type(Cpf)
     return this;
    }


    InserirSenha(Senha) {
     cy.get('#password')
     .focus()
     .type(Senha);
     return this;
   }
   
    ClicarnobotãoEntrar() {
     cy.get('.login-form')
     .submit();
     return this;
   }
    Validarpaginahome() {
    cy.get('#topo')
     .should('exist');
   }
 }
 const login = new LoginPage();
 export default login;