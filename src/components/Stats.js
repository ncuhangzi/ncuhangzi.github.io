import React, { Component } from "react";
import CountUp from "react-countup";
import { faCode, faHeadSideMask, faBed, faMapPin, faPeopleCarry, faGraduationCap, faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {PieChart} from "react-minimal-pie-chart";

export default class Stats extends Component {
  render() {
    return (
      <div class="container" id="stats">
        <div className="stats-container-outer">
          <div className="stats-container">
            <div className="stat">
              <FontAwesomeIcon icon={faCode} />
              <div className="stat-counter">
                <p>
                  <strong>LINES OF CODE</strong>
                </p>
                <CountUp start={0} end={6000} duration={200} delay={4.5} />
              </div>
            </div>
            <div className="stat">
              <FontAwesomeIcon icon={faFolder} />
              <div className="stat-counter">
                <p>
                  <strong>GITHUB REPOS</strong>
                </p>
                <CountUp start={0} end={10} duration={5} delay={4.5} />
              </div>
            </div>
            <div className="stat">
              <FontAwesomeIcon icon={faGraduationCap} />
              <div className="stat-counter">
                <p>
                  <strong>NUMBER OF DEGREES</strong>
                </p>
                <CountUp start={0} end={3} duration={5} delay={4.5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
