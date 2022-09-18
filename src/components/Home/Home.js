import React from "react";
import Card from "../Card/Card";
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

        <section className="section-2">
          <div className="heading">
            <h2>
              <a href="">Your Top Mixes</a>
            </h2>
            <p>
              <a href="">SEE ALL</a>
            </p>
          </div>
          <div className="content">
            <Card
              img="https://i.scdn.co/image/ab67706f0000000398bf3a4db76317b0c50f3b7c"
              title="This is Taylor Swift"
              subtitle="The essential tracks, all in one playlist."
            />
            <Card
              img="https://seeded-session-images.scdn.co/v1/img/artist/7HCqGPJcQTyGJ2yqntbuyr/en"
              title="Amit Trivedi Radio"
              subtitle="By Spotify"
            />
            <Card
              img="https://i.scdn.co/image/ab6761610000e5eb68f6e5892075d7f22615bd17"
              title="Adele"
              subtitle="Artist"
              artist={true}
            />
            <Card
              img="https://i.scdn.co/image/ab67616d0000b273da5d5aeeabacacc1263c0f4b"
              title="reputation"
              subtitle="Taylor Swift"
            />
            <Card
              img="https://i.scdn.co/image/ab6761610000e5ebf7db7c8ede90a019c54590bb"
              title="Harry Styles"
              subtitle="Artist"
              artist={true}
            />
            <Card
              img="https://i.scdn.co/image/ab67616d0000b273ea3ef7697cfd5705b8f47521"
              title="Illuminate (Deluxe)"
              subtitle="Shawn Mendes"
            />
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
