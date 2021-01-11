import React from 'react'
import Typewriter from "typewriter-effect";
import styled from "styled-components";



const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  div {
    color: white;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 300;
    letter-spacing: 7px;
    .main {
      font-size: 40px;
    }
    .sub {
      font-size: 35px;
      letter-spacing: 2px;
    }
  }
`;


const titleMessage = () => (
   <MyTitleMessage>
     <div className="titleMessage">
       <div className="heading">
         <div className="main text-center mb-3">
           Welcome to my portfolio website! My name is 
           <br />
           <span>
             <strong>Artem Nekrasov</strong>
           </span>
         </div>
         <div className="sub">
           <Typewriter
             options={{
               strings: ["Student", "Full-stack Developer", "Front-end Developer", "Learner"],
               autoStart: true,
               loop: true,
               delay: 50
             }}
           />
         </div>
       </div>
     </div>
   </MyTitleMessage>
 );

export default titleMessage
