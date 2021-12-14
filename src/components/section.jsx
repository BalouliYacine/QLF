import React from "react";
import "./section.css";
import Pnl1 from "./pnl1.png";
import Pnllogo from "./pnllogo.png";

function Section() {
  return (
    <div className="section" id="section">
      <div className="upSection">
        <div>
          <h3>PNL Peace N'Lovés</h3>
          <p>
            PNL (Peace N' Lovés) is a French rap duo consisting of siblings
            Ademo and N.O.S . Formed in 2014, they released their debut studio
            album, "Le Monde Chico" next year. In 2016, the duo released their
            second album "Dans la légende", which has peaked at number one on
            the French Albums chart and sold over a million copies worldwide.
          </p>
          <div className="upimg">
            <img src={Pnllogo} alt="" />
          </div>
        </div>
        <div className="sideimg">
          <img src={Pnl1} alt="" />
        </div>
      </div>
      <div className="downSection"></div>
    </div>
  );
}

export default Section;
