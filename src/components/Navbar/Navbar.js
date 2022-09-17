import React from "react";
import "./Navbar.scss";

function Navbar({ playlist }) {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <button className="nav-btns">
          <ion-icon name="chevron-back-circle"></ion-icon>
        </button>
        <button className="nav-btns" disabled>
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </button>
        {playlist && (
          <button className="play-btn">
            <ion-icon name="play-circle"></ion-icon>
          </button>
        )}
        {playlist && <h2>Liked Songs</h2>}
      </div>

      <div className="navbar-right">
        <button className="upgrade-btn">
          <h4>Upgrade</h4>
        </button>
        <button className="menu-btn">
          <img
            src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80"
            alt=""
          />
          <h4>Matilda_</h4>
          <ion-icon name="caret-down"></ion-icon>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
