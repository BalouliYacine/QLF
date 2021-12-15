import React from "react";
import "./albums.css";
import S91 from "./albumimg/91s.jpg";
import Alammoniaque from "./albumimg/alammoniaque.jpg";
import Audd from "./albumimg/auDD.jpg";
import Danslalg from "./albumimg/dansLaLegrnde.jpg";
import Deuxfr from "./albumimg/deuxfrere.jpg";
import Ladif from "./albumimg/ladif.jpg";
import Lemondech from "./albumimg/lemondechico.jpg";
import Qlf from "./albumimg/qlf.jpg";

function Albums() {
  return (
    <div className="album">
      <div className="albumsup" id="albums">
        <h2>Albums</h2>
        <h3> Le Monde Chico and Dans la légende</h3>
        <p>
          The duo released their first song together in early 2014. They
          released a mixtape titled "Que la famille" in March 2015, followed by
          "Le monde Chico" in October of the same year.
        </p>
        <p>
          Their second album "Dans la légende" released on September 16, 2016
          was certified diamond for selling over 1,000,000 copies in total in
          more than 5 countries around Europe.
        </p>
        <h3>Deux frères</h3>
        <p>
          On April 5, 2019, PNL released their third album, Deux frères, which
          sold more than 100,000 copies in its first week of release, a record
          for French rap.The album's third single, "Au DD", has topped the
          French singles chart. They shot the music video for "Au DD" on the
          Eiffel Tower, becoming the first duo or band to do so.
        </p>
      </div>
      <div className="albumsimgs">
        <div className="img">
          <img src={S91} alt="" />
        </div>
        <div className="img">
          <img src={Alammoniaque} alt="" />
        </div>
        <div className="img">
          <img src={Audd} alt="" />
        </div>
        <div className="img">
          <img src={Danslalg} alt="" />
        </div>
        <div className="img">
          <img src={Deuxfr} alt="" />
        </div>
        <div className="img">
          <img src={Ladif} alt="" />
        </div>
        <div className="img">
          <img src={Lemondech} alt="" />
        </div>
        <div className="img">
          <img src={Qlf} alt="" />
        </div>
        {/* To Re-do */}
        <div className="img">
          <img src={S91} alt="" />
        </div>
        <div className="img">
          <img src={Alammoniaque} alt="" />
        </div>
        <div className="img">
          <img src={Audd} alt="" />
        </div>
        <div className="img">
          <img src={Danslalg} alt="" />
        </div>
        <div className="img">
          <img src={Deuxfr} alt="" />
        </div>
        <div className="img">
          <img src={Ladif} alt="" />
        </div>
        <div className="img">
          <img src={Lemondech} alt="" />
        </div>
        <div className="img">
          <img src={Qlf} alt="" />
        </div>
      </div>
      <div className="lstbtn">
        <a href="#"> More</a>
      </div>
    </div>
  );
}
export default Albums;
