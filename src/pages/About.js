import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import GirlCodder from "../Images/boyCoder.png";

export default function About() {
  return (
    <div className='about-section'>
      <Container className="about">
       <h1 className="aboutme-heading">About Me..</h1>
        <Row className="about-section">
          <Col className="aboutsection-para col-7">
          I'm a self-taught Salesforce Developer and Front End developer from India, passionate about
          creating inclusive and responsive web experiences. With over 3
          years of expertise in Salesforce,HTML, CSS, Bootstrap, JavaScript, jQuery,
          React, NodeJS, MongoDB,and Java, I excel at
          translating designs into pixel-perfect, responsive interfaces. I'm
          driven by a love for problem-solving, maintainable code, and the
          desire to explore scalable distribution systems. Collaborating
          effectively and staying updated on industry trends, I'm dedicated
          to ensuring websites are accessible to all users, regardless of
          their devices.
          </Col>
          <Col className="about-img">
            <img className="boycoder" src={GirlCodder} alt="alt" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
