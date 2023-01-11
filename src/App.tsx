import React from 'react';
import logo from './logo.svg';
import './App.css';
import words from './data/words.json'

const App= () => {
  const arrayOfWords = JSON.stringify(words)
  const { length } = arrayOfWords;
  console.log(length);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
