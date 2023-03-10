import React, { Component } from "react";
import {faNodeJs, faReact, faPython, faJava, faVuejs, faSketch} from "@fortawesome/free-brands-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fade from "react-reveal/Fade";

export default class About extends Component {
  render() {
    return (
      <Fade>
        <div className="container" id="about">
          <div className="about-container">
            <h1>ABOUT</h1>
            <div className="about-content">
              <p>
                Hi! I'm currently studying in Boston, Massachusetts.
            </p>
              <p>
                I always enjoy trying new things and embracing new technologies, whether it be in human-centered A.I. or website development. Therefore, developing applications 
                that can benefit our daily lives has gradually become my ambition and dream.
              </p>
              <p>
              I previously completed a one-year internship in front-end web development and chatbot design. In addition, I have developed several projects that aim to solve daily 
              life problems, including an outfit recommendation system based on BPR algorithm and a map-based global weather website created using Vue.js.
              Having gained these professional experiences 
              </p>
              <p>
              I am now looking forward to applying all these skills to tackle real-world issues. Hence, I am interested in exploring 
              any<strong>internship or co-op opportunities</strong> that may be available. Please feel free to contact me.
              </p>
            
              <p>
                Here's a list of technologies I've been working with :
            </p>
            </div>
            <div className="about-components">
              <div className="about-lists">
                <ul>
                  <li>Python</li>
                  <li>Java</li>
                  <li>JavaScript</li>
                  <li>HTML/CSS</li>
                </ul>
                <ul>
                  <li>Vue.js</li>
                  <li>Laravel</li>
                  <li>Ruby</li>
                  <li>Figma</li>
                  
                   
                </ul>
              </div>
              <div className="about-icons">
                <FontAwesomeIcon icon={faPython} size="4x" />
                <FontAwesomeIcon icon={faSketch} size="4x" />
                <FontAwesomeIcon icon={faVuejs} size="4x" />
                <FontAwesomeIcon icon={faJava} size="4x" />
                <span />
              </div>
            </div>
          </div>
        </div>
      </Fade>
    )
  }
}
