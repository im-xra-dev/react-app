import * as React from 'react';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header test={'yes'}></Header>
      <header className="App-header">
        <p>
          ddEdit <code>src/App.js</code> and save to reload fsdfsdfhgh.
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
