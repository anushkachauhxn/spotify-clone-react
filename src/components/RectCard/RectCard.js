import React from "react";
import "./RectCard.scss";

function RectCard({ img, title }) {
  return (
    <div className="rect-card">
      <div className="rect-card-left">
        <img src={img} alt="" />
      </div>
      <div className="rect-card-right">
        <h4>{title}</h4>
        <button className="play-btn">
          <ion-icon name="play-circle"></ion-icon>
        </button>
      </div>
    </div>
  );
}

export default RectCard;
