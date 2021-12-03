import * as React from "react";
import Container from "@mui/material/Container";
import Profile from "../Profile";
import { container, Title, Description } from "../../Styling";
import Divider from "@mui/material/Divider";
export default function AboutUs(props) {
  const { classes } = props;
  return (
    <div id="about us" style={container}>
      <div className={classes.toolbar} />
      <Container maxWidth="lg">
        <Divider>
          <Title variant="h5">F I N A L - I T E R A T I O N</Title>
        </Divider>
        <div style={{ marginTop: "1.5vw" }} />
        <Description variant="body1">
          Hello, we are Computer Science students from California State
          University, Sacramento, who shares the same passion for technology and
          innovation.
        </Description>
        <div style={{ marginTop: "1.5vw" }} />
        <div class="ProfileContainer">
          <Profile
            girl={true}
            name="Manh S."
            position="Frontend"
            button="https://www.linkedin.com/in/mtsss"
          />
          <Profile
            girl={false}
            name="Daniel O."
            position="Backend"
            button="https://www.linkedin.com/in/olsend/"
          />
          <Profile
            girl={true}
            name="Akasha S."
            position="Backend"
            button="https://www.linkedin.com/in/akasha-stallworth-75a458160/"
          />
          <Profile
            girl={false}
            name="Josh P."
            position="Infrastructure"
            button="https://www.linkedin.com/in/joshua-poe/"
          />
        </div>
        <div class="ProfileContainer">
          <Profile
            girl={false}
            name="Gustav B."
            position="Frontend"
            button="https://www.linkedin.com/in/gustav-boyd/"
          />
          <Profile
            girl={true}
            name="Sharon F. "
            position="Backend"
            button="https://www.linkedin.com/in/sharon-fitzpatrick-9088b31b3/"
          />
          <Profile
            girl={false}
            name="Dennis J."
            position="Backend"
            button="https://www.linkedin.com/in/dennis-worley-jr-4ab98b187/"
          />
          <Profile
            girl={true}
            name="Sahira R."
            position="Backend"
            button="https://www.linkedin.com/in/sahira-rizvi/"
          />
        </div>
      </Container>
    </div>
  );
}
