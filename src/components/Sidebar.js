import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {faLinkedinIn, faGithub, faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faInbox} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default class SideBar extends Component {
    render() {
        return (
            <ButtonGroup vertical>
                <a href="https://www.linkedin.com/in/fan-chi-yeh-a5652b141" target="_blank"> <FontAwesomeIcon icon={faLinkedinIn} size="lg"/> </a>
                <a href="https://github.com/ncuhangzi" target="_blank">< FontAwesomeIcon icon={faGithub} size="lg"/> </a>
                <a href="mailto:st30201@gmail.com" target="_blank">< FontAwesomeIcon icon={faInbox} size="lg"/> </a>
                <a href="https://www.facebook.com/profile.php?id=100000054322114" target="_blank">< FontAwesomeIcon icon={faFacebook} size="lg"/> </a>
                <div class="vertical-line"></div>
            </ButtonGroup>
        )
    }
}
