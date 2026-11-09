describe('ui-shared-ui Storybook smoke tests', () => {
  it('renders the BaseProvider story', () => {
    cy.visit('/iframe.html?id=baseprovider--content-in-base-provider');
    cy.contains('Hello World').should('be.visible');
  });

  it('renders the Header story and toggles theme', () => {
    cy.visit('/iframe.html?id=header--header-default');
    cy.contains('h1', "Hello, I'm James").should('be.visible');
    cy.get('button[aria-label="switch to dark theme"]').click();
    cy.get('html').should('have.attr', 'data-theme', 'jspenc-dark');
  });

  it('renders the MediaCard story', () => {
    cy.visit('/iframe.html?id=mediacard--test-card');
    cy.contains('h3', 'Hello World').should('be.visible');
    cy.contains('something something something else').should('be.visible');
  });

  it('renders the Footer story', () => {
    cy.visit('/iframe.html?id=footer--footer-default');
    cy.get('footer a[aria-label="Goto my github"]').should('be.visible');
    cy.get('footer a[aria-label="Goto my twitter"]').should('be.visible');
  });
});
