import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { IoIosPhonePortrait } from "react-icons/io";
import { AiOutlineDatabase } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import { container, Title, Description } from "../../Styling";
import Divider from "@mui/material/Divider";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
export default function Solution(props) {
  const { classes } = props;
  return (
    <ScrollAnimation animateIn="fadeInUp">
      <div id="solution" style={container}>
        <div className={classes.toolbar} />
        <Container maxWidth="lg">
          <Divider>
            <Title variant="h5">S O L U T I O N</Title>
          </Divider>
          <div style={{ marginTop: "1.5vw" }} />
          <Description variant="body1">
            Create an application that employees can use to track different
            aspects of wellness. Give employees ideas to “unplug” from their
            work to reduce burnout and stress. Pipeline data from fitness apps
            and display as graphs/charts for an overall view. Include challenges
            that employees can create to encourage participation in wellness.
          </Description>
          <Container style={iconContainer}>
            <div>
              <IoIosPhonePortrait color="black" size="3vw" />
              <div style={{ width: "15vw" }}>
                <IconText variant="caption">
                  Javascript, React Native, CSS (Front-End)
                </IconText>
              </div>
            </div>
            <div>
              <AiOutlineDatabase color="black" size="3vw" />
              <div style={{ width: "15vw" }}>
                <IconText variant="caption">
                  Mongodb, NoSQL, Express.js, Node.js (Back-End)
                </IconText>
              </div>
            </div>
            <div>
              <BsImages color="black" size="3vw" />
              <div style={{ width: "15vw" }}>
                <IconText variant="caption">
                  Unplash API (Third-party API)
                </IconText>
              </div>
            </div>
          </Container>
        </Container>
      </div>
    </ScrollAnimation>
  );
}
const iconContainer = {
  display: "flex",
  marginTop: "5vw",
  justifyContent: "space-between",
  width: "100%",
  flexDirection: "row",
};

const IconText = withStyles({
  root: {
    fontWeight: "bold",
    color: "black",
  },
})(Typography);
