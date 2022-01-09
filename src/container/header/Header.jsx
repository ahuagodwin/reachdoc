import React from 'react';
import './header.css';
import hero from '../../assets/hero-banner.png';
import telescope from '../../assets/telescope.png';
import ellipse from '../../assets/ellipse-25.png';


const Header = () => {
    return (
        <div className="ga-learning-header section-padding">
            <div className="ga-learning-content">
                <h1 className="title ">Health Care at your finger tips</h1>
                <p>Get access to a health coach</p>
                <p>Anytime. Anyday. At zero cost</p>

                <div className="ga-learning-header-button">
                    <button>View Hospital</button>
                    <button>Get Started</button>
                </div>
            </div>

            {/* Hero image */}
            <div className="ga-learning-hero-image">
                <img src={hero} alt="ga-learning-hero" className="animate__animated animate__fadeInTopRight animate__delay-2s"/>
                <img src={ellipse} alt="ga-learning-hero" className="animate__animated animate__fadeInTopRight animate__delay-2s"/>
                <img src={telescope} alt="ga-learning-hero" className="animate__animated animate__fadeInTopLeft animate__delay-2s"/>
            </div>
        </div>
    )
}

export default Header
