import * as React from "react";
import Typography from "@mui/material/Typography";
import { withStyles } from "@material-ui/core/styles";

const container = {
  padding: "10vw",
};
const Learnmore = withStyles({
  root: {
    fontSize: "1vw",
    color: "white",
    fontWeight: "900",
  },
})(Typography);
const Title = withStyles({
  root: {
    fontWeight: "bold",
    fontSize: "2.5vw",
  },
})(Typography);
const Description = withStyles({
  root: {
    fontSize: "2vw",
  },
})(Typography);
const Name = withStyles({
  root: {
    fontSize: "2vw",
    fontWeight: "bold",
  },
})(Typography);

export { container, Learnmore, Title, Description, Name };
