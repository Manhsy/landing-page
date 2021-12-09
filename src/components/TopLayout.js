import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "@mui/icons-material";

import { FaRegHospital } from "react-icons/fa";
import { GiTargeting, GiProgression } from "react-icons/gi";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { MdHighlightAlt } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { MdAutoFixHigh } from "react-icons/md";

function TopLayout() {
  const [value, setValue] = React.useState(0);
  const handleChange = (value) => {
    try {
      document
        .getElementById(`${value}`)
        .scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "none", md: "flex" },
        justifyContent: "flex-end",
      }}
    >
      <Tabs
        value={value}
        onChange={(event, value) => {
          handleChange(value);
        }}
      >
        <Tab
          value="prototypes"
          label={
            <div class="TopBarLayoutIcon">
              <MdAutoFixHigh color="white" />
              <TabLabel> Prototype & Demo</TabLabel>
            </div>
          }
        />
        <Tab
          value="background"
          label={
            <div class="TopBarLayoutIcon">
              <FaRegHospital color="white" />
              <TabLabel> Background</TabLabel>
            </div>
          }
        />
        <Tab
          value="scope"
          label={
            <div class="TopBarLayoutIcon">
              <GiTargeting color="white" />
              <TabLabel> Scope</TabLabel>
            </div>
          }
        />
        <Tab
          value="solution"
          label={
            <div class="TopBarLayoutIcon">
              <RiLightbulbFlashLine color="white" />
              <TabLabel> Solution</TabLabel>
            </div>
          }
        />
        <Tab
          value="highlights"
          label={
            <div class="TopBarLayoutIcon">
              <MdHighlightAlt color="white" />
              <TabLabel> Highlights</TabLabel>
            </div>
          }
        />
        <Tab
          value="timeline"
          label={
            <div class="TopBarLayoutIcon">
              <GiProgression color="white" />
              <TabLabel>Timeline</TabLabel>
            </div>
          }
        />
        <Tab
          value="about us"
          label={
            <div class="TopBarLayoutIcon">
              <RiTeamLine color="white" />
              <TabLabel> About Us</TabLabel>
            </div>
          }
        />
        <Tab
          value="eight"
          label={
            <Button
              style={{
                borderRadius: "10px",
                padding: "10px",
                textDecoration: "none",
              }}
              variant="contained"
              class="TopBarLayoutIcon"
              href="https://www.youtube.com/watch?v=_JyGcAqAewQ"
              target="_blank"
            >
              <Link sx={{ color: "#FFFFFF" }} />
              <TabLabel>Demo</TabLabel>
            </Button>
          }
        />
      </Tabs>
    </Box>
  );
}

const TabLabel = withStyles({
  root: {
    color: "#FFFFFF",
    textTransform: "capitalize",
    variant: "h6",
  },
})(Typography);

export default TopLayout;
