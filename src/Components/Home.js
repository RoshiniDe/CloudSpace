import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Cloudspace1 from '../Assets/Cloudspace1.png';
import cloud from '../Assets/cloud.png';

const HomePage = () => {
    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate('/signup');
    };

    return (
        <div className="home-container">
            <nav className="navbar">
                <img src={Cloudspace1} alt="Cloud" className="Cloudspace1"/>
                <ul className="nav-links">
                    <li>Home</li>
                    <li>Features</li>
                    <li>About Us</li>
                    <li>Support</li>
                    <li>Contact</li>
                </ul>
                <div className="nav-buttons">
                    <button className="login-btn">Log in</button>
                    <button className="signup-btn" onClick={handleSignUp}>Sign up</button>
                </div>
            </nav>

            <div className="hero-section">
                <img src={cloud} alt="cloud" className="cloud"/>
                <div className="hero-text">
                    <h1>Store Smart.</h1>
                    <h1>Access Anywhere.</h1>
                </div>
            </div>

            <div className="features-section">
                {[
                    {
                        title: "Secure Cloud Storage",
                        desc: "Your files are encrypted from end to end, ensuring complete privacy and data safety."
                    },
                    {
                        title: "Drag & Drop Uploads",
                        desc: "Upload files instantly with a smooth drag-and-drop interface—no hassle, just done."
                    },
                    {
                        title: "Real-Time Syncing",
                        desc: "Keep all your devices updated automatically whether you're on desktop, mobile, or tablet."
                    },
                    {
                        title: "15 GB Free Storage",
                        desc: "Get 15GB free space to start storing your personal or work files instantly."
                    },
                    {
                        title: "Share & Collaborate",
                        desc: "Share files or folders with one-click links and set custom permissions for team collaboration."
                    }
                ].map((feature, index) => (
                    <div key={index} className="feature-card">
                        <h3>{feature.title}</h3>
                        <p>{feature.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
