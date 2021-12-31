import React, { Component } from "react";
import {Link} from "react-scroll";

export default class NavBar extends Component {
    render() {
        return (
          <div className="navigation-bar">
            <div className="navigation-link">
              <span />
              <span />
              <span />
              <span />
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-50}
                duration={800}
              >
                HOME
              </Link>
            </div>
            <div className="navigation-link">
              <span />
              <span />
              <span />
              <span />
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-60}
                duration={800}
              >
                ABOUT
              </Link>
            </div>
            <div className="navigation-link">
              <span />
              <span />
              <span />
              <span />
              <Link
                activeClass="active"
                to="work"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              >
                WORK
              </Link>
            </div>
            {/* <div className="navigation-image">
              <a href="#">
                <p>BUILT BY</p>
                <img src={require("../../static/new-logo.png")} alt="logo" />
              </a>
            </div> */}
            <div className="navigation-link">
              <span />
              <span />
              <span />
              <span />
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              >
                PROJECTS
              </Link>
            </div>
            <div className="navigation-link">
              <span />
              <span />
              <span />
              <span />
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              >
                CONTACT
              </Link>
            </div>
            <div className="navigation-link">
              <span />
              <span />
              <span />
              <span />
              <a
                href={require("../../public/Expo-Resume.pdf")}
                target="_blank"
              >
                RESUME
              </a>
            </div>
          </div>
        )
    }
}
