import React from 'react';
import './SplashScreen.css';
import Cloudspace from "../Assets/Cloudspace.png";

const SplashScreen = () => {
    return (
        <div className="splash-container">
            <img src={Cloudspace} alt="Cloudspace logo" className="Cloudspace" />
            <div className="loader"></div>
        </div>
    );
};

export default SplashScreen;
