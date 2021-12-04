import * as React from "react";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { container, Learnmore, Title, Description, Name } from "../../Styling";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
export default function Background(props) {
  const { classes } = props;
  return (
    <ScrollAnimation animateIn="fadeInUp">
      <div id="background" style={container}>
        <div className={classes.toolbar} />
        <Container maxWidth="lg">
          <Divider>
            <Title variant="h5"> B A C K G R O U N D</Title>
          </Divider>
          <div style={{ marginTop: "1.5vw" }} />
          <Name variant="h6">
            Client's names: Ashish Atreja (M.D), Keisuke Nakagawa (M.D)
          </Name>
          <Name variant="h6">
            Client's business: UC Davis Health Medical Center
          </Name>
          <div style={{ marginTop: "1vw" }} />
          <Description variant="body1">
            UC Davis Health (UCDH) is improving lives and transforming health
            care by providing excellent patient care, conducting groundbreaking
            research, fostering innovative, interprofessional education, and
            creating dynamic, productive partnerships with the community.
          </Description>
          <Button
            style={learnMoreButtonStyle}
            href="https://health.ucdavis.edu/welcome/index.html"
            target="_blank"
          >
            <Learnmore>Learn More</Learnmore>
          </Button>
        </Container>
      </div>
    </ScrollAnimation>
  );
}
const backgroundContainer = {
  padding: "10vw",
};
const learnMoreButtonStyle = {
  borderRadius: 20,
  marginTop: "2.3vw",
  borderWidth: 3,
  backgroundColor: "#1976D2",
  paddingLeft: "2vw",
  width: "11vw",
  paddingRight: "2vw",
  textTransform: "capitalize",
};
