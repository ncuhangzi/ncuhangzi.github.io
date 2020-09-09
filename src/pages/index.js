import React from "react";
import NavBar from "../components/Navbar";
import SideBar from "../components/Sidebar.js";
import Home from "../components/Home";
import About from "../components/About";
import Work from "../components/Work";
import Stats from "../components/Stats";
import SEO from "../components/seo";
import ScrollButton from "../components/ScrollButton";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Particle from "../components/Particle";
import {Helmet} from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.css";


export default function Application() {
  return (
    <div className="app">
      <SEO title={"ECE & Math"} />
      <div className="loading">
        <div className="obj"></div>
        <div className="obj"></div>
        <div className="obj"></div>
        <div className="obj"></div>
        <div className="obj"></div>
        <div className="obj"></div>
        <div className="obj"></div>
        <div className="obj"></div>
      </div>
      <NavBar/>
      <SideBar/>
      <ScrollButton/>
      <Home/>
      <Stats/>
      <About/>
      <Work/>
      <Projects />
      <Contact />
    </div>
  )
}
