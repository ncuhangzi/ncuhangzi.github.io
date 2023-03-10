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
            <p>I'm currently seeking Summer/Fall Internship or Co-op opportunties for 2023!
              Feel free to contact me with email at <a href="mailto:st30201@gmail.com" target="_blank">st30201@gmail.com</a> 
              &nbsp; or DM me on <a href="https://www.linkedin.com/in/fan-chi-yeh" target="_blank">LinkedIn</a>. </p>
              <br/>
            <p><strong>&#169; Built by Fan-Chi Yeh</strong></p>
          </div>
        </div>
      </Fade>
    )
  }
}
