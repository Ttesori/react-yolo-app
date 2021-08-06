import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

const LABELS = {
  inputEl: 'How many points?',
  playEl: 'Play',
  finalText: /Your Final Score/,
  roundTextPattern: /Round 1: -?\+?(\d)* \| Total: (\d)*/
}

describe('App', () => {
  it('renders App component', () => {
    render(<App />);
  });

  it('increases round after play button is pressed', () => {
    render(<App />);
    const roundNum = screen.getByText(/Round 1 of 5/);
    expect(roundNum).toBeInTheDocument();
    userEvent.click(screen.getByRole('button'));
    const round2Num = screen.getByText(/Round 2 of 5/);
    expect(round2Num).toBeInTheDocument();
  });

  it('ends game after 5 rounds', () => {
    render(<App />);
    const inputEl = screen.getByLabelText(LABELS.inputEl);
    const playEl = screen.getByText(LABELS.playEl);
    // Round 1
    userEvent.type(inputEl, '1');
    userEvent.click(playEl);
    // Round 2
    userEvent.type(inputEl, '1');
    userEvent.click(playEl);
    // Round 3
    userEvent.type(inputEl, '1');
    userEvent.click(playEl);
    // Round 4
    userEvent.type(inputEl, '1');
    userEvent.click(playEl);
    // Round 5
    userEvent.type(inputEl, '1');
    userEvent.click(playEl);
    expect(screen.getByText(LABELS.finalText)).toBeInTheDocument();
  });

  it('adds round info to history', () => {
    render(<App />);
    const inputEl = screen.getByLabelText(LABELS.inputEl);
    const playEl = screen.getByText(LABELS.playEl);
    // Round 1
    userEvent.type(inputEl, '1');
    userEvent.click(playEl);
    expect(screen.getByText(LABELS.roundTextPattern)).toBeInTheDocument();
  });
  it('adds score to scoreboard', () => {
    expect(true).toBe(false);
  });
});

