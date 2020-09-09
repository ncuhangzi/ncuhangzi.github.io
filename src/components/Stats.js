import React, { Component } from "react";
import CountUp from "react-countup";
import { faCode, faHeadSideMask, faBed, faMapPin, faPeopleCarry, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
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
                <CountUp start={0} end={8000} duration={1000} delay={4.5} />
              </div>
            </div>
            <div className="stat">
              <FontAwesomeIcon icon={faMapPin} />
              <div className="stat-counter">
                <p>
                  <strong>COUNTRIES VISITED</strong>
                </p>
                <CountUp start={0} end={19} duration={30} delay={4.5} />
              </div>
            </div>
            <div className="stat">
              <FontAwesomeIcon icon={faGraduationCap} />
              <div className="stat-counter">
                <p>
                  <strong>NUMBER OF MAJORS</strong>
                </p>
                <CountUp start={0} end={2} duration={2} delay={4.5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
