import React from 'react';
import { mount } from '@cypress/react';
import Container from './Container';

it('renders Container', () => {
  mount(<Container><p>Test</p></Container>);
  cy.get('p').contains('Test');
});