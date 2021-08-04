import { useState, useEffect } from 'react';
import AppContext from '../contexts/app-context';
import './styles/App.css';
import Status from './Status';
import Actions from './Actions';
import Score from './Score';
import History from './History';
import Scoreboard from './Scoreboard';

const INITIAL_STATE = {
  gameOver: false,
  points: 1000,
  round: 1,
  winningNum: undefined,
  playerNum: undefined,
  history: [],
  scoreboard: []
}

function App() {
  const [gameOver, setGameOver] = useState(INITIAL_STATE.gameOver);
  const [points, setPoints] = useState(INITIAL_STATE.points);
  const [round, setRound] = useState(INITIAL_STATE.round);
  const [winningNum, setWinningNum] = useState(INITIAL_STATE.winningNum);
  const [history, setHistory] = useState(INITIAL_STATE.history);
  const [playerNum, setPlayerNum] = useState(INITIAL_STATE.playerNum);
  const [scoreboard, setScoreboard] = useState(INITIAL_STATE.scoreboard);

  const restartGame = () => {
    console.log('Restarting game...');
    setGameOver(INITIAL_STATE.gameOver);
    setPoints(INITIAL_STATE.points);
    setRound(INITIAL_STATE.round);
    setWinningNum(INITIAL_STATE.winningNum);
    setHistory(INITIAL_STATE.history);
  }

  const playRound = (playerGuess, playerBet) => {
    console.log(playerGuess, playerBet);
    // Set winning number
    const winningNumber = Math.ceil(Math.random() * 2);
    console.log(winningNumber);
    setWinningNum(winningNumber);
    setPlayerNum(playerGuess);

    // If no player bet, choose random amount
    if (!playerBet) {
      playerBet = Math.ceil(Math.random() * points)
      console.log(playerBet);
    }

    // Determine if player wins
    let newPoints = 0;
    const won = winningNumber === playerGuess;
    console.log(won);
    if (won) {
      // Add points
      newPoints = points + playerBet;
    } else {
      // Subtract points
      newPoints = points - playerBet;
    }
    setPoints(newPoints);
    setHistory([...history, { round, won, playerBet, newPoints }]);

    // Check if game over
    if (newPoints <= 0 || round === 5) {
      // Game over
      setGameOver(true);
      const newScore = {
        date: Date.now(),
        score: newPoints,
        percentChange: ((newPoints / INITIAL_STATE.points) * 100).toFixed(2)
      }
      const newScoreboard = [...scoreboard, newScore];
      setScoreboard(newScoreboard);
      localStorage.setItem('yolo-scores', JSON.stringify(newScoreboard));
    } else {
      setRound(round + 1);
    }
  }

  useEffect(() => {
    if (localStorage.getItem('yolo-scores')) {
      const scores = JSON.parse(localStorage.getItem('yolo-scores'));
      if (scores.length > 0) {
        setScoreboard(scores);
      } else {
        setScoreboard([])
      }
    }
  }, []);

  const contextValue = {
    gameOver, setGameOver, points, winningNum, round, restartGame, playRound, history, scoreboard, playerNum
  }
  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>The YOLO! Game</h1>
        <p>How many points can you win in 5 rounds?</p>
        <Score />
        <Status />
        <Actions />
        <History />
        <Scoreboard />
      </div>
    </AppContext.Provider>
  );
}

export default App;
