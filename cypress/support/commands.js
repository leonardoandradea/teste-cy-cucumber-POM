Cypress.Commands.add('RealizarLogin', () => {
    cy.session('login', () => {
      cy.visit('/');

      cy.get('#username')
      .focus()
      .type('353.790.600-56');

      cy.get('#password')
      .focus()
      .type('testefilt123');
      cy.get('.login-form')
      .submit();
      cy.get('#topo')
      .should('exist');
    });
  });