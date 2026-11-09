import { getHeaderLogo } from '../support/app.po';

describe('jspenc-web smoke tests', () => {
  beforeEach(() => {
    cy.visit('/', {
      onBeforeLoad(win) {
        win.localStorage.setItem('theme', 'jspenc-light');
      },
    });
  });

  it('renders the header logo, social links, introduction, and contact link', () => {
    getHeaderLogo()
      .should('be.visible')
      .find('title')
      .should('have.text', 'Go to James Spencer home');

    cy.get('header a[aria-label="github"]')
      .should('be.visible')
      .and('have.attr', 'href', 'https://github.com/jps');
    cy.get('header a[aria-label="twitter"]')
      .should('be.visible')
      .and('have.attr', 'href', 'https://twitter.com/jpspenc');

    cy.contains('Welcome to my corner of the internet').should('be.visible');
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

    cy.get('button[aria-label="enable night mode"]').click();
    cy.get('html').should('have.attr', 'data-theme', 'jspenc-dark');
    cy.window()
      .its('localStorage')
      .invoke('getItem', 'theme')
      .should('eq', 'jspenc-dark');

    cy.get('button[aria-label="enable day mode"]').click();
    cy.get('html').should('have.attr', 'data-theme', 'jspenc-light');
    cy.window()
      .its('localStorage')
      .invoke('getItem', 'theme')
      .should('eq', 'jspenc-light');
  });

  it('renders the footer divider and copyright', () => {
    cy.get('footer hr').should('be.visible');
    cy.get('footer')
      .should('be.visible')
      .and('contain.text', `James Spencer ${new Date().getFullYear()} ©`);
  });
});
