import Footer from './Footer';

describe('Footer', () => {
  it('should mount the component', () => {
    cy.mount(<Footer />);
  });
});

// Create a test for footer component
// test must verify if footer contains links to github and linkedin

it('should contain links to github and linkedin', () => {
  cy.mount(<Footer />);
  cy.get('a').should('have.length', 2);
});

// test must verify if footer contains text with my name

it('should contain text with my name', () => {
  cy.mount(<Footer />);
  cy.contains('Nelson Rosales');
});

export {};
