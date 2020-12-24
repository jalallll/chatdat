import React, {useState} from "react";
import {Link} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

const Landing = () => {
    

    return (
        <div className="landingOuter">
            <div className="landingInner">
            <h1>Please Login Or Signup</h1>
            <input placeholder="Username"></input>
            <input placeholder="Password"></input>
            </div>
        </div>

    );
}


export default Landing;