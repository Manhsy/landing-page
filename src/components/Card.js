import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import figma from "../assets/logo-figma.png";

export default function Card({ name, button, picture }) {
  return (
    <div
      style={{
        margin: ".5vw",
        borderRadius: "20px",
        padding: "3vw",
        boxShadow: " 0 3px 10px rgb(0 0 0 / 0.5)",
      }}
    >
      <img src={picture} height="50vw" />
      <Typography>{name}</Typography>

      <Button href={button} target="_blank">
        Learn More
      </Button>
    </div>
  );
}
