import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import History from '../History';
import AppContext from "../../contexts/app-context";

describe('History', () => {
  test('renders History component with no length', () => {
    const testContext = { history: [] }
    render(
      <AppContext.Provider value={testContext}>
        <History />
      </AppContext.Provider>
    );
    expect(screen.getByText(/once you begin a game, you can track each round's score here\./i)).toBeInTheDocument();
  });

  test('renders History component with > 0 length', () => {
    const testContext = { history: [{ "round": 1, "won": true, "playerBet": 558, "newPoints": 1558 }] }
    render(
      <AppContext.Provider value={testContext}>
        <History />
      </AppContext.Provider>
    );
    expect(screen.getByText(/round 1: \+558 \| total: 1558/i)).toBeInTheDocument();
  });

});
