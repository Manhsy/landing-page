import "./App.css";
import React from "react";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Background from "./components/pages/Background";
import Scope from "./components/pages/Scope";
import Solution from "./components/pages/Solution";
import backgroundImage from "../src/assets/340434.png";
import Highlight from "./components/pages/Highlight";
import AboutUs from "./components/pages/AboutUs";
import Timeline from "./components/pages/Timeline";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        backgroundSize: "cover",
      }}
    >
      <ResponsiveAppBar />
      <Background />
      <Scope />
      <Solution />
      <Highlight />
      <Timeline />
      <AboutUs />
    </div>
  );
}

export default App;
