import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import IMAGE from "../../assets/img/experience/ihs.jpg";
import Tilt from "react-tilt";
import "./experience.css";

const Experience = () => {
   return (
      <div id="experience">
         <h1 className="pt-3 text-center font-details-b pb-3">WORK EXPERIENCE</h1>
            <Jumbotron className="jumbo-style">
               <Container>
               <Tilt options={{ max: 25 }}>
                  <Card className="a">
                  <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={IMAGE} alt="Accenture logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Software Engineer Intern/Apprentice</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="strong">Duration:</strong> June 2020 - August 2020
                    <br/>
                    <strong className="strong">Technology:</strong> C#(DOTNET), Postgres, Docker
                    <br />
                    <strong className="strong"> Description </strong>
                    <ul className="text-left">
                      <li><strong className="strong">Development</strong>  Helped working on transferring data that is stored in XML format from one database to another that would store similar data in JSON format.
                           Worked on C# script that reads in and parses XML from database then converts, all attributes that are mappable to a different database, into JSON.</li>
                     
                      <li><strong className="strong">HR project</strong> Listed/watched webinars across all industries that IHS Markit represents. Broke each webinar down by title, dates, industries, areas of interest and others, to make sure each webinar has appropriate tagging and key words for better searching in the web.</li>
                    </ul>
                    
                  </Card.Text>
                </div>
              </Card.Body>
                  </Card>
               </Tilt>
               </Container>
            </Jumbotron>
      </div>
   )
}

export default Experience
