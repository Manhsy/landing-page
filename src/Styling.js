import * as React from "react";
import Typography from "@mui/material/Typography";
import { withStyles } from "@material-ui/core/styles";

const container = {
  paddingRight: "20vw",
  paddingLeft: "20vw",
};
const Learnmore = withStyles({
  root: {
    color: "white",
    fontSize: "1em",
  },
})(Typography);
const Title = withStyles({
  root: {
    fontWeight: "bold",
    fontSize: "1.5em",
  },
})(Typography);
const Description = withStyles({
  root: {
    fontSize: "1em",
  },
})(Typography);
const Name = withStyles({
  root: {
    fontWeight: "bold",
    fontSize: "1em",
  },
})(Typography);

export { container, Learnmore, Title, Description, Name };
