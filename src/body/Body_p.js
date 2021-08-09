import React from "react";
import MyProjects from "./MyProjects";
import MySkills from "./MySkills";

const Body_p = ({ themes }) => {
    const backgroundtheme = (themes) => {
        if (themes) {
            return 'jumbotroun2'
        } else {
            return 'middle-container'
        }
    }
    return (
        <div >

            <div className={backgroundtheme(themes)} style={themes ? { color: '#D0ECE7 ' } : {}}>
                <div className="profile" id="aboutme">
                    <img className="profilepic" src="images/pk.png" style={{maxHeight:'220px',maxWidth:'220px'}} alt="pk-profile" />
                    <h2>Hello.</h2>
                    <p className="about-me">I am full stack Web and app developer.</p>
                    <p className="about-me">I love to work on new projects and learning new things.</p>
                </div>
                <hr />
                <div className="skills" style={{}}>
                    <MySkills />
                    <MyProjects themes={themes} />
                </div>
                <hr />
                <div className="contact-me">
                    <h2>Get In Touch</h2>
                    <h3>Wanna know more about web / App development</h3>
                    <p className="love-pizza">If you wanna gain more knowlegde about web/App development please feel free to contact me below.I'd love to share my knowlegde with you.</p>
                    <a className="btn_s" href="mailto:alokpiyush.20166@gmail.com">CONTACT ME</a>
                </div>
            </div>
        </div>
    )
};

export default Body_p;