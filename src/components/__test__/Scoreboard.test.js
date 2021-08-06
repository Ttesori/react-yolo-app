import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Scoreboard from '../Scoreboard';
import AppContext from "../../contexts/app-context";
import { dateHelper } from "../../utils/utils";

const LABELS = {
  emptyText: /once you complete a game, your previous scores will appear here\./i
}

describe('Scoreboard', () => {
  test('renders Scoreboard component with no length', () => {
    const testContext = { scoreboard: [] }
    render(
      <AppContext.Provider value={testContext}>
        <Scoreboard />
      </AppContext.Provider>
    );
    expect(screen.getByText(LABELS.emptyText)).toBeInTheDocument();
  });

  test('renders Scoreboard component with > 0 length', () => {
    const testContext = { scoreboard: [{ "date": 1628090030191, "score": 480, "percentChange": "48.00" }] }
    render(
      <AppContext.Provider value={testContext}>
        <Scoreboard />
      </AppContext.Provider>
    );
    screen.debug();
    expect(screen.getByText(new RegExp(dateHelper(testContext.scoreboard[0].date)))).toBeInTheDocument();
    expect(screen.getByText(testContext.scoreboard[0].score)).toBeInTheDocument();
    expect(screen.getByText(/-52%/)).toBeInTheDocument();
  });

});
