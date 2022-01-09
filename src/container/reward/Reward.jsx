import React from 'react';
import './reward.css';
import care from '../../assets/right-care.png';

const Reward = () => {
    return (
        <div className="ga-learning-reward section-padding">
            <div className="ga-learning-reward-image">
                <img src={care} alt="reward" />
            </div>
            <div className="ga-learning-reward-content">
                <h2 className="reward-heading">Get the right care</h2>
                <p className="reward-subtitle">Swiftly book an appointment with a coach at anywhere and anytime for your health</p>
                <button>Book an Appointment</button>          
            </div>
            
        </div>
    )
}

export default Reward
