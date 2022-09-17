import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <Navbar playlist={false} />
      <h1>Good evening</h1>
    </div>
  );
}

export default Home;
