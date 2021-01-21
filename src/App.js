import './App.css';
import React from 'react';
//componenets 
import MyNavbar from "./components/myNavbar/myNavBar.jsx";
import Carousel from "./components/myCarousel/myCarousel.jsx";
import MyTitleMessage from "./components/titleMessage/titleMessage.jsx";
import About from './pages/about/about.jsx';
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from "react-parallax";
import Container from 'react-bootstrap/Container';
import Skills from './pages/skills/skills';
import Experience from './pages/experience/experience';
import Projects from './components/projects/projects';
import Contact from "./pages/contact/contact";
import Footer from "./components/footer/footer";

// import Particles from "react-particles-js";
// import { particles } from "./particles.js";


const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <Carousel />
      <MyTitleMessage />
      {/* <Particles
        className="particles particles-box"
        params={particles}
      /> */}
      {/* About me  */ }
      <div>
        {/* <Parallax
          blur={{ min: -1000, max: 1000 }}
          bgImage={require("./assets/img/parallex/background_reverse.webp")}
          bgImageAlt=""
          strength={-200}
        > */}
          {/* <div> */}
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          {/* </div> */}
        {/* </Parallax> */}
      </div>
      {/* skill */}
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <Skills />
          </Fade>
        </Container>
      </div>
      {/* experiences */}
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <Experience />
          </Fade>
        </Container>
      </div>
      {/* projects */}
      <div>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr/>
            <Projects />
          </Slide>
        </Container>
      </div>
      {/* contact */}
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <Contact />
          </Fade>
        </Container>
      </div>
      <div>
        <hr/>
        <Footer />
      </div>
    </div>
  );
};

export default App;
