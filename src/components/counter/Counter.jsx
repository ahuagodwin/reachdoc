import React from 'react';
import './counter.css';
import adduser from '../../assets/add-user.png';
import Timetable from '../../assets/Timetable.png';
import Health from '../../assets/Health-Checkup.png';


const Counter = () => {
    return (
        <div className="ga-learning-progress section-padding-progress">
          <div className='reachdoc'>
            <h2>How Does it Work?</h2>
            <p>Speak with a health coach in three simple steps. swift, prompt and hassle-free</p>
          </div>
          <clearfix></clearfix>
           <div className="ga-learning-progress-level">
                <div class="ga-learning-level">
                  <div className="add-user">
                    <img src={adduser} alt='add-user' />
                  </div>
                  <h2>Register</h2>
                  <p>Visit the ReachDoc site and create an account for free</p>
                </div>
                <div class="ga-learning-level">
                <div className="add-user-1">
                    <img style={{background: "#F57A65"}} src={Timetable} alt='add-user' />
                  </div>
                  <h2>Book an Appointment</h2>
                  <p>Swiftly book an appointment with a coach at anywhere and anytime</p>
                </div>
                <div class="ga-learning-level">
                <div className="add-user-2">
                    <img style={{background: "#227181"}} src={Health} alt='add-user' />
                  </div>
                  <h2>Received Quality Care</h2>
                  <p>Speak to a health coach online and recieve quality care and service</p>
                </div>
           </div>
        </div>
    )
}

export default Counter
