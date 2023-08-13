import React from "react";
import About from "./about";
import Contact from "./contact";
import Projects from "./projects";
import Skills from "./skills";
import "../css/index.css";
import Header from "./header";
function Body(){
    return(
        <div className="body">
            <section id="header">
                <Header />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="contact">
                <Contact />  
            </section>
        </div>
    );
}
export default Body;