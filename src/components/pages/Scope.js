import * as React from "react";
import Container from "@mui/material/Container";
import { container, Title, Description } from "../../Styling";
import Divider from "@mui/material/Divider";

export default function Scope(props) {
  const { classes } = props;

  return (
    <div id="scope" style={container}>
      <div className={classes.toolbar} />
      <Container maxWidth="lg">
        <Divider>
          <Title variant="h5">S C O P E</Title>
        </Divider>
        <div style={{ marginTop: "1.5vw" }} />
        <Description variant="body1">
          Creating a standard model for employee wellness. A holistic and more
          comprehensive approach cutting across wellness and healthcare across
          different domains - Assessment, behavioral health, activity,
          nutrition, screening, access to care, will help create a novel model
          for employee health.
        </Description>
      </Container>
    </div>
  );
}
