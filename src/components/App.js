import { useState } from 'react';
import AppContext from '../contexts/app-context';
import './styles/App.css';
import Status from './Status';
import Actions from './Actions';
import Score from './Score';

function App() {
  const [gameOver, setGameOver] = useState(false);
  const [points, setPoints] = useState(100);
  const [round, setRound] = useState(1);
  const [playerNum, setPlayerNum] = useState();
  const [winningNum, setWinningNum] = useState();
  const [scores, setScores] = useState([]);

  const restartGame = () => {
    console.log('Restarting game...');
  }

  const playRound = () => {
    console.log('Play round...')
  }

  const contextValue = {
    gameOver, setGameOver, points, winningNum, round, restartGame, playRound
  }
  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>The YOLO! Game</h1>
        <Score />
        <Status />
        <Actions />
      </div>
    </AppContext.Provider>
  );
}

export default App;
