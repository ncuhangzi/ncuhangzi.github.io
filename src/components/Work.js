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
                            <img src={require("../../static/northrop.jpg")}></img>
                            <p>NORTHROP GRUMMAN</p>
                          </div>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          <div>
                            <img src={require("../../static/arl.png")}></img>
                            <p>APPLIED RESERACH LABS</p>
                          </div>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          {" "}
                          <div>
                            <img src={require("../../static/oden-black.png")} />
                            <p>ODEN INSTITUTE</p>
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
                            <li className="outer"><strong className="position">Software Engineer &amp; PM Intern @ Northrop Grumman</strong> </li>
                            <li className="outer"><FontAwesomeIcon icon={faCalendarAlt} /> &nbsp; June 2020 - August 2020 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<FontAwesomeIcon icon={faSearchLocation} /> &nbsp; Rolling Meadows, Illinois</li>
                            <li className="outer">
                              <ul>
                                <li className="inner">
                                  <div> <FontAwesomeIcon icon={faAngleRight} /> <p>Developed a full-stack web application on ASP.NET Core for asset management and tracking for the Integrated Data Operations Group (IDO)</p></div>
                                </li>
                                <li className="inner">
                                  <div> <FontAwesomeIcon icon={faAngleRight} /> <p>Utilized C# and SQL Server on backend with Entity Framework Core using a standard MVC architecture</p></div>
                                </li>
                                <li className="inner">
                                  <div> <FontAwesomeIcon icon={faAngleRight} /> <p>Fully designed and prototyped UI/UX on Figma and created interactive client-side pages with the Blazor Framework (C#, HTML/CSS) </p></div>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p className="descriptions">
                          <ul>
                            <li className="outer"><strong className="position">Software Engineer Intern @ ARL</strong> </li>
                            <li className="outer"><FontAwesomeIcon icon={faCalendarAlt} /> &nbsp; September 2019 - February 2020 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<FontAwesomeIcon icon={faSearchLocation} /> &nbsp; Austin, Texas</li>
                            <li className="outer">
                              <ul>
                                <li className="inner">
                                  <div> <FontAwesomeIcon icon={faAngleRight} /> <p>Worked in the Space and Geophysics Laboratory (SGL) on testing data acqusition scripts for GPS satellites</p></div>
                                </li>
                                <li className="inner">
                                  <div> <FontAwesomeIcon icon={faAngleRight} /> <p>Developed and tested scripts in C and Python using static and dynamic testing within a Linux environment</p></div>
                                </li>
                                <li className="inner">
                                  <div> <FontAwesomeIcon icon={faAngleRight} /> <p>Overhauled testing infrastructure to transition from CUnit towards Robot Testing Framework for acceptance testing </p></div>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p className="descriptions">
                          <ul>
                            <li className="outer"><strong className="position">Reseach Intern @ Oden Institute</strong> </li>
                            <li className="outer"><FontAwesomeIcon icon={faCalendarAlt} /> &nbsp; June 2019 - August 2019 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<FontAwesomeIcon icon={faSearchLocation} /> &nbsp; Austin, Texas</li>
                            <li className="outer">
                              <ul>
                                <li className="inner">
                                  <div> <FontAwesomeIcon icon={faAngleRight} /> <p>Researched deep learning and its application for computational fluid mechanics as a Moncrief Fellow</p></div>
                                </li>
                                <li className="inner">
                                  <div> <FontAwesomeIcon icon={faAngleRight} /> <p>Applied novel neural network architectures (ODE-nets) and normalizing flow models to characterize turbulent pipe flow dynamics </p></div>
                                </li>
                                <li className="inner">
                                  <div> <FontAwesomeIcon icon={faAngleRight} /> <p>Created Jupyter Notebook and MATLAB demos, while using the OpenFOAM toolbox to obtain simulation data </p></div>
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
