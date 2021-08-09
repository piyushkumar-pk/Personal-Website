import React from "react";

const Menu = ({ themes }) => (
    <div>
        {/* <!-- Nav Bar --> */}
        <nav className="navbar navbar-expand-lg navbar-primary" style={{ marginBottom: 0 }}>
            <a className="navbar-brand" href="/#aboutme" style={themes ? { marginLeft: "15%", marginTop: '2%', color: "#aed6f1" } : { marginLeft: "15%", marginTop: '2%' }}>About Me</a>
            <button className="navbar-toggler navbar-dark bg-primary" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ marginLeft: "35%", marginTop: '2%' }}>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" style={themes ? { color: "#aed6f1" } : {}} href="/#contactme">Contact Me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" style={themes ? { color: "#aed6f1" } : {}} href="/#myskills">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" style={themes ? { color: "#aed6f1" } : {}} href="#myprojects">My Projects</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
);

export default Menu;