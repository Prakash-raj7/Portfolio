import React from "react";
import "../css/contact.css";
import Separator from "./common/separator";
import SocialContact from "./common/social-contact";
function Contact(){
    return(
        <div className="contact">
            <Separator />
            <label className="title">Contact</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>I am currently looking for jobs. I worked on reactJs,   Javascript,Express, Java and others. I am also looking to collaborate in open-source projects.</p>
                    <p>Want to get in touch? Contact me on any of the platform.</p>
                    <SocialContact />
                </div>
            </div>
        </div>
    );
}
export default Contact;