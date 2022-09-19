import React, { useEffect, useState } from "react";
import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import Track from "./components/Track/Track";

function App() {
  const getWidth = () =>
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  let [width, setWidth] = useState(getWidth());

  useEffect(() => {
    window.addEventListener("resize", () => {
      let temp = getWidth();
      setWidth(temp);

      console.log(temp, width);
    });
  }, []);

  return (
    <div className="app">
      <div className="main">
        <Sidebar />
        <Home />
      </div>
      <Track />
    </div>
  );
}

export default App;
