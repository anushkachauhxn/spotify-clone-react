import React from "react";
import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Track from "./components/Track/Track";

function App() {
  return (
    <div className="app">
      <div className="main">
        <Sidebar />
        <div className="container"></div>
      </div>
      <Track />
    </div>
  );
}

export default App;
