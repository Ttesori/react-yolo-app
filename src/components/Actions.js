import { useContext, useState } from "react";
import AppContext from "../contexts/app-context";
import './styles/Actions.css';

export default function Actions() {
  const { gameOver, restartGame, playRound, points } = useContext(AppContext);
  const [value, setValue] = useState('');
  const [number, setNumber] = useState(1);

  const validateValue = (e) => {
    const inputValue = parseInt(e.target.value);
    if (inputValue <= 0) return setValue(0);
    if (inputValue > 0 && inputValue <= points) {
      return setValue(inputValue);
    }
    return setValue('');
  }

  const handleNumberChange = (e) => {
    setNumber(parseInt(e.target.value));
  }

  const validatePlay = (e) => {
    e.preventDefault();
    playRound(number, value);
    // Reset form
    setValue('');
    setNumber(1);
  }

  if (gameOver) return (
    <div className="actions">
      <button onClick={restartGame}>Play Again</button>
    </div>
  );
  return (
    <div className="actions">
      <form>
        <fieldset>
          <label htmlFor="points"># of points to wager: </label>
          <input type="number" id="points" value={value} onChange={validateValue} placeholder={`From 0 to ${points}`} min="0" max={points} />
        </fieldset>
        <fieldset>
          Which number will win?
          <span className="actions--radio-group">
            <label>
              <input
                type="radio"
                name="number"
                value="1"
                checked={number === 1}
                onChange={handleNumberChange}
              />
              1
            </label>
            <label>
              <input
                type="radio"
                name="number"
                value="2"
                checked={number === 2}
                onChange={handleNumberChange}
              />
              2
            </label>
          </span>
        </fieldset>
        <button onClick={validatePlay}>Play</button>

      </form>
    </div>
  )
}
