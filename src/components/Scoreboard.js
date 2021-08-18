import { useContext } from "react";
import AppContext from "../contexts/app-context";
import { dateHelper } from "../utils/utils";
import './styles/Scoreboard.css';

export default function Scoreboard() {
  const { scoreboard } = useContext(AppContext);

  if (scoreboard.length === 0) {
    return (
      <div className="scoreboard scoreboard--empty">
        <h3>📊 Your Best Score</h3>
        <p>Once you complete a game, your previous scores will appear here.</p>
      </div>
    )
  }

  return (
    <div className="scoreboard">
      <h3>📊 Your Best Score</h3>
      {scoreboard.map((score, i) => <p key={i}>
        <span className="score--date">{dateHelper(score.date)} </span>
        <span className="score--score">{score.score} </span>
        <span className="score--percent">{score.percentChange >= 100 && '+'}{parseInt(score.percentChange) - 100}%</span>
      </p>)}
    </div>
  )
}
