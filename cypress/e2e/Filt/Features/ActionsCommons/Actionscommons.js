class Actioncommons {
    VerificarPag() {
        cy.get('.card-grid')

    };
    Clicar_Novo(Botão) {
      cy.get('app-header-grid')
      .find('button')
      .contains(Botão)
      .click()
    }}
    
   const Actioncommon = new Actioncommons();
   export default Actioncommon;