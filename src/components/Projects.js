import React, { Component } from "react";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { faSearchLocation, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";


export default class Projects extends Component {

    render() {

        return (
          <Fade>
            <div className="container" id="projects">
              <div className="projects-container">
                <h1>PROJECTS &amp; EXPERIENCE</h1>
                <div className="projects-grid">
                  <div class="gradient-border">
                    <Card>
                      <Card.Body>
                        <Card.Title>
                          <strong>Projects with Underserved Communities</strong>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          <em>Project Manager</em>
                        </Card.Subtitle>
                        <hr/>
                        <Card.Text>
                          Headed a multi-year humanitarian engineering project for
                          a community in India. I was elected to lead a team of seven undergraduates and coordinate
                          efforts with international stakeholders while managing a budget of $25,000.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                  <div class="gradient-border">
                    <Card>
                      <Card.Body>
                        <Card.Title>
                          <strong>Human A.I. Interactions (HAI) Lab</strong>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          <em>Undergraduate Researcher</em>
                        </Card.Subtitle>
                        <hr/>
                        <Card.Text>
                          Exploring the development of ethical A.I. frameworks for COVID-19 resource allocation and graduate school admissions.
                          I'm currently creating machine learning models for predicting graduate student success in the iSchool.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                  <div class="gradient-border">
                    <Card>
                      <Card.Body>
                        <Card.Title>
                          <strong>Strauss Center for International Security &amp; Law</strong>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          <em>A.I. Policy Researcher</em>
                        </Card.Subtitle>
                        <hr/>
                        <Card.Text>
                          Examining policy development regarding regulation of lethal autonomous weapons systems (LAWS) in warfare.
                          I'm drafting policy memos and presenting them to lawmakers in Washington, D.C. in the winter.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                  <div class="gradient-border">
                    <Card>
                      <Card.Body>
                        <Card.Title>
                          <strong>TAVtech Entrepreneurship Fellowship</strong>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          <em>Data Science Fellow</em>
                        </Card.Subtitle>
                        <hr/>
                        <Card.Text>
                          Selected as a Data Science Fellow by NYU to travel to Tel Aviv, Israel to explore machine learning technologies.
                          This culminated in a project I led for disease prevention through social media tracking and NLP techniques.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                  <div class="gradient-border">
                    <Card>
                      <Card.Body>
                        <Card.Title>
                          <strong>Texas Product Engineering (TPEO)</strong>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          <em>Product Manager</em>
                        </Card.Subtitle>
                        <hr />
                        <Card.Text>
                          Managing team of two engineers and a designer to create a "prehabilition" application with 
                          the Dell Medical School. I've been coordinating with stakeholders to create features and 
                          implementation while assisting development in React Native.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                  <div class="gradient-border">
                    <Card>
                      <Card.Body>
                        <Card.Title>
                          <strong>Humanitarian Engineering Committee</strong>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          <em>Founding Member</em>
                        </Card.Subtitle>
                        <hr/>
                        <Card.Text>
                          Establishing the Humanitarian Engineering Institute at UT Austin to 
                          expand humanitarian engineering efforts on campus. I'm working with faculty members
                          and peers to create phasing plans to make the Institute a reality.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        )
    }
}
