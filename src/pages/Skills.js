import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RoundSkills from "../components/RoundSkills";
import SkillRight from "../Images/skillsRight.gif";
export default function Skills() {
  return (
    <Container className="skill-section">
      <Row>
        <Col className="left-sillSection">
          <h1>My Skills</h1>
          <h5>
            I'm passionate about curating beautiful user experiences using
            cutting-edge frontend architecture. My mission is to blend
            aesthetics and functionality seamlessly, staying updated with the
            latest trends. Crafting intuitive, visually appealing interfaces is
            not just my job, it's my calling
          </h5>
          <RoundSkills />
        </Col>
        <Col className="right-skillSection">
            <img src={SkillRight} alt="Skill Right"/>
        </Col>
      </Row>
    </Container>
  );
}
