import { useContext } from "react";
import AppContext from "../contexts/app-context";

export default function Score() {
  const { points, gameOver } = useContext(AppContext);
  return (
    <div className="score">
      <h2>🤞 Your {gameOver && 'Final'} Score: <span className="score--points">{points}</span></h2>
    </div>
  )
}
