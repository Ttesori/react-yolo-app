import { useContext } from "react";
import AppContext from "../contexts/app-context";

export default function Scoreboard() {
  const { scoreboard } = useContext(AppContext);

  if (scoreboard.length === 0) {
    return (
      <div className="scoreboard scoreboard--empty">
        <h3>📊 Scoreboard</h3>
        <p>Once you complete a game, your previous scores will appear here.</p>
      </div>
    )
  }

  return (
    <div className="scoreboard">
      <h3>📊 Scoreboard</h3>
      {scoreboard.map((score, i) => <p key={i}>{score.date}: {score.score} | Percent Change: {score.percentChange}% </p>)}
    </div>
  )
}
