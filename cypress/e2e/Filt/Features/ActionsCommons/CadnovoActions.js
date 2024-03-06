class CadNewAction {
    VerificarPag() {
        cy.get('.card-grid')

    };
    Clicar_Novo(Botão) {
      cy.get('app-header-grid')
      .find('button')
      .contains(Botão)
      .click()
    }}
    
   const CadNew = new CadNewAction();
   export default CadNew;