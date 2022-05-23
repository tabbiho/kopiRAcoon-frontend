import { render, screen } from '@testing-library/react';
import App from './App.jsx';

// eslint-disable-next-line no-use-before-define
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
