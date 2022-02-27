import React from "react";
import ReactDOM from "react-dom";
// Game engine imports
import { GameEngine } from "react-game-engine";
// Styles
import "./index.css";
// Components
import { Moose } from "./components/renderer";
import { MoveCharacter } from "./components/systems";
// assets
import sky from "./assets/sky.jpeg";
// Web Vitals
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <GameEngine
      style={{
        width: 800,
        height: 600,
        backgroundImage: `url(${sky})`,
        backgroundSize: "cover",
      }}
      systems={[MoveCharacter]}
      entities={{
        // This is where our moose is loaded!
        mainChar: { x: 200, y: 200, renderer: <Moose /> },
      }}
    ></GameEngine>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
