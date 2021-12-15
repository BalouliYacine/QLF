import React from "react";
import "./header.css";

function Header() {
  return (
    <header>
      <h1>" J'crois que personne ne vit sans regrets. "</h1>
      <p>"A l'ammoniaque"</p>
      <button>More</button>

      <div className="headerbtn">
        <div className="leftbtn">
          <a href="#DeuxFreres">Deux freres</a>
          <a href="#albums">Albums</a>
        </div>
        <div className="rightbtn">
          <a href="#section">About</a>
          <a>Listen</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
