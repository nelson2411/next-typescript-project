import Navbar from './Navbar';

describe('Navbar', () => {
  it('should mount the component', () => {
    cy.mount(<Navbar />);
    cy.get('a').should('have.length', 1);
  });
});

// test must verify if navbar contains a link to home page

it('should contain a link to home page', () => {
  cy.mount(<Navbar />);
  cy.get('a').should('have.length', 1);
});
