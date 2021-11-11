import React from 'react';

import tranning from '../image/training.png';

const centerH2 = {
    textAlign: 'center',
    marginTop: '50px',
    color: "#030404"
}
const centerImg = {
    display: "block",
    margin: "20px auto",
    width: "100%"
}
const Experience = () => {
    return (
        <div className="container">
            <div className="container">
                <h2 style={centerH2}>Oups, cette page est en cours de maintenance </h2>
                <img style={centerImg} src={tranning} alt="experience" />
            </div>
        </div>
    )
}
export default Experience
