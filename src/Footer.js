import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        <small>
          This project was coded by Rita and it's{" "}
          <a
            href="https://github.com/ritagouveia22/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub</a> and hosted on <a href="https://dreamy-bhabha-3a4fed.netlify.app/"
            target="_blank"
            rel="noreferrer">Netlify</a>.
        </small>
      </footer>
    </div>
  );
}
