import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import boyImg from "../assets/b.png";
import girlImg from "../assets/g.png";

export default function Profile({ girl, name, position, button }) {
  return (
    <div
      style={{
        margin: ".5vw",
        borderRadius: "20px",
        padding: "3vw",
        boxShadow: " 0 3px 10px rgb(0 0 0 / 0.5)",
      }}
    >
      <img src={girl ? girlImg : boyImg} height="100vw" />
      <Typography>{name}</Typography>
      <Typography>{position}</Typography>
      <Button href={button} target="_blank">
        Learn More
      </Button>
    </div>
  );
}
