describe('Example Functional Tests', () => {
  before(() => {
    cy.visit('/');
  });

  it('should navigate to the homepage of qa demo', () => {
    cy.get('img[alt="NGINX Logo"]').should('be.visible');
    cy.url().should('be.equal', 'http://nginx-hello.local');
  });
});
