import React, {Component} from "react";
import TextLoop from "react-text-loop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGalacticRepublic, faPython, faNodeJs, faReact, faJava, faCss3, faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode, faRoute, faUniversity, faHandshake, faUtensils, faRobot, faPaintBrush, faDog } from "@fortawesome/free-solid-svg-icons";
import Stats from "../components/Stats";

export default class Home extends Component{
    render(){
        return (
          <div className="container" id="home">
            <div className="top-container">
              <p>HELLO! MY NAME IS</p>
              <h1>Fan-Chi Yeh</h1>
              {/* <h2 className="other">
                I'm <span> </span>
                <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
                  <span>
                    a Student <FontAwesomeIcon icon={faUniversity} />
                  </span>
                  <span>
                    an Engineer <FontAwesomeIcon icon={faLaptopCode} />
                  </span>
                  <span>
                    a Sci Fi Fan{" "}
                    <FontAwesomeIcon icon={faRobot} />
                  </span>
                  <span>
                    a Designer <FontAwesomeIcon icon={faPaintBrush} />
                  </span>
                  <span>
                    a Dog People <FontAwesomeIcon icon={faDog} />
                  </span>
                </TextLoop> 
              </h2> */}
              <p>
                I'm an graduate student studying{" "}
                <strong>Information Systems</strong>{" "}
                at {" "}
                <strong>Northeastern University</strong>
                . I am interested in web development, human-centered data science,
                agile software development, and UI/UX design!
              </p>
            </div>
            <div class="gradient-border hvr-bounce-in">
              <img
                src={require("../../static/new-profile-pic.jpeg")}
                alt="profile-pic"
              ></img>
            </div>
          </div>
        )
    }
}