import React, { useEffect } from "react";
import "./Track.scss";

function Track() {
  const setSliders = () => {
    const sliders = document.querySelectorAll(".slider");
    sliders.forEach((slider) => {
      const min = slider.min,
        max = slider.max,
        value = slider.value;
      var percentage = ((value - min) / (max - min)) * 100;
      slider.style.background = `linear-gradient(to right, var(--slider-color) 0%, var(--slider-color) ${percentage}%, #ffffff66 ${percentage}%, #ffffff66 100%)`;
    });
  };

  useEffect(() => {
    setSliders();
  });

  return (
    <div className="track">
      <div className="track-left">
        <img
          className="banner"
          src="https://upload.wikimedia.org/wikipedia/en/2/27/...Ready_for_It%3F_-_Taylor_Swift.png"
          alt=""
        />
        <div className="song">
          <h5 className="song-title">
            <a href="">...Ready For It?</a>
          </h5>
          <p className="song-artist">
            <a href="">Taylor Swift</a>
          </p>
        </div>
        <span className="icon">
          <ion-icon name="heart-outline"></ion-icon>
        </span>
      </div>

      <div className="track-player">
        <div className="controls">
          <div className="icon">
            <ion-icon name="shuffle-outline"></ion-icon>
          </div>
          <div className="icon">
            <ion-icon name="play-skip-back"></ion-icon>
          </div>
          <div className="icon play-btn">
            <ion-icon name="play-circle"></ion-icon>
            {/* <ion-icon name="pause-circle"></ion-icon> */}
          </div>
          <div className="icon">
            <ion-icon name="play-skip-forward"></ion-icon>
          </div>
          <div className="icon">
            <ion-icon name="repeat-outline"></ion-icon>
          </div>
        </div>
        <div className="progress-bar">
          <p className="current-time">2:18</p>
          <div className="song-slider">
            <input
              type="range"
              className="slider"
              name="song-time"
              id="song-time"
              min={0}
              max={100}
              onInput={() => setSliders()}
            />
          </div>
          <p className="stop-time">4:59</p>
        </div>
      </div>

      <div className="track-right">
        <span className="icon">
          <ion-icon name="musical-note-outline"></ion-icon>
        </span>
        <span className="icon">
          <ion-icon name="layers-outline"></ion-icon>
        </span>
        <span className="icon">
          <ion-icon name="laptop-outline"></ion-icon>
        </span>
        <span className="icon">
          <ion-icon name="volume-medium-outline"></ion-icon>
        </span>
        <span className="volume">
          <input
            type="range"
            className="slider"
            name="volume"
            id="volume"
            min={0}
            max={100}
            onInput={() => setSliders()}
          />
        </span>
      </div>
    </div>
  );
}

export default Track;
