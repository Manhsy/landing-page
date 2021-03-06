import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import Typography from "@mui/material/Typography";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
export default function Ti({ sprintNum, description, fade }) {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color="success" variant="outlined">
          <LaptopMacIcon />
        </TimelineDot>
        <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 2 }}>
        <ScrollAnimation animateIn={fade}>
          <Typography variant="h6" component="span">
            {`Sprint ${sprintNum}`}
          </Typography>
          <Typography variant="body1">{description}</Typography>
        </ScrollAnimation>
      </TimelineContent>
    </TimelineItem>
  );
}
