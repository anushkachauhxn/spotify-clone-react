import React from "react";
import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <div className="main">
        <Sidebar />
        <div className="container"></div>
      </div>
      <div className="track"></div>
    </div>
  );
}

export default App;
