import { useContext } from "react";
import AppContext from "../contexts/app-context";
import './styles/Status.css';

export default function Status() {
  const { gameOver, round } = useContext(AppContext);

  return !gameOver && (
    <div className="status">
      <h2 className="status--round">Round {round} of 5</h2>
    </div>
  )
}
