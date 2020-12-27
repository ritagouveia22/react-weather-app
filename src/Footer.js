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
          >
            {" "}
            open-sourced on GitHub</a>.
        </small>
      </footer>
    </div>
  );
}
