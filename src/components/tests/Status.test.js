import { render, screen } from '@testing-library/react';
import Status from '../Status';
import App from '../App';

describe('Status', () => {
  test('renders Status component', () => {
    render(<App><Status /></App>);
  });

  test('renders round number', () => {
    render(<App><Status /></App>);
    expect(screen.getByText(/Round/)).toBeInTheDocument();
  });
});

// test('', () => {

// });
