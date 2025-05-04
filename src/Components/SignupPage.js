import React, { useState, useEffect } from 'react';
import './SignupPage.css';
import CloudspaceLogo from '../Assets/cloud.png';
import EncryptionImg from '../Assets/encryption.png';
import SharingImg from '../Assets/sharing.png';
import SyncingImg from '../Assets/syncing.png';

const carouselItems = [
    {
        type: 'logo',
        logo: CloudspaceLogo,
        tagline: 'Store Smart.Access Anywhere.',
    },
    {
        type: 'image',
        image: EncryptionImg,
        caption: 'End-to-End Encryption',
    },
    {
        type: 'image',
        image: SharingImg,
        caption: 'Easy Sharing',
    },
    {
        type: 'image',
        image: SyncingImg,
        caption: 'Real-Time Syncing',
    },
];

const SignupPage = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % carouselItems.length);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="signup-container">
            <div className="signup-left">
                {carouselItems[current].type === 'logo' ? (
                    <>
                        <img src={carouselItems[current].logo} alt="Cloudspace Logo" className="signup-logo" />
                        <h1 className="brand-name">{carouselItems[current].brand}</h1>
                        <p className="tagline">{carouselItems[current].tagline}</p>
                        <div className="carousel-dots">
                            {carouselItems.map((_, idx) => (
                                <span key={idx} className={`dot${idx === current ? ' active' : ''}`}></span>
                            ))}
                        </div>
                    </>
                ) : (
                    <>
                        <div className="carousel-slide">
                            <img src={carouselItems[current].image} alt={carouselItems[current].caption} className="carousel-img" />
                        </div>
                        <div className="carousel-caption">{carouselItems[current].caption}</div>
                        <div className="carousel-dots">
                            {carouselItems.map((_, idx) => (
                                <span key={idx} className={`dot${idx === current ? ' active' : ''}`}></span>
                            ))}
                        </div>
                    </>
                )}
            </div>

            <div className="signup-right">
                <h2>Get Started Now</h2>
                <form className="signup-form">
                    <label>
                        Name
                        <input type="text" placeholder="Enter your name" required />
                    </label>
                    <label>
                        Email address
                        <input type="email" placeholder="Enter your email" required />
                    </label>
                    <label>
                        Password
                        <input type="password" placeholder="Enter your password" required />
                    </label>

                    <div className="terms">
                        <input type="checkbox" id="terms" required />
                        <label htmlFor="terms">I agree to the terms & conditions</label>
                    </div>

                    <button type="submit" className="signup-button">Signup</button>
                </form>

                <div className="divider"><span>Or</span></div>

                <div className="social-login">
                    <button className="google-btn"><img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="icon"/> Sign in with Google</button>
                    <button className="apple-btn"><img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="icon"/> Sign in with Apple</button>
                </div>

                <p className="signin-text">
                    Have an account? <a href="#" className="signin-link">Sign In</a>
                </p>
            </div>
        </div>
    );
};

export default SignupPage;
