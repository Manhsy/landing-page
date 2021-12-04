import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export default function Gallery() {
  return (
    <div style={container}>
      <List style={flexContainer}>
        <ListItem
          style={{ border: "1px solid black", width: "inherit" }}
          primaryText="foo1"
          secondaryText="bar1"
        >
          hi
        </ListItem>
        <ListItem
          style={{ border: "1px solid black", width: "inherit" }}
          primaryText="foo1"
          secondaryText="bar1"
        >
          hi
        </ListItem>
        <ListItem
          style={{ border: "1px solid black", width: "inherit" }}
          primaryText="foo1"
          secondaryText="bar1"
        >
          hi
        </ListItem>{" "}
        <ListItem
          style={{ border: "1px solid black", width: "inherit" }}
          primaryText="foo1"
          secondaryText="bar1"
        >
          hi
        </ListItem>{" "}
        <ListItem
          style={{ border: "1px solid black", width: "inherit" }}
          primaryText="foo1"
          secondaryText="bar1"
        >
          hi
        </ListItem>{" "}
        <ListItem
          style={{ border: "1px solid black", width: "inherit" }}
          primaryText="foo1"
          secondaryText="bar1"
        >
          hi
        </ListItem>{" "}
        <ListItem
          style={{ border: "1px solid black", width: "inherit" }}
          primaryText="foo1"
          secondaryText="bar1"
        >
          hi
        </ListItem>{" "}
        <ListItem
          style={{ border: "1px solid black", width: "inherit" }}
          primaryText="foo1"
          secondaryText="bar1"
        >
          hi
        </ListItem>{" "}
        <ListItem
          style={{ border: "1px solid black", width: "inherit" }}
          primaryText="foo1"
          secondaryText="bar1"
        >
          hi
        </ListItem>
      </List>
    </div>
  );
}
const container = {
  paddingRight: "20vw",
  paddingLeft: "20vw",
};

const flexContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  padding: 0,
  border: "1px solid black",
};
