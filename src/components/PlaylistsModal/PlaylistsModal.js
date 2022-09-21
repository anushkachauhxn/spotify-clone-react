import React from "react";
import "./PlaylistsModal.scss";
import { playlists } from "../../database/data";

function PlaylistsModal() {
  return (
    <div className="playlists-modal">
      <h2>Your Playlists</h2>
      <div className="search">
        <ion-icon name="search"></ion-icon>
        <input
          type="search"
          name="search"
          id="playlistSearch"
          placeholder="Search"
        />
      </div>

      <ul className="playlists">
        {playlists.map((playlist, index) => (
          <li key={index}>
            <img
              src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebd8b9980db67272cb4d2c3daf/2/en/large"
              alt=""
            />
            <a href={playlist.link}>{playlist.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlaylistsModal;
