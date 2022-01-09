import React from 'react';
import './learning.css';
import followUp from '../../assets/follow-up.png';


const Learning = () => {
    return (
        <div className="ga-learning-access section-padding">
            <div className="ga-learning-access-content">
                <h2 className="access-heading">Proper follow-up</h2>
                <p className="access-subtitle">Swiftly book an appointment with a coach at anywhere and anytime</p>
                <button>Chat with a Coach</button>          
            </div>
            <div className="ga-learning-access-image">
                <img src={followUp} alt="access" />
            </div>
        </div>
    )
}

export default Learning
