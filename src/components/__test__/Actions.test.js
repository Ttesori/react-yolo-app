import { fireEvent, render, screen } from '@testing-library/react';
import Actions from '../Actions';
import AppContext from "../../contexts/app-context";
import userEvent from '@testing-library/user-event';

describe('Actions', () => {
  test('renders Actions if game is going on', () => {
    const testContext = { gameOver: false }
    render(
      <AppContext.Provider value={testContext}>
        <Actions />
      </AppContext.Provider>
    );
    expect(screen.getByLabelText('How many points?')).toBeInTheDocument();
    expect(screen.getAllByRole('radio').length).toBe(2);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('enters numbers into points field', () => {
    const testContext = { gameOver: false, points: 100 }
    render(
      <AppContext.Provider value={testContext}>
        <Actions />
      </AppContext.Provider>
    );

    userEvent.type(screen.getByLabelText('How many points?'), '10');
    expect(screen.getByLabelText('How many points?')).toHaveValue(10);
  });

  test('cannot enter num > than points into points field', () => {
    const testContext = { gameOver: false, points: 10 }
    render(
      <AppContext.Provider value={testContext}>
        <Actions />
      </AppContext.Provider>
    );
    const inputEl = screen.getByLabelText('How many points?');
    userEvent.type(inputEl, '20');
    expect(inputEl).toHaveValue(null);
  });

  test('cannot enter text into points field', () => {
    const testContext = { gameOver: false, points: 10 }
    render(
      <AppContext.Provider value={testContext}>
        <Actions />
      </AppContext.Provider>
    );
    const inputEl = screen.getByLabelText('How many points?');
    userEvent.type(inputEl, 'hi');
    expect(inputEl).toHaveValue(null);
  });

  test('cannot enter negative num into points field', () => {
    const testContext = { gameOver: false, points: 10 }
    render(
      <AppContext.Provider value={testContext}>
        <Actions />
      </AppContext.Provider>
    );
    const inputEl = screen.getByLabelText('How many points?');
    userEvent.type(inputEl, '-10');
    expect(inputEl).toHaveValue(0);
  });

  test('can select radio option 1', () => {
    const testContext = { gameOver: false }
    render(
      <AppContext.Provider value={testContext}>
        <Actions />
      </AppContext.Provider>
    );
    const radio1El = screen.getByLabelText('1');
    userEvent.click(radio1El);
    expect(radio1El).toBeChecked(true);
  });

  test('can select radio option 2', () => {
    const testContext = { gameOver: false }
    render(
      <AppContext.Provider value={testContext}>
        <Actions />
      </AppContext.Provider>
    );
    const radio2El = screen.getByLabelText('2');
    userEvent.click(radio2El);
    expect(radio2El).toBeChecked(true);
  });

  test('points field clears after clicking play', () => {

  });

});
