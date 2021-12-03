import * as React from "react";
import Container from "@mui/material/Container";
import { container, Title, Description, Name } from "../../Styling";
import Divider from "@mui/material/Divider";
import Timeline from "@mui/lab/Timeline";
import Ti from "../Ti";

export default function TimelinePage(props) {
  const { classes } = props;
  return (
    <div id="timeline" style={container}>
      <div className={classes.toolbar} />
      <Container maxWidth="lg">
        <Divider>
          <Title align="left">T I M E L I N E</Title>
        </Divider>
        <div style={{ marginTop: "1.5vw" }} />
        <Timeline position="alternate">
          <Ti
            sprintNum={1}
            description="Our team focused on communicating with the client on what time
                will work best for weekly meetings, created Flying Donut,
                attended meetings with client, created an agenda that meets our
                goal as well as our client’s development agenda, created a
                context diagram, and created a business event table."
          />
          <Ti
            sprintNum={2}
            description="We focused on meeting the needs of our client. These tasks
                included: reading several articles about design thinking, give
                feedback to our client about those articles and created personas
                in hopes of capturing the need of our end-user. Additionally,
                during sprint 2 we also started on the process of brainstorming
                a low fidelity prototype."
          />

          <Ti
            sprintNum={3}
            description="Our group was split into two teams. First was the wellness team
                who was tasked with meeting our client's task. All of which
                included creating Ideal Customer Profile (ICP), personas, and
                overall research to get a better feel of who will be our end
                users. The second was the UX/UI team which focused on
                brainstorming different layouts/ways to host our landing page
                and further improve our low fidelity prototype."
          />
          <Ti
            sprintNum={4}
            description="At the start of sprint 4, we have completed our high-fidelity
                prototype and were ready to present it to our client. During
                sprint 4, we were tasked with refining our prototype based on
                the feedback we’ve received from our client. After refinement,
                we met with different end-users to get their feedback on the
                prototype to which resulted in further refinement of our
                prototype."
          />
          <Ti
            sprintNum={5}
            description="At the start of sprint 5, we had to set up our development
                environment before any coding could take place. During sprint 5,
                we were tasked with producing a working user interface. We used
                our high-fidelity prototype we created on figma to guide our
                initial version of our user interface. For this sprint we were
                primarly focused on the creation of our navigation within the
                application and how the user would be able to navigate between
                the different screens. Our other main focus was the design of
                the challenge page which was our top priority out of all the
                pages we needed to implement."
          />
          <Ti
            sprintNum={6}
            description="During sprint 6, we were tasked with producing a working
                database and to continue the work that was started on the user
                interface. The database team created an ER diagram that helped
                them understand what was needed from our database and then went
                on to create and set up our mongo database. The front end team
                continued to refine the challenge page and started the creation
                of the login, sign up, and profile pages."
          />
          <Ti
            sprintNum={7}
            description="Going in to sprint 7 there was a lot of learning material each member 
                partaked in that we though was essential componenets to make our app function as 
                efficiently as possible. Aside from the learning we started working on connecting 
                our backend with our frontend. During this spring we started setting up testing 
                of our API and backend using Postman and Jest."
          />
          <Ti
            sprintNum={8}
            description="For spring 8 we were tasked with getting a version of the app working 
                with 100% of product functionalities and conducting system testing. Within this 
                sprint we successfully had our backend talking to our frontend and was able to 
                access data within our database and pull it to display it on our frontend. 
                We also started handling application authentication and authorization. During 
                this sprint we continue to setup automated testing with Jest."
          />
          <Ti
            sprintNum={9}
            description="During sprint 9, we were tasked with wrapping up all development work, 
                getting a beta version ready, and producing a user manuel. We were also
                extensively working on bug fixes and troubleshooting. During this spring we 
                deployed our application using Digital Ocean and worked on updating 
                our tests to work with Digital Ocean."
          />
          <Ti
            sprintNum={10}
            description="For sprint 10, we were tasked with bug fixing and tuning, getting a 
                stable ready-to-release version of the application, and producing a maintance manual. 
                For this sprint we completed the maintence manual and started working on the testing 
                report. We fined tuned the app to make sure we had a deployed stable version of the 
                application running. We also started working on refreshing our landing page for this project."
          />
        </Timeline>
      </Container>
    </div>
  );
}
