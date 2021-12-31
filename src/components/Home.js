import React, {Component} from "react";
import TextLoop from "react-text-loop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGalacticRepublic, faPython, faNodeJs, faReact, faJava, faCss3, faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode, faRoute, faUniversity, faHandshake, faUtensils } from "@fortawesome/free-solid-svg-icons";
import Stats from "../components/Stats";

export default class Home extends Component{
    render(){
        return (
          <div className="container" id="home">
            <div className="top-container">
              <p>HI THERE! MY NAME IS</p>
              <h1>Fan-Chi Yeh</h1>
              <h2 className="other">
                I'm <span> </span>
                <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
                  <span>
                    a Student <FontAwesomeIcon icon={faUniversity} />
                  </span>
                  <span>
                    an Engineer <FontAwesomeIcon icon={faLaptopCode} />
                  </span>
                  <span>
                    a Star Wars Fanatic{" "}
                    <FontAwesomeIcon icon={faGalacticRepublic} />
                  </span>
                  <span>
                    a Traveler <FontAwesomeIcon icon={faRoute} />
                  </span>
                  <span>
                    a Food Junkie <FontAwesomeIcon icon={faUtensils} />
                  </span>
                </TextLoop>
              </h2>
              <p>
                I'm an undergraduate studying{" "}
                <strong>Electrical &amp; Computer Engineering (ECE) Honors and Mathematics</strong>{" "}
                at the{" "}
                <strong>University of Texas at Austin</strong>
                . I dabble in full-stack web development, human-centered A.I.,
                product management, and humanitarian engineering!
              </p>
            </div>
            <div class="gradient-border hvr-bounce-in">
              <img
                src={require("../../static/new-profile-pic.jpg")}
                alt="profile-pic"
              ></img>
            </div>
          </div>
        )
    }
}