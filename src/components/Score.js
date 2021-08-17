import { useContext } from "react";
import AppContext from "../contexts/app-context";
import './styles/Score.css';

export default function Score() {
  const { points, gameOver, winningNum, playerNum } = useContext(AppContext);
  return (
    <div className="score">
      <h2>🤞 Your {gameOver && 'Final'} Score
        <span className="score--points">{points}</span></h2>
      {winningNum &&
        <p className="status--winningNum">{winningNum === playerNum ? 'You won! 🎉' : 'You lost! 😭'}</p>
      }
    </div>
  )
}
