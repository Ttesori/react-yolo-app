import { useContext } from "react";
import AppContext from "../contexts/app-context";

export default function History() {
  const { history } = useContext(AppContext);

  if (history.length === 0) return (
    <div className="history history--empty">
      <h3>📈 Game History</h3>
      Once you begin a game, you can track each round's score here.
    </div>
  )

  return (
    <div className="history">
      <h3>📈 Game History</h3>
      {history.map((round, i) => <p key={i}>Round {round.round}: {round.won ? '+' + round.playerBet : '-' + round.playerBet} | Total: {round.newPoints}</p>)}
    </div>
  )
}
