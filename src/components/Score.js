import { useContext } from "react";
import AppContext from "../contexts/app-context";

export default function Score() {
  const { points } = useContext(AppContext);
  return (
    <div className="score">
      <p>Your Score:</p>
      <span className="score--points">{points}</span>
    </div>
  )
}
