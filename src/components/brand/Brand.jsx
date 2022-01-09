import React from 'react';
import './brand.css';
import {Amazon, Apple, Myntra, Starbucks, JBL, Logo} from './import';

const Brand = () => {
    return (
        <div className="ga-brand section-padding">
            <p>Top Partnering Hospital - Health is Life</p>
            <div className="ga-brand-content">
                <div>
                    <img src={Amazon} alt="amazon" />
                </div>
                <div>
                    <img src={Apple} alt="apple" />
                </div>
                <div>
                    <img src={Myntra} alt="myntra" />
                </div>
                <div>
                    <img src={Starbucks} alt="starbucks" />
                </div>
                <div>
                    <img src={JBL} alt="starbucks" />
                </div>
                <div>
                    <img src={Logo} alt="starbucks" />
                </div>

            </div>
        </div>
    )
}

export default Brand
