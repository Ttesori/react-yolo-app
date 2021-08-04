import { useContext } from "react";
import AppContext from "../contexts/app-context";

export default function Status() {
  const { gameOver, winningNum, round } = useContext(AppContext);

  if (gameOver) return (
    <div>Game Over</div>
  );

  return (
    <div className="status">
      <h3 className="status--round">Round {round} of 5</h3>
      {winningNum &&
        <p className="status--winningNum">Winning number: {winningNum}</p>}
    </div>
  )
}
