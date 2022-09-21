import React, { useEffect, useState } from "react";
import "./Track.scss";

function Track() {
  const [vol, setVol] = useState(100);

  const setSliders = () => {
    // To show value - grey for unselected and white for selected part
    //  --slider-color: changes according to hover
    const sliders = document.querySelectorAll(".slider");
    sliders.forEach((slider) => {
      const min = slider.min,
        max = slider.max,
        value = slider.value;
      var percentage = ((value - min) / (max - min)) * 100;
      slider.style.background = `linear-gradient(to right, var(--slider-color) 0%, var(--slider-color) ${percentage}%, #ffffff66 ${percentage}%, #ffffff66 100%)`;
    });
  };

  const setTrackSliderSize = () => {
    // To change width of track slider dynamically
    const trackSlider = document.querySelector(
      ".track .track-player .song-slider"
    );
    trackSlider.style.width = `${Math.max(196, window.innerWidth / 2.8)}px`;
  };

  useEffect(() => {
    setSliders();
    setTrackSliderSize();

    window.addEventListener("resize", () => {
      setTrackSliderSize();
    });
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
        <span className="icon menu">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </span>
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
          {vol === 0 && <ion-icon name="volume-off-outline"></ion-icon>}
          {vol <= 30 && <ion-icon name="volume-low-outline"></ion-icon>}
          {vol > 30 && vol <= 70 && (
            <ion-icon name="volume-medium-outline"></ion-icon>
          )}
          {vol > 70 && <ion-icon name="volume-high-outline"></ion-icon>}
        </span>
        <span className="volume">
          <input
            type="range"
            className="slider"
            name="volume"
            id="volume"
            min={0}
            max={100}
            onInput={(event) => {
              setVol(event.target.value);
              setSliders();
            }}
          />
        </span>
      </div>

      <div className="track-right-mob">
        <span className="icon">
          <ion-icon name="heart-outline"></ion-icon>
        </span>
        <span className="icon">
          <ion-icon name="play"></ion-icon>
        </span>
      </div>
    </div>
  );
}

export default Track;
