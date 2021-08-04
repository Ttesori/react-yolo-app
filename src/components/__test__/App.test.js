import { render } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);
  });

  it('increases round after play button is pressed', () => {
    expect(true).toBe(false);
  });

  it('ends game after 5 rounds', () => {
    expect(true).toBe(false);
  });

  it('ends game after points drops to zero', () => {
    expect(true).toBe(false);
  });

  it('adds round info to history', () => {
    expect(true).toBe(false);
  });
  it('adds score to scoreboard', () => {
    expect(true).toBe(false);
  });
});

