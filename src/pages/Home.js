import React from "react";
import Typewriter from "typewriter-effect";
import { FaLinkedinIn, FaInstagram} from "react-icons/fa";
import {AiOutlineMail} from 'react-icons/ai'
import {Container,Row,Col,Button} from 'react-bootstrap';
import Img from "../Images/a1.png";
import GlobeAnimation from "../components/GlobeAnimation";

export default function Home() {
  return (
    <>    
      <GlobeAnimation />
        <Container className="home-section">
          <Row>
        <Col className="home-left">
          <div className="left-home-text">
            <h1>
              Hello <span class="wave">👋</span>
            </h1>
            <h1>I'm <span>Ashirwad Barnwal</span></h1>
            <h1>
              <Typewriter
                options={{
                  strings: ["Salesforce Developer!!", "Front-end Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="social-icons">
            <a href="https://www.linkedin.com/in/ashirwad-barnwal-06544b149/" target="_blank" className="linkedIn"><FaLinkedinIn /></a>
            <a href="mailto: ashirwadbarnwal15@gmail.com" target="_blank" className="mail"><AiOutlineMail /></a>
            <a href="https://www.instagram.com/ashirwad.ai/" target="_blank" className="linkedIn"><FaInstagram /></a>
            </div>
          </div>
        </Col>
        <Col className="home-right">
            <img className="home-img" src={Img} alt="alt" width={"100%"} height={"100%"}/>
        </Col>
          </Row>
        </Container>
    </>

  );
}
