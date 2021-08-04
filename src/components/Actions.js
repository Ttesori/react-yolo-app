import { useContext, useState } from "react";
import AppContext from "../contexts/app-context";

export default function Actions() {
  const { gameOver, restartGame, playRound, points } = useContext(AppContext);
  const [value, setValue] = useState('');
  const [number, setNumber] = useState(1);

  const validateValue = (e) => {
    const inputValue = parseInt(e.target.value);
    console.log(inputValue);
    console.log(inputValue, points)
    if (inputValue >= 0 && inputValue <= points) {
      return setValue(inputValue.current);
    }
    return setValue('');
  }

  const handleNumberChange = (e) => {
    setNumber(parseInt(e.target.value));
  }

  const validatePlay = () => {

    playRound();
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
          <label htmlFor="points">How many points?</label>
          <input type="number" id="points" value={value} onChange={validateValue} placeholder="Enter number of points to wager" />
        </fieldset>
        <fieldset>
          <p>Which number will win?</p>
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
        </fieldset>
        <button onClick={validatePlay}>Play</button>

      </form>
    </div>
  )
}
