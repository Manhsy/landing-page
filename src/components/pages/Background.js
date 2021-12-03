import * as React from "react";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { container, Learnmore, Title, Description, Name } from "../../Styling";

export default function Background() {
  return (
    <div id="background" style={container}>
      <Container maxWidth="lg">
        <Title align="left"> B A C K G R O U N D</Title>
        <div style={{ marginTop: "1.5vw" }} />
        <Name align="left">
          Client's names: Ashish Atreja (M.D), Keisuke Nakagawa (M.D)
        </Name>
        <Name align="left">
          Client's business: UC Davis Health Medical Center
        </Name>
        <div style={{ marginTop: "1vw" }} />
        <Description align="left">
          UC Davis Health (UCDH) is improving lives and transforming health care
          by providing excellent patient care, conducting groundbreaking
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
  );
}
const learnMoreButtonStyle = {
  borderRadius: 20,
  display: "flex",
  justifyContent: "flex-start",
  marginTop: "2.3vw",
  borderWidth: 3,
  backgroundColor: "#1976D2",
  paddingLeft: "2vw",
  width: "11vw",
  paddingRight: "2vw",
};
