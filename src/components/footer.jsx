import React from "react";
import "./footer.css";
import Pnllogo from "./pnllogo.png";

function Footer() {
  return (
    <footer>
      <img src={Pnllogo} alt="" />
      <div>
        <h3>Peace N'Lovés</h3>
        <p>Fan made website by Balouli Yacine</p>
        <div className="socilats">
          <a
            href="https://www.facebook.com/bale.yaccine.3"
            target="_blank noopener"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/bale_d_yacine/"
            target="_blank noopener"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://github.com/BalouliYacine" target="_blank noopener">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/" target="_blank noopener">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
