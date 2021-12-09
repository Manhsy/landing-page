import * as React from "react";
import Container from "@mui/material/Container";
import { container, Title, Description } from "../../Styling";
import Divider from "@mui/material/Divider";
import ScrollAnimation from "react-animate-on-scroll";
import Card from "../Card";
import figma from "../../assets/logo-figma.png";
import youtube from "../../assets/i.png";

import "animate.css/animate.compat.css";

export default function PrototypeDemo(props) {
  const { classes } = props;
  return (
    <ScrollAnimation animateIn="fadeInUp">
      <div id="prototypes" style={container}>
        <div className={classes.toolbar} />
        <Container maxWidth="lg">
          <Divider>
            <Title variant="h5">P R O T O T Y P E S & D E M O</Title>
          </Divider>
          <div style={{ marginTop: "1.5vw" }} />
          <div class="ProfileContainer">
            <Card
              picture={figma}
              name="Low fildelity prototype"
              button="https://www.figma.com/proto/LvmcnwE2ztBUejdLHJMobj/Wellness-Together?node-id=291%3A1199&scaling=contain&page-id=291%3A906&starting-point-node-id=291%3A1209"
            />
            <Card
              name="High fildelity prototype"
              picture={figma}
              button="https://www.figma.com/proto/LvmcnwE2ztBUejdLHJMobj/Wellness-Together?node-id=337%3A40508&scaling=min-zoom&page-id=337%3A34986&starting-point-node-id=337%3A40508"
            />
            <Card
              name="Application Demo"
              picture={youtube}
              button="https://www.youtube.com/watch?v=_JyGcAqAewQ"
            />
          </div>
        </Container>
      </div>
    </ScrollAnimation>
  );
}
