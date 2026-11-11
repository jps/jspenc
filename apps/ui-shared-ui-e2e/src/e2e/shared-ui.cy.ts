describe('ui-shared-ui Storybook smoke tests', () => {
  it('renders the BaseProvider story', () => {
    cy.visit('/iframe.html?id=baseprovider--content-in-base-provider');
    cy.contains('Hello World').should('be.visible');
  });

  it('renders the Header story and toggles theme', () => {
    cy.visit('/iframe.html?id=header--header-default', {
      onBeforeLoad(win) {
        win.localStorage.setItem('theme', 'jspenc-light');
      },
    });
    cy.get('header a[href="/"] svg')
      .should('be.visible')
      .find('title')
      .should('have.text', 'Go to James Spencer home');
    cy.get('header a[aria-label="github"]')
      .should('be.visible')
      .and('have.attr', 'href', 'https://github.com/jps');
    cy.get('header a[aria-label="twitter"]')
      .should('be.visible')
      .and('have.attr', 'href', 'https://twitter.com/jpspenc');

    cy.get('button[aria-label="enable night mode"]').click();
    cy.get('html').should('have.attr', 'data-theme', 'jspenc-dark');
    cy.get('button[aria-label="enable day mode"]').should('be.visible');
  });

  it('renders the MediaCard story', () => {
    cy.visit('/iframe.html?id=mediacard--test-card');
    cy.contains('h3', 'Hello World').should('be.visible');
    cy.contains('something something something else').should('be.visible');
  });

  it('renders the Footer story', () => {
    cy.visit('/iframe.html?id=footer--footer-default');
    cy.get('footer hr').should('be.visible');
    cy.get('footer')
      .should('be.visible')
      .and('contain.text', `James Spencer ${new Date().getFullYear()} ©`);
  });
});
