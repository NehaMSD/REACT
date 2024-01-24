import logo from './logo.svg';
import './App.css';
import propsComponent from './components/functionalComponent/propsComponent';
import StateComponent from './components/classComponent/StateComponent';

function App() {
  return (
    <div className="App">
      <propsComponent name="KEC" course="MERN" />
      <header className="App-header">
        <StateComponent></StateComponent>
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
