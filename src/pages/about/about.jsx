import React from 'react'
import Container from 'react-bootstrap/Container'; // or do import { Container, Col, Row, } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import ProfilePic from '../../assets/img/profile/profile.jpg';
import Pdf from './ArtemNekrasovResumecopy.pdf';
import './about.css';

import AdaptiveImage from 'react-adaptive-image';

const About = () => {
   return (
      <div id="about">
      <div className="about">
         <h1 className="font-details pt-3 text-center pb-3">ABOUT ME</h1>
         <Container>
            <Row className="pt-3 pb-5 align-items-center">
               <Col xs={12} md={6}>
                  <Row className="justofy-content-mb-2 mr-2">
                     <AdaptiveImage className="profile justify-content-end" alt="profile" src={ProfilePic} thumbnail fluid/>
                  </Row>
               </Col>
            
               <Col xs={12} md={6}>
                  <Row className="align-items-start p-2 my-details rounded">
                     Hi, my name is Artem. I am originally from Russia. I moved to the United States at the age of 16. Currently, I am a senior at University of Colorado Boulder, working on completing Bachelor of Science in Computer Science. 
                     I am interested in working with full stack development. I have a big passion for front-end work especially because I am a very visual person and enjoy seeing the work I do.
                     <br/>
                     I am looking for a full-time entry level opportunity in software engineering/development, front-end development, web development, application development. I am committed and looking forward to joining the industry and learn every day. My commitment, hard work and passion for programming will show every day at a work force environment.
                     I always strive to be better each day, make progress and have a positive impact on whatever I work on. Due to my sports past, I have a lot of experience in working on the team, and most important is that I love working on the team.
                  </Row>
                  <Row>
                     <Col className="d-flex justify-content-center flex-wrap my-details">
                        <div>
                           <a href="#contact" >
                              <Button className="m-2" variant="info">Let's Talk</Button>
                           </a>
                        </div>
                        <div>
                           <a href= {Pdf} target="_blank" rel="noopener noreferrer">
                              <Button className="m-2" variant="success">
                                 My Resume
                              </Button>
                           </a>
                           </div>
                           <div>
                           <a href="https://github.com/artem690" target="_blank" rel="noopener noreferrer">
                              <Button className="m-2" variant="dark">
                                 GitHub
                              </Button>
                           </a>
                           </div>
                           <div>
                           <a href="https://www.linkedin.com/in/a-nekrasov" target="_blank" rel="noopener noreferrer">
                              <Button className="m-2" variant="primary">
                                 LinkedIn
                              </Button>
                           </a>
                        </div>
                     </Col>
                  </Row>
               </Col>
            </Row>
         </Container>
      </div> 
      </div>
   )
}

export default About;
