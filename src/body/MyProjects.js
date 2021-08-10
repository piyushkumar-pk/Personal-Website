import React from "react";
import { Link } from "react-router-dom";
import myProjectsData from "../data/my_projects.json";


const MyProjects = ({ themes }) => {
    return (
        <div id="myprojects" className="mt-5">
            <div className="container mt-5" style={{ backgroundColor: themes ? '#1C2833 ' : '#EAF6F6', borderRadius: "25px" }}>
                <h2 className="my-skills" style={{ padding: "5%", fontSize: '155%' }}>My Projects.</h2>
                <div className="row" style={{ margin: '1%' }}>
                    {myProjectsData.map((p, i) => (
                        <div className="col-md-4 col-sm-6 mb-5" key={i} >
                            <div className="" style={{ borderStyle: "solid", borderColor: p.project_link === "" ? "blueviolet" : "green", borderRadius: "5px 5px 25px 25px" }}>
                                <div className="" style={{ backgroundColor: "", }}>
                                    <Link to={`/KnowMore/${p._id}`}>
                                        <img className="" src={p.image} alt="app-developer" style={{ height: '80%', width: "100%", borderStyle: "solid", borderColor: 'black' }} />
                                    </Link>
                                    <Link to={`/KnowMore/${p._id}`}>
                                        <div className="mt-3" style={{ color: '#66BFBF' }}>{p.name}</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyProjects;