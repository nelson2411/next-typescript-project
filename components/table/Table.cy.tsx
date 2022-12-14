import Table from './Table';

describe('It should mount the table', () => {
  it('should mount the component', () => {
    cy.mount(<Table />);
  });
});

// Table component must have a data-cy attribute
