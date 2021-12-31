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
                Hi! I'm currently studying in Taoyuan, Taiwan.
            </p>
              <p>
                I always enjoy trying new things and embracing new technologies, whether it be in human-centered A.I. or website development. Therefore, developing applications 
                that can benefit our daily lives has gradually become my ambition and dream.
              </p>
              <p>
                I've previously held a one-year internship in fornt-end web development and chatbot design.
                Moreover, based on my interest in daily life issue, I developed few projects to solve the problems.
                With those professional experiences, I'm now hoping to bring all these skills together to another stage of learning in HCI or Data Science field.
            </p>
              <p>
                Here's a list of technologies I've been working with :
            </p>
            </div>
            <div className="about-components">
              <div className="about-lists">
                <ul>
                  <li>Python</li>
                  <li>JavaScript</li>
                  <li>Java</li>
                  <li>HTML/CSS</li>
                </ul>
                <ul>
                  <li>Ruby</li>
                  <li>Ruby on Rails</li>
                  <li>Vue.js</li>
                  <li>Laravel</li> 
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
