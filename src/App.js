import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import LargeText from './components/LargeText';
import { Multiple  } from './components/LargeText';

function App() {
  let [counter, setCounter] = useState(0)
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
      <button onClick={() => setCounter(counter + 1)}>Click me</button>
      <LargeText text1="Learning React is fun :)" text2={`Button clicked ${counter} times`} />
      <Multiple />
    </div>
  );
}

export default App;
