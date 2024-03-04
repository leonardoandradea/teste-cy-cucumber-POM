Cypress.Commands.add('RealizarLogin', () => {
    cy.session('login', () => {
      cy.visit('/');

      cy.get('#username')
      .focus()
      .type('10470038993');

      cy.get('#password')
      .focus()
      .type('euamovc1912');
      cy.get('.login-form')
      .submit();
      cy.get('#topo')
      .should('exist');
    });
  });