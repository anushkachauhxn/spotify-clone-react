import React, { useEffect } from "react";
import Card from "../Card/Card";
import Navbar from "../Navbar/Navbar";
import RectCard from "../RectCard/RectCard";
import "./Home.scss";
import { topLists, sections, playlists } from "../../database/data";

function Home() {
  useEffect(() => {
    /* Navbar - background changes with scroll */
    const scrollContainer = document.querySelector(".home"),
      navbar = document.querySelector(".navbar");

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", () => {
        let scroll = scrollContainer.scrollTop;
        let opacity = scroll / 200;
        navbar.style.background = `rgba(29, 13, 70, ${opacity})`;
      });
    }
  });

  return (
    <div className="home">
      <div className="home-inside">
        <Navbar home={true} />

        <div className="home-container">
          <section className="section-1">
            <div className="heading">
              <h1>Good evening</h1>
            </div>
            <div className="content">
              {topLists.slice(0, 6).map((list) => (
                <RectCard
                  title={list.title}
                  image={list.image}
                  link={list.link}
                />
              ))}
            </div>
          </section>

          {sections.map((section) => (
            <section>
              <div className="heading">
                <h2>
                  <a href="">{section.category}</a>
                </h2>
                <p>
                  <a href="">SEE ALL</a>
                </p>
              </div>
              <div className="content">
                {section.playlists.slice(0, 6).map((playlist) => (
                  <Card
                    title={playlist.title}
                    subtitle={playlist.subtitle}
                    image={playlist.image}
                    artist={playlist.artist}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
