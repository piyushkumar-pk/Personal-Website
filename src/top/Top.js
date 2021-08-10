import React from "react";
import Menu from "../core/Menu";

const Top = ({ themes }) => {

    const checkColor = (theme) => {
        if (!theme) {
            return 'container-fluid jumbotroun'
        } else {
            return 'container-fluid jumbotroun2'
        }
    };


    return (
        <div className={checkColor(themes)}>
            <div style={{
                backgroundImage: themes === false ? (`url("images/sun.png")`) : (`url("images/moon.png")`), backgroundRepeat: 'no-repeat', backgroundSize: themes === false ? '45% 45%' : '41% 41%', backgroundPosition: 'center'
            }}>
                <Menu themes={themes} />
                <div className="row" >
                    <div className="" >
                        <div style={{ marginLeft: '44%', marginBottom: 0 }}>
                            <strong className="col-md-7" >I'm Piyush.</strong>
                            <h2 className="col-md-8" style={{ marginLeft: "22%" }} >a programmar.</h2>
                        </div>
                        <div className="mt-5" style={{
                            backgroundImage: `url("images/mountain.png")`, backgroundRepeat: 'no-repeat', backgroundSize: '90% 95%', backgroundPosition: 'center'
                        }}>
                            <div className="mr-4" style={{ position: 'relative', marginRight: '1%', width: '100%' }}>
                                <img className="col-sm-12 cloudMove1" src="images/cloudLight.png" alt="cloud-img" style={{ width: '20%' }} />
                                <img className="col-sm-12 cloudMove3" src="images/cloudLight.png" alt="cloud-img" style={{ width: '10%', position: '', top: '2%' }} />
                                <img className="col-sm-12  cloudMove2" src="images/cloudLight.png" alt="cloud-img" style={{ width: '20%', position: '', top: "3%" }} />
                                <img className="col-sm-12 cloudMove1" src="images/cloudLight.png" alt="cloud-img" style={{ width: '18%', position: 'absolute', top: "4%" }} />
                                <img className="col-sm-12 cloudMove2" src="images/cloudLight.png" alt="cloud-img" style={{ width: '22%', position: 'absolute', top: '5%' }} />
                                <img className="col-sm-12 cloudMove3" src="images/cloudLight.png" alt="cloud-img" style={{ width: '23%', position: 'absolute', top: "6%" }} />
                                <img className="col-sm-12 cloudMove1" src="images/cloudLight.png" alt="cloud-img" style={{ width: '15%', paddingBottom: '40%' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Top;