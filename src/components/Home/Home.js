import React from "react";
import Navbar from "../Navbar/Navbar";
import RectCard from "../RectCard/RectCard";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <Navbar home={true} />

      <div className="home-container">
        <section className="section-1">
          <div className="heading">
            <h1>Good evening</h1>
          </div>
          <div className="content">
            <RectCard
              img="https://i.scdn.co/image/ab67706f0000000398bf3a4db76317b0c50f3b7c"
              title="This is Taylor Swift"
            />
            <RectCard
              img="https://i.scdn.co/image/ab67706f0000000398bf3a4db76317b0c50f3b7c"
              title="This is Taylor Swift"
            />
            <RectCard
              img="https://i.scdn.co/image/ab67706f0000000398bf3a4db76317b0c50f3b7c"
              title="This is Taylor Swift"
            />
            <RectCard
              img="https://i.scdn.co/image/ab67706f0000000398bf3a4db76317b0c50f3b7c"
              title="This is Taylor Swift"
            />
            <RectCard
              img="https://i.scdn.co/image/ab67706f0000000398bf3a4db76317b0c50f3b7c"
              title="This is Taylor Swift"
            />
            <RectCard
              img="https://i.scdn.co/image/ab67706f0000000398bf3a4db76317b0c50f3b7c"
              title="This is Taylor Swift"
            />
          </div>
        </section>

        <section>
          <div className="heading">
            <h2>
              <a href="">Your Top Mixes</a>
            </h2>
            <p>
              <a href="">SEE ALL</a>
            </p>
          </div>
        </section>

        <section>
          <div className="heading">
            <h2>
              <a href="">Made for Matilda_</a>
            </h2>
            <p>
              <a href="">SEE ALL</a>
            </p>
          </div>
        </section>

        <section>
          <div className="heading">
            <h2>
              <a href="">Recently Played</a>
            </h2>
            <p>
              <a href="">SEE ALL</a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
