import React from 'react';

import Zuri_logo from "../../assets/Zuri.Internship_Logo.svg";
import I4G_Logo from "../../assets/I4G.svg";
import "./index.css";

function Footer() {
    return (
        <footer>
            <div>
                <img src={Zuri_logo} alt="Zuri_logo" />
            </div>
            <p>HNG Internship 9 Frontend Task</p>
            <div>
                <img src={I4G_Logo} alt="I4G_Logo" />
            </div>
        </footer>
    )
}


export default Footer;