import React, { Component } from "react";
import { faNodeJs, faReact, faPython, faJava } from "@fortawesome/free-brands-svg-icons";
import { faInbox, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fade from "react-reveal/Fade";

export default class Contact extends Component {
  render() {
    return (
      <Fade>
        <div className="container" id="contact">
          <div className="contact-container">
            <h1>CONTACT</h1>
            <p>I'm currently seeking Data Science/Product Management opportunties for Summer 2021!
              Feel free to send me an email at <a href="mailto:colinphillips@utexas.edu" target="_blank">colinphillips@utexas.edu</a> 
              &nbsp; or DM me on <a href="https://www.linkedin.com/in/cphillips17" target="_blank">LinkedIn</a>. </p>
              <br/>
            <p><strong>&#169; Built by Colin Phillips</strong></p>
          </div>
        </div>
      </Fade>
    )
  }
}
