import { render, screen } from '@testing-library/react';
import Actions from '../Actions';
import App from '../App';

describe('Actions', () => {
  test('renders Actions component', () => {
    render(<App><Actions /></App>);
  });

  test('renders default action', () => {
    render(<App><Actions /></App>);
    expect(screen.getByText('Play')).toBeInTheDocument();
  });
});
