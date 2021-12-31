import React, { Component } from "react";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCalendarAlt} from "@fortawesome/free-regular-svg-icons";
import {faSearchLocation, faAngleRight} from "@fortawesome/free-solid-svg-icons";

export default class Work extends Component {
  render() {
    return (
      <Fade>
        <div className="container" id="work">
          <div className="work-container">
            <h1>WORK</h1>
            <div className="work-contents">
              <Tab.Container defaultActiveKey="first">
                <Row>
                  <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          {" "}
                          <div>
                            <img src={require("../../static/LINE_Logo.jpeg")}></img>
                            <p>LINE Taiwan</p>
                          </div>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          <div>
                            <img src={require("../../static/NCULogo.png")}></img>
                            <p>National Central University</p>
                          </div>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={9}>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <p className="descriptions">
                          <ul>
                            <li className="outer"><strong className="position">Technical Assistant Intern @ LINE Taiwan</strong> </li>
                            <li className="outer"><FontAwesomeIcon icon={faCalendarAlt} /> &nbsp; July 2019 - July 2020 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<FontAwesomeIcon icon={faSearchLocation} /> &nbsp; Taipei, Taiwan</li>
                            <li className="outer">
                              <ul>
                                <li className="inner">
                                  <div> <FontAwesomeIcon icon={faAngleRight} /> <p>Responsible for development of front-end functions of the customer loyalty project “LINE GAME University,’’ a system with over 100,000 users</p></div>
                                </li>
                                <li className="inner">
                                  <div> <FontAwesomeIcon icon={faAngleRight} /> <p>Updated the game servers with a version control system (SVN) and wrote shell scripts for automated updates</p></div>
                                </li>
                                <li className="inner">
                                  <div> <FontAwesomeIcon icon={faAngleRight} /> <p>Designed chatbot templates for marketing campaigns with JSON</p></div>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p className="descriptions">
                          <ul>
                            <li className="outer"><strong className="position">Research Assistant @ NCU</strong> </li>
                            <li className="outer"><FontAwesomeIcon icon={faCalendarAlt} /> &nbsp; September 2020 - present &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<FontAwesomeIcon icon={faSearchLocation} /> &nbsp; Taoyuan, Taiwan</li>
                            <li className="outer">
                              <ul>
                                <li className="inner">
                                  <div> <FontAwesomeIcon icon={faAngleRight} /> <p>Worked in Professor Hu's LAB, responsible for calculating similarities for finding restaraunt with good bargain by google users reviews</p></div>
                                </li>
                                <li className="inner">
                                  <div> <FontAwesomeIcon icon={faAngleRight} /> <p>Proposed a new framework for personal outfit recommendation system, based on Bayesian Personal Ranking algorithm</p></div>
                                </li>
                                <li className="inner">
                                  <div> <FontAwesomeIcon icon={faAngleRight} /> <p>Prepared teaching materials for AI related python packages</p></div>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </p>
                      </Tab.Pane>

                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          </div>
        </div>
      </Fade>
    )
  }
}
