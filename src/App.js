import "./App.css";
import React from "react";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Background from "./components/pages/Background";
import Scope from "./components/pages/Scope";
import Solution from "./components/pages/Solution";
import backgroundImage from "../src/assets/340434.png";
import Highlight from "./components/pages/Highlight";
import AboutUs from "./components/pages/AboutUs";
import Timeline from "./components/pages/TimelinePage";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  toolbar: theme.mixins.toolbar,
});

function App(props) {
  const { classes } = props;

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <ResponsiveAppBar classes={classes} />
      <Background classes={classes} />
      <Scope classes={classes} />
      <Solution classes={classes} />
      <Highlight classes={classes} />
      <Timeline classes={classes} />
      <AboutUs classes={classes} />
    </div>
  );
}

export default withStyles(styles)(App);
