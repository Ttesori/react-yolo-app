import { useContext } from "react";
import AppContext from "../contexts/app-context";

export default function Status() {
  const { gameOver, winningNum, round, playerNum } = useContext(AppContext);

  return !gameOver && (
    <div className="status">
      <h3 className="status--round">Round {round} of 5</h3>
      {winningNum &&
        <p className="status--winningNum">{winningNum === playerNum ? 'You won! 🎉' : 'You lost! 😭'}</p>
      }
    </div>
  )
}
