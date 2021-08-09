import React from "react";
import myskillsData from "../data/myskill.json";

const MySkills = () => {

    const leftRight = (data) => {
        if (data._id % 2 === 0) {
            return (
                <div className="skill-row mt-4"  >
                    <img style={{ maxHeight: '35%',minHeight:'33%',minWidth:"43%" ,maxWidth: '45%', float: "right", marginLeft: "30px" }} src={data.image} alt={data.name} />
                    <h3 style={{ marginBottom: '3%'}}>{data.name}</h3>
                    <p>{data.description}</p>
                </div>
            );
        } else {
            return (
                <div className="skill-row mt-4">
                    <img style={{ maxHeight: '35%',minHeight:'33%',minWidth:"43%" ,maxWidth: '45%', float: "left", marginRight: "30px" }} src={data.image} alt={data.name} />
                    <h3 style={{ marginBottom: '3%'}}>{data.name}</h3>
                    <p>{data.description}</p>
                </div>

            );
        }
    };

    return (
        <div id="myskills" style={{ marginBottom:'15%'}}>
            <h2 className="my-skills" style={{marginBottom:"7%"}}>My Skills.</h2>
            {myskillsData.map((p, i) => (
                <div key={i} style={{marginBottom :"10%"}}>
                    {leftRight(p)}
                </div>
            ))}
        </div>
    );
};

export default MySkills;