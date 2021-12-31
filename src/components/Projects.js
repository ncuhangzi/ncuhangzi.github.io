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
                          <strong>Personal Outfit Recommendation System</strong>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          <em>Graduate Researcher</em>
                        </Card.Subtitle>
                        <hr/>
                        <Card.Text>
                        Created a recommendation system that considered users’ clothing-related general compatibility and personal 
                        preferences with an integrated attention mechanism based on a Bayesian Personalized Ranking (BPR) algorithm.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                  <div class="gradient-border">
                    <Card>
                      <Card.Body>
                        <Card.Title>
                          <strong>Fake News Detection Web Extension</strong>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          <em>Undergraduate Researcher</em>
                        </Card.Subtitle>
                        <hr/>
                        <Card.Text>
                          Devised a web extension that helps users identify fake news from web pages by applying a trained LSTM model.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                  <div class="gradient-border">
                    <Card>
                      <Card.Body>
                        <Card.Title>
                          <strong>Information Management Student Association</strong>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          <em>Design group leader</em>
                        </Card.Subtitle>
                        <hr/>
                        <Card.Text>
                          Assisted in the design and layout of public spaces and activities of the department.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                  <div class="gradient-border">
                    <Card>
                      <Card.Body>
                        <Card.Title>
                          <strong>Panfes, PanSci</strong>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          <em>Volunteer</em>
                        </Card.Subtitle>
                        <hr/>
                        <Card.Text>
                        An organization that focuses on inviting scientists, educators, enthusiasts in various fields to 
                        contemplate the scientific aspects of social issues in public forums. I was responsible for the reception of invited speakers.
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
