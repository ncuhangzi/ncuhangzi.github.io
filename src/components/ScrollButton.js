import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faAngleUp} from "@fortawesome/free-solid-svg-icons";

export default class ScrollButton extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            is_visible: false
        }
    }

    // add visibility on scrolling event
    componentDidMount() {
        var scrollComponent = this;
        document.addEventListener("scroll", function(e) {
            scrollComponent.toggleVisibility();
        });
    }

    toggleVisibility(){
        if(window.pageYOffset > 200){
            this.setState({
                is_visible: true
            });
        } else {
            this.setState({
                is_visible: false
            })
        }
    }

    scrollToTop(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    render() {
        const {is_visible} = this.state;
        return (
            <div className="scroll-button">
                {is_visible && (
                    <div onClick={() => this.scrollToTop()}>
                        <FontAwesomeIcon icon={faAngleUp}/>
                    </div>
                )}
            </div>
        );
    }
}
