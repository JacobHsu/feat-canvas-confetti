import React, { useEffect } from 'react'
import confetti from 'canvas-confetti'
import { delay } from 'lodash'
import logo from './logo.svg';
import './App.css';

function App() {

  const showConfetti = () => {
    confetti({
      particleCount: 200,
      startVelocity: 30,
      gravity: 0.5,
      spread: 350,
      origin: {
        x: 0.5,
        y: 0.3,
      },
    })
  }

  useEffect(() => {
    delay(showConfetti, 100)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
