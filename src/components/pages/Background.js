import * as React from "react";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { container, Learnmore, Title, Description, Name } from "../../Styling";

export default function Background() {
  return (
    <div id="background" style={container}>
      <Container maxWidth="lg">
        <Divider>
          <Title> B A C K G R O U N D</Title>
        </Divider>
        <div style={{ marginTop: "1.5vw" }} />
        <Name>Client's names: Ashish Atreja (M.D), Keisuke Nakagawa (M.D)</Name>
        <Name>Client's business: UC Davis Health Medical Center</Name>
        <div style={{ marginTop: "1vw" }} />
        <Description>
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
  marginTop: "2.3vw",
  borderWidth: 3,
  backgroundColor: "#1976D2",
  paddingLeft: "2vw",
  width: "11vw",
  paddingRight: "2vw",
};
