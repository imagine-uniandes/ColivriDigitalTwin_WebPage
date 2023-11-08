import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {IntlProvider} from 'react-intl';

window.matchMedia = window.matchMedia || function() {
  return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
  };
};

test('renders learn react link', () => {
  render(<IntlProvider locale="es">
    <App />
  </IntlProvider>);
  const linkElement = screen.getByText(/Gemelo Digital Colivri/i);
  expect(linkElement).toBeInTheDocument();
});
