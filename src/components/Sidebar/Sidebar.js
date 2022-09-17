import React from "react";
import "./Sidebar.scss";
import Logo from "../../assets/images/spotify-full.jpg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <a href="#">
          <img src={Logo} alt="" />
        </a>
      </div>

      <ul className="nav">
        <li className="nav-item"></li>
        <li className="nav-item active">
          <a href="#">
            <span className="icon">
              <ion-icon name="home"></ion-icon>
            </span>
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#">
            <span className="icon">
              <ion-icon name="search"></ion-icon>
            </span>
            Search
          </a>
        </li>
        <li className="nav-item">
          <a href="#">
            <span className="icon">
              {/* <ion-icon name="library-outline"></ion-icon> */}
              <ion-icon name="bookmarks-outline"></ion-icon>
            </span>
            Your Library
          </a>
        </li>
        <li className="nav-item"></li>
        <li className="nav-item">
          <a href="#">
            <span className="icon custom-icon add">
              <ion-icon name="add"></ion-icon>
            </span>
            Create Playlist
          </a>
        </li>
        <li className="nav-item">
          <a href="#">
            <span className="icon custom-icon heart">
              <ion-icon name="heart"></ion-icon>
            </span>
            Liked Songs
          </a>
        </li>
      </ul>

      <ul className="playlists">
        <li>Uptown Funk</li>
        <li>Gym Playlist</li>
        <li>Top Gaming Tracks</li>
        <li>Indie Tunes | Best Indie Hits</li>
        <li>This is Taylor Swift</li>
        <li>This is Arctic Monkeys</li>
        <li>Alps Radio</li>
        <li>This is BTS</li>
        <li>Love is a Laserquest</li>
        <li>Yeh Fitoor Mera</li>
        <li>Violin Covers</li>
      </ul>

      <div className="install nav-item">
        <a href="">
          <span className="icon">
            <ion-icon name="arrow-down-circle-outline"></ion-icon>
          </span>
          Install App
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
