import { getHeading } from '../support/app.po';

describe('jspenc-web smoke tests', () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit('/');
  });

  it('renders the header, introduction, and contact link', () => {
    getHeading().should('contain.text', "Hello, I'm James");
    cy.contains("Welcome to my corner of the internet").should('be.visible');
    cy.get('a[href="mailto:me@jspenc.com"]')
      .should('be.visible')
      .and('contain.text', 'contact.');
  });

  it('renders the Writing and Projects sections with media cards', () => {
    cy.contains('h2', 'Writing').should('be.visible');
    cy.contains('h3', 'Evolution of theming in NewsKit design system')
      .closest('a')
      .should(
        'have.attr',
        'href',
        'https://medium.com/newskit-design-system/evolution-of-theming-in-newskit-design-system-4a35bb83617'
      );

    cy.contains('h2', 'Projects').should('be.visible');
    cy.contains('h3', "NewsKit - News Corp's Design System")
      .closest('a')
      .should('have.attr', 'href', 'https://newskit.co.uk');
  });

  it('toggles between light and dark themes and persists the selection', () => {
    cy.get('html').should('have.attr', 'data-theme', 'jspenc-light');

    cy.get('button[aria-label="switch to dark theme"]').click();
    cy.get('html').should('have.attr', 'data-theme', 'jspenc-dark');
    cy.window()
      .its('localStorage')
      .invoke('getItem', 'theme')
      .should('eq', 'jspenc-dark');

    cy.get('button[aria-label="switch to light theme"]').click();
    cy.get('html').should('have.attr', 'data-theme', 'jspenc-light');
  });

  it('renders the footer social links', () => {
    cy.get('footer a[aria-label="Goto my github"]')
      .should('be.visible')
      .and('have.attr', 'href', 'https://github.com/jps');
    cy.get('footer a[aria-label="Goto my twitter"]')
      .should('be.visible')
      .and('have.attr', 'href', 'https://twitter.com/_jspenc');
  });
});
