import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from '@testing-library/react';
import Table from './Table';

describe('TableContent', () => {
  it('renders the table with the correct content and functionality', () => {
    cy.visit('/');
    cy.get('table').should('exist');
    cy.get('table tbody tr').should('have.length', 3); // 3 rows in the table
    cy.get('table tbody tr:first-child td:first-child').should('contain', 'Country A');
    cy.get('table tbody tr:last-child td:first-child').should('contain', 'Country C');
    cy.get('table tbody tr:first-child td:last-child button').click();
    cy.get('table tbody tr:first-child td:last-child button').should('contain', 'Remove from cart');
  });
});
