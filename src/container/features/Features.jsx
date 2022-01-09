import React from 'react';
import './features.css';
import features from '../../assets/wantto.png';
import {MdCheckCircle} from 'react-icons/md';


const Features = () => {
    return (
        <div className="ga-learning-features section-padding">
            <div className="ga-learning-features-content">
                <h2 className="features-heading">Want to become a Health Coach</h2>
                <p className="features-subtitle">You focus on HealthCare, we keep you on track</p>
                <p className="features-sub"><MdCheckCircle className="mdCheck" /> Personalized Patient Care</p>
                <p className="features-sub"><MdCheckCircle className="mdCheck" /> Easy Patient Reminder</p>
                <p className="features-sub"><MdCheckCircle className="mdCheck" /> Effective Patient Record</p>
                <button>Get Started</button>
                <button>Contact Us</button>           
            </div>
            <div className="ga-learning-features-image animate__animated animate__rotateInUpRight animate__delay-5s">
                <img src={features} alt="features" />
            </div>
        </div>
    )
}

export default Features
