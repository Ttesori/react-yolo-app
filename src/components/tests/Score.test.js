import { render, screen } from '@testing-library/react';
import Score from '../Score';
import App from '../App';

describe('Score', () => {
  test('renders Score component', () => {
    render(<App><Score /></App>);
  });

  test('renders default action', () => {
    render(<App><Score /></App>);
    expect(screen.getByText('100')).toBeInTheDocument();
  });
});
