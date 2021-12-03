import * as React from "react";
import Container from "@mui/material/Container";
import { container, Title, Description } from "../../Styling";
import Divider from "@mui/material/Divider";
export default function Scope() {
  return (
    <div id="scope" style={container}>
      <Container maxWidth="lg">
        <Divider>
          <Title>S C O P E</Title>
        </Divider>
        <div style={{ marginTop: "1.5vw" }} />
        <Description>
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
