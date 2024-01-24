import logo from './logo.svg';
import './App.css';
import Testcomponent from './components/functionalComponent/testComponent';

function App() {
  return (
    <div className="App">
    <Testcomponent/>
      <header className="App-header">
        <Testcomponent/>
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
