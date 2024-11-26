import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import StatefulGreeting from './components/StatefulGreeting';
import HooksCounter from './components/HooksCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FunctionalGreeting name="Warren" />
        <img src={logo} className="App-logo" alt="logo" />
        <StatefulGreeting name="Wozza" />
        <HooksCounter name="Warren" />
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
