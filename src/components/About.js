import React, { Component } from "react";
import {faNodeJs, faReact, faPython, faJava} from "@fortawesome/free-brands-svg-icons";
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
                Hello! I'm an aspiring engineer currently studying in Austin, TX.
            </p>
              <p>
                I love trying my hand in new things, whether it be in human-centered A.I. or website development. My goal is to combine my
                passions for humanitarian work and technology to make an impact on
              international communities.{" "}
              </p>
              <p>
                I've previously held three internships in full-stack engineering
                and ML research. I've made it a point to have breadth in my
                professional experiences and now I'm hoping to bring all these
                skills together this summer in an analytics-facing Product
                Management or Data Science role.
            </p>
              <p>
                Here's a list of technologies I've been working with recently:
            </p>
            </div>
            <div className="about-components">
              <div className="about-lists">
                <ul>
                  <li>Python</li>
                  <li>JavaScript</li>
                  <li>Java</li>
                  <li>C/C++</li>
                </ul>
                <ul>
                  <li>Node.js</li>
                  <li>React</li>
                  <li>HTML/CSS</li>
                  <li>.NET Core (C#)</li>
                </ul>
              </div>
              <div className="about-icons">
                <FontAwesomeIcon icon={faPython} size="4x" />
                <FontAwesomeIcon icon={faNodeJs} size="4x" />
                <FontAwesomeIcon icon={faReact} size="4x" />
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
