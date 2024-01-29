import logo from './logo.svg';
import './App.css';
//import PropsComponent from './components/functionalComponent/PropsComponent';
//import StateComponent from './components/classComponent/StateComponent';

import NavBar from './components/functionalComponent/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/functionalComponent/About';
import Login from './components/functionalComponent/Login';
import Experience from './components/functionalComponent/Experience';
import Home from './components/functionalComponent/Home';
import Reference from './components/functionalComponent/Reference';
import Memo from './components/functionalComponent/Memo';
import Callback from './components/functionalComponent/Callback';
import Signup from './components/functionalComponent/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Experience" element={<Experience/>}/>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Reference" element={<Reference/>}></Route>
        <Route path="/Memo" element={<Memo/>}></Route>
        <Route path="/Callback" element={<Callback/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
      </Routes>  
      </BrowserRouter>
    

      {/*<PropsComponent name="KEC" course="MERN" /> */}
      <header className="App-header">
      {/*<StateComponent/> */}
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
        <footer>
        <p>&copy; 2024 All CopyRights Reserved</p>
        <a href="https://github.com/NehaMSD/" target="_blank" rel="oopener noreferrer">Github</a>
        </footer>
        </div>
  );
}

export default App;
