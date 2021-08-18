import { useContext } from "react";
import AppContext from "../contexts/app-context";
import './styles/History.css';

export default function History() {
  const { history } = useContext(AppContext);

  if (history.length === 0) return (
    <div className="history history--empty">
      <div className="history--inner">
        <h3>📈 Game History</h3>
        Once you begin a game, you can track each round's score here.
      </div>
    </div>
  )

  return (
    <div className="history">
      <div className="history--inner">
        <h3>📈 Game History</h3>
        {history.map((round, i) => <p key={i}>Round {round.round}: {round.won ? '+' + round.playerBet : '-' + round.playerBet} | Total: {round.newPoints}</p>)}
      </div>

    </div>
  )
}
