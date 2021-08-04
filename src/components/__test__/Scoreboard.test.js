import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Scoreboard from '../Scoreboard';
import AppContext from "../../contexts/app-context";

describe('Scoreboard', () => {
  test('renders Scoreboard component with no length', () => {
    const testContext = { scoreboard: [] }
    render(
      <AppContext.Provider value={testContext}>
        <Scoreboard />
      </AppContext.Provider>
    );
    expect(screen.getByText(/once you complete a game, your previous scores will appear here\./i)).toBeInTheDocument();
  });

  test('renders Scoreboard component with > 0 length', () => {
    const testContext = { scoreboard: [{ "date": 1628090030191, "score": 480, "percentChange": "48.00" }] }
    render(
      <AppContext.Provider value={testContext}>
        <Scoreboard />
      </AppContext.Provider>
    );
    expect(screen.getByText(/1628090030191: 480 \| percent change: 48\.00%/i)).toBeInTheDocument();
  });

});
