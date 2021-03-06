import * as React from "react";
import Container from "@mui/material/Container";
import { container, Title, Description } from "../../Styling";
import Divider from "@mui/material/Divider";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
export default function Highlight(props) {
  const { classes } = props;
  return (
    <ScrollAnimation animateIn="fadeInUp">
      <div id="highlights" style={container}>
        <div className={classes.toolbar} />
        <Container maxWidth="lg">
          <Divider>
            <Title variant="h5">H I G H L I G H T</Title>
          </Divider>
          <div style={{ marginTop: "1.5vw" }} />
          <Description variant="body1">
            Our client has a vision to create a standard model of wellness which
            hasn't been done before. A comprehensive approach cutting across
            wellness and healthcare spanning from different domains of wellness
            that will help create a novel model for employee health. Our project
            is special because we are tackling the core essence of bringing
            employee wellness all within a central hub from our application.
          </Description>
        </Container>
      </div>
    </ScrollAnimation>
  );
}
