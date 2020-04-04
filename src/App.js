import React from "react";

import logo from "./assets/images/logo.svg";
import "./App.scss";
import ControlsList from "./components/controls-list/ControlsList";

function App() {
  return (
    <div className="app">
      <header className="header">
        <img className="logo" src={logo} alt="Logo" />
      </header>
      <div className="content-area">
        <main id="main" className="main-area">
          <ControlsList></ControlsList>
        </main>
        <footer className="footer"></footer>
      </div>
    </div>
  );
}

export default App;
