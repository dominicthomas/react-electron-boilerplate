import React from "react";
import lifecycle from "react-pure-lifecycle";

import logo from "./logo.svg";
import "./App.css";

const methods = {
  componentDidMount(props) {
    alert("Welcome!");
  }
};

const App = ({ props }) => {
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
};

export default lifecycle(methods)(App);