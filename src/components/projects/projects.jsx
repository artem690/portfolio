import React from 'react'
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Button from 'react-bootstrap/Button';

import OREGON from "../../assets/img/projects/oregon.jpg";
import TRIVIA from "../../assets/img/projects/trivia.jpg";
import FILEBOX from "../../assets/img/projects/filebox.jpg";
import COLORADO from "../../assets/img/projects/colorado.jpg";
import SLACK from "../../assets/img/projects/slack.jpg";
import TURN from "../../assets/img/projects/urturn.jpg";
import TRIP from "../../assets/img/projects/trippla.jpg";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import './projects.css'

// skills
import Image from "react-bootstrap/Image";
import L_HTML5 from "../../assets/img/skills/html.jpg";
import L_CSS3 from "../../assets/img/skills/css.jpg";
import L_BOOTSTRAP from "../../assets/img/skills/bootstrap.jpg";
import L_REACT from "../../assets/img/skills/reactjs.jpg";
import L_NODE_JS from "../../assets/img/skills/nodejs.jpg";
import L_EXPRESS from "../../assets/img/skills/express.jpg";
import L_MONGODB from "../../assets/img/skills/mongo.jpg";
import L_POSTGRESQL from "../../assets/img/skills/postgres.jpg";
import L_MYSQL from "../../assets/img/skills/mysql.jpg";
import L_HEROKU from "../../assets/img/skills/heroku.jpg";
import L_GITHUB_PAGES from "../../assets/img/skills/github.jpg";
import L_JAVASCRIPT from "../../assets/img/skills/javascrips.jpg";
import L_PYTHON from "../../assets/img/skills/python.jpg";
import L_CPLUSPLUS from "../../assets/img/skills/cplus.jpg";
import L_JAVA from "../../assets/img/skills/java.jpg";
import L_SCALA from "../../assets/img/skills/scala.jpg";
import L_ASSEMBLY from "../../assets/img/skills/assembly.jpg";
import L_RAILS from "../../assets/img/skills/rails.jpg";

import L_LAMBDA from "../../assets/img/skills/lambda.jpg";
import L_ELASTIC from "../../assets/img/skills/elastic.jpg";
import L_S3 from "../../assets/img/skills/s3.jpg";


const Projects = () => {
   return (
      <div id="projects">
         <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
         <Timeline>
            <Events>
            {/* oregon trail */}
            <ImageEvent
            date="12/2018"
            className="text-center"
            text="Oregon Trail"
            src={OREGON}
            alt="Oregon Trail"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      {/* <div className="div">
                        PROJECT DETAILS
                      </div>  */}
                      <Button className="m-0" variant="outline-primary">PROJECT DETAILS</Button>

                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Text based game Oregon trail.
                        {/* <hr /> */}
                        {/* <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Keeps track of your Todos</li>
                          <li>Powered by React and Material UI</li>
                          <li>Respoisive Design</li>
                        </ul> */}
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CPLUSPLUS}
                                alt="C++"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              C++
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              
                <UrlButton
                  href="https://github.com/artem690/Oregon-trail"
                  target="_blank"
                >
                  CLICK HERE FOR SOURCE CODE
                </UrlButton>
            </div>
          </ImageEvent>

          {/* trivia*/}
          <ImageEvent
            date="05/2019"
            className="text-center"
            text="Trivial Maze Game"
            src={TRIVIA}
            alt="Trivial Maze Game"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                       <Button className="m-0" variant="outline-primary">PROJECT DETAILS</Button>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Basic text based trivial.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Travers through the graph data structure by answering questions correctly</li>
                          <li>Do not let "enemy" catch you on the random node</li>
                          <li>Get to the final node</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CPLUSPLUS}
                                alt="C++"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              C++
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              Directed graph
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
                <UrlButton
                  href="https://github.com/artem690/AVENGER-MAZE-TRIVIA"
                  target="_blank"
                >
                  CLICK HERE FOR SOURCE CODE
                </UrlButton>
            </div>
          </ImageEvent>
         {/* FileBox */}
         <ImageEvent
            date="12/2019"
            className="text-center"
            text="FileBox"
            src={FILEBOX}
            alt="FILEBOX"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                       <Button className="m-0" variant="outline-primary">PROJECT DETAILS</Button>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>A web page that allows users to upload, download, view and share any type of files.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Uploading documents</li>
                          <li>Downloading documents</li>
                          <li>Sharing documents</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                           <span className="p-2">
                                 <Image
                                 src={L_JAVASCRIPT}
                                 alt="JavaScript"
                                 rounded
                                 className="image-style m-1"
                                 ></Image>{" "}
                                 JavaScript
                              </span>
                           </li>
                           <li>
                           <span className="p-2">
                                 <Image
                                 src={L_NODE_JS}
                                 alt="Node.js"
                                 rounded
                                 className="image-style m-1"
                                 ></Image>{" "}
                                 Node.js
                              </span>
                           </li>
                           <li>
                           <span className="p-2">
                                 <Image
                                 src={L_MYSQL}
                                 alt="MySQL"
                                 rounded
                                 className="image-style m-1"
                                 ></Image>{" "}
                                 MySQL
                              </span>
                           </li>

                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                           </li>

                           <li>
                              <span className="p-2">
                                 <Image
                                 src={L_CSS3}
                                 alt="CSS"
                                 rounded
                                 className="image-style m-1"
                                 ></Image>{" "}
                                 CSS
                              </span>
                          </li>
                          <li>
                           <span className="p-2">
                                 <Image
                                 src={L_GITHUB_PAGES}
                                 alt="GitHub"
                                 rounded
                                 className="image-style m-1"
                                 ></Image>{" "}
                                 GitHub
                              </span>
                           </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            
                <UrlButton
                  href="https://github.com/wabrams/CSCI3308"
                  target="_blank"
                >
                  CLICK HERE FOR SOURCE CODE
                </UrlButton>

            </div>
          </ImageEvent>
            {/* colotrans */}
            <ImageEvent
            date="08/2018"
            className="text-center"
            text="ColoradoTransfer.com"
            src={COLORADO}
            alt="ColoradoTransfer"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                       <Button className="m-0" variant="outline-primary">PROJECT DETAILS</Button>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Transportation website that allows customers make reservations and pay for them online. Customers have a choice of many different destinations.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Pick and choose destinations</li>
                          <li>Book transportation</li>
                          <li>Pay for booking</li>
                          <li>Project build on Ecwid platform</li>
                        </ul>
                        <hr />
                        <strong>My contribution</strong>
                        <ul className="list-styles pt-1">
                           <li>Helped developing some UX and UI parts.</li>
                           <li>Helped on some routing and handling.</li>
                        </ul>
                        <hr/>
                        <strong>Tech I used:</strong>
                        <ul>
                          <li>
                           <span className="p-2">
                                 <Image
                                 src={L_JAVASCRIPT}
                                 alt="JavaScript"
                                 rounded
                                 className="image-style m-1"
                                 ></Image>{" "}
                                 JavaScript
                              </span>
                           </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                           </li>

                           <li>
                              <span className="p-2">
                                 <Image
                                 src={L_CSS3}
                                 alt="CSS"
                                 rounded
                                 className="image-style m-1"
                                 ></Image>{" "}
                                 CSS
                              </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            
                <UrlButton
                  href="https://coloradotransfer.com"
                  target="_blank"
                >
                  CLICK WEB LINK
                </UrlButton>

            </div>
          </ImageEvent>
          {/* SlackBot */}
          <ImageEvent
            date="12/2020"
            className="text-center"
            text="Slack Bot"
            src={SLACK}
            alt="Slack Bot"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                       <Button className="m-0" variant="outline-primary">PROJECT DETAILS</Button>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>Virtual stand-up app using Slack API (stand-up bot).
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Schedule standup</li>
                          <li>Picking output channel, users, days and times for standup notification</li>
                          <li>Fill in stand-up and submit to channel</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                           <span className="p-2">
                                 <Image
                                 src={L_JAVA}
                                 alt="Java"
                                 rounded
                                 className="image-style m-1"
                                 ></Image>{" "}
                                 Java
                              </span>
                           </li>
                           <li>
                           <span className="p-2">
                                 <Image
                                 src={L_GITHUB_PAGES}
                                 alt="GitHub"
                                 rounded
                                 className="image-style m-1"
                                 ></Image>{" "}
                                 GitHub
                              </span>
                           </li>
                           <li>
                           <span className="p-2">
                                 Slack API
                              </span>
                           </li>
                           <li>
                           <span className="p-2">
                                 Quartz API
                              </span>
                           </li>
                           <li>
                           <span className="p-2">
                                 Maven project
                              </span>
                           </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            
                <UrlButton
                  href="https://github.com/wawo9193/slacker-standup"
                  target="_blank"
                >
                  CLICK HERE FOR SOURCE CODE
                </UrlButton>

            </div>
          </ImageEvent>

          {/* urturn */}
          <ImageEvent
            date="8/2020-present"
            className="text-center"
            text="UR TURN"
            src={TURN}
            alt="UR TURN"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                       <Button className="m-0" variant="outline-primary">PROJECT DETAILS</Button>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>Dashboard application that helps school with educational progress among the students/guardians/counselors.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Atendace check, grades check, progress tracker</li>
                          <li>School districts</li>
                          <li>Allert emails</li>
                          <li>Many others</li>
                        </ul>
                        <hr />
                        <strong>My contribution</strong>
                        <ul className="list-styles pt-1">
                           <li>Worked on seeding the data properly when working locally and for testing purposes.</li>
                           <li>Email notification when attendance drops</li>
                        </ul>
                        <hr />
                        <strong>Tech I used:</strong>
                        <ul>
                          <li>
                           <span className="p-2">
                                 <Image
                                 src={L_RAILS}
                                 alt="Ruby on Rails"
                                 rounded
                                 className="image-style m-1"
                                 ></Image>{" "}
                                 Ruby on Rails
                              </span>
                           </li>
                           <li>
                           <span className="p-2">
                                 <Image
                                 src={L_POSTGRESQL}
                                 alt="Postgres"
                                 rounded
                                 className="image-style m-1"
                                 ></Image>{" "}
                                 Postgress
                              </span>
                           </li>
                           <li>
                           <span className="p-2">
                                 <Image
                                 src={L_HTML5}
                                 alt="HTML"
                                 rounded
                                 className="image-style m-1"
                                 ></Image>{" "}
                                 HTML
                              </span>
                           </li>
                           <li>
                           <span className="p-2">
                                 <Image
                                 src={L_CSS3}
                                 alt="CSS"
                                 rounded
                                 className="image-style m-1"
                                 ></Image>{" "}
                                 CSS
                              </span>
                           </li>
                           <li>
                           <span className="p-2">
                                 <Image
                                 src={L_GITHUB_PAGES}
                                 alt="GitHub"
                                 rounded
                                 className="image-style m-1"
                                 ></Image>{" "}
                                 GitHub
                              </span>
                           </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            
                <UrlButton
                  href="https://github.com/ur-turn/accreditor"
                  target="_blank"
                >
                  CLICK HERE FOR SOURCE CODE
                </UrlButton>

            </div>
          </ImageEvent>


           {/* Trip planner */}
          <ImageEvent
            date="01/2021-present"
            className="text-center"
            text="Trip Planner"
            src={TRIP}
            alt="Trip Planner"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                       <Button className="m-0" variant="outline-primary">PROJECT DETAILS</Button>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>Web application that helps user to get some helpful information for their future trip.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Using multiple APIs for data provision</li>
                          <li>Get best flight prices to destination</li>
                          <li>Get list with top 5 places to visit at destination</li>
                          <li>Check when is the best time to go according to weather</li>
                        </ul>
                        
                        <hr />
                        <strong>Tech I used:</strong>
                        <ul>
                          <li>
                           <span className="p-2">
                                 <Image
                                 src={L_LAMBDA}
                                 alt="AWS Lambda"
                                 rounded
                                 className="image-style m-1"
                                 ></Image>{" "}
                                 AWS Lambda
                              </span>
                           </li>
                           <li>
                           <span className="p-2">
                                 <Image
                                 src={L_ELASTIC}
                                 alt="AWS Elasticsearch"
                                 rounded
                                 className="image-style m-1"
                                 ></Image>{" "}
                                 AWS Elasticsearch
                              </span>
                           </li>
                           <li>
                           <span className="p-2">
                                 <Image
                                 src={L_S3}
                                 alt="AWS S3"
                                 rounded
                                 className="image-style m-1"
                                 ></Image>{" "}
                                 AWS S3
                              </span>
                           </li>
                           <li>
                           <span className="p-2">
                                 <Image
                                 src={L_NODE_JS}
                                 alt="JavaScript(Node)"
                                 rounded
                                 className="image-style m-1"
                                 ></Image>{" "}
                                 JavaScript(Node)
                              </span>
                           </li>
                           <li>
                           <span className="p-2">
                                 <Image
                                 src={L_REACT}
                                 alt="React"
                                 rounded
                                 className="image-style m-1"
                                 ></Image>{" "}
                                 React
                              </span>
                           </li>
                           <li>
                           <span className="p-2">
                                 <Image
                                 src={L_GITHUB_PAGES}
                                 alt="GitHub"
                                 rounded
                                 className="image-style m-1"
                                 ></Image>{" "}
                                 GitHub
                              </span>
                           </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            
                <UrlButton
                  href="https://github.com/CUBigDataClass/Trip-Planner"
                  target="_blank"
                >
                  CLICK HERE FOR SOURCE CODE
                </UrlButton>

            </div>
          </ImageEvent>
            </Events>
         </Timeline>
         
      </div>
   )
}

export default Projects;



{/* <Button className="m-2" variant="outline-primary">PROJECT DETAILS</Button> */}