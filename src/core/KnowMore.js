import React from "react";
import { Link } from "react-router-dom";
import data from "../data/my_projects.json"

const KnowMore = ({ match }) => {

    const id = match.params.id;

    const visitHere = (link) => {
        if (link) {
            return (
                <Link to={{ pathname: `${link}` }} target="_blank">
                    <button className="btn btn-outline-info mt-5 mb-3">Visit Here</button>
                </Link>
            );
        }
    };
    const redirect = (d, id) => {
        if (d._id === id) {
            return (
                <div className="container" style={{ border: "solid", borderColor: 'red' }}>
                    <div>
                        <h2 className="mb-4" style={{ backgroundColor: "blueviolet", color: "whitesmoke" }}>{d.name}</h2>
                        <div className="mt-4">
                            <div className="card" style={{ maxHeight: '50%', maxWidth: '55%', float: "left", marginRight: "5px", border: 'solid', borderColor: "blueviolet" }}>

                                <img className="card-body mb-3" style={{ maxHeight: '95%', maxWidth: '100%', }} src={d.image} alt={d.name} />
                            </div>
                            <div className="card ml-3" style={{ border: 'solid', borderColor: 'blueviolet', margin: '1%' }}>
                                <h6 style={{ marginTop: '5%' }}>Components Use:- {d.components_use} </h6>
                                <h6>Style:- {d.style}</h6>
                                <h6>Database Use:- {d.database}</h6>
                                <h6>External API Use:- {d.externalapi} </h6>
                            </div>
                            <div className="card" style={{ border: 'solid', borderColor: 'red', margin: '1%' }}>
                                <h5 className="card-header">Pages:-</h5>
                                <h5 className="card-body" style={{ minHeight: '175px' }}> {d.pages} </h5>
                            </div>
                        </div>
                    </div>
                    {visitHere(d.project_link)}
                    <div className="mt-4">
                        <p style={{ color: '#66bfbf' }}>{d.about}</p>
                    </div>
                </div>
            );
        }
    };

    return (
        <div style={{ backgroundColor: '#1C2833' }}>
            <div className="mb-3">KnowMore About</div>
            <div className="">
                {data.map((p, i) => (
                    <div key={i} style={{ marginBottom: "3%" }}>
                        {redirect(p, id)}
                    </div>
                )
                )}
                <div style={{ marginTop: '5%' }}>
                    <Link to="/#myprojects"><button className="btn btn-outline-primary mb-5"> Back to Home </button></Link>
                </div>
            </div>
        </div>
    );
};

export default KnowMore;