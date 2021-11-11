import React from 'react';

import error from '../image/error.png';

const centerH2 = {
    textAlign: 'center',
    marginTop: '50px',
    color: "#030404"
}
const centerImg = {
    display: "block",
    margin: "10px auto",
    width: "100%"
}
const ErrorPage = () => {
    return (
        <div className="container">
            <div className="container">
                <h2 style={centerH2}>Oups, cette page n'existe pas </h2>
                <img style={centerImg} src={error} alt="error page" />
            </div>
        </div>
    )
}
export default ErrorPage
