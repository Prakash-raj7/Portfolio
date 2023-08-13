import React from "react";
import "../css/about.css";
import SocialContact from "./common/social-contact";
function About(){
    return(
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hello There ,I am,
                    <br /><span className="name">Prakashraj</span>
                    <br /> I am an enthusiast Full-Stack developer.
                </div>
                <div className="about-photo">
                    <img src={require("../images/coding.png")} className="picture" />
                </div>
            </div>
            <SocialContact />
        </div>
    );
}
export default About;