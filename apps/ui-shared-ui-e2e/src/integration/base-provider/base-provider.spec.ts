describe('ui-shared-ui: BaseProvider component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=baseprovider--primary&args=children;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ui-shared-ui!');
    });
});
