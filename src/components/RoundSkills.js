import React from "react";
import HTML from "../Images/html.png";
import CSS from "../Images/css.png";
import JS from "../Images/js.png";
import JQuery from "../Images/jquery.png";
import ReactImg from "../Images/react.png";
import NodeJs from "../Images/nodejs.png";
import Bootstrap from "../Images/bootstrap.png";
import MongoDB from "../Images/mongoDb.png";
import Git from "../Images/git.png"
import Jira from '../Images/jira.png';
import ChakraUI from '../Images/chakraUI.png';
import SFC from "../Images/commerce.png";

export default function RoundSkills() {
  return (
    <div className="skill-icons">
      <h4>LANGUAGES AND TOOLS</h4>
        <img src={HTML} alt="HTML logo" />
        <img src={CSS} alt="css logo" />
        <img src={JS} alt="JS logo" />
        <img src={JQuery} alt="Jquery logo" />
      <h4>LIBRARIES AND FROMEWORKS</h4>
        <img src={ReactImg} alt="React logo" />
        <img src={Bootstrap} alt="Bootstrap logo" />
        <img src={ChakraUI} alt="Chakra logo" />
        <img src={SFC} alt="sfc logo" style={{width:"100px",marginLeft:"0"}} />
      <h4>BACKEND AND DATABASE</h4>
        <img src={NodeJs} alt="Nodejs logo" style={{width:"100px"}} /> 
        <img src={MongoDB} alt="Mongo logo" /> 
      <h4>OTHER</h4>
        <img src={Git} alt="git logo" /> 
        <img src={Jira} alt="jira logo" /> 
    </div>
  );
}

