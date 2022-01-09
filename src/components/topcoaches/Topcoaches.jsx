import React from 'react';
import { MdFacebook, MdMap } from 'react-icons/md';
import { FaLinkedinIn, FaInstagram, FaTwitter, FaGooglePlus } from "react-icons/fa";
import './topcoaches.css';
import {Zion, Next, Nextbg} from './import';

function TopHealthCoaches() {
    return (
        <div className="reachdoc-top-coaches section-padding">
            <h2>Top Health Coaches</h2>

            {/* health coaches by category */}
            <div className="reachdoc-top-tap">
                    <p><a href="#general">General HealthCare</a></p>
                    <p><a href="#maternity">Maternity</a></p>
                    <p><a href="#fitness">Fitness</a></p>
                    <p><a href="#paediatrics">Paediatrics</a></p>
                    <p><a href="#physiotherapy">Physiotherapy</a></p>
                    <p><a href="#lifestyle">Lifestyle</a></p>
            </div>

            <div className="reachdoc-top-view">
                <p>View All</p>
            </div>

            {/* the coaches */}
            <div className="reachdoc-coaches">
                <div className="coaches-content">
                    <div className='coaches-card'>
                        <img src={Zion} alt="coach1" />
                        <div className='coaches-name'>Godwin Ahua</div>
                        <div className='coaches-title'>General Health</div>
                        <div className='coaches-social'>
                        <MdFacebook className='coaches-icon' />
                        <FaLinkedinIn className='coaches-icon' />
                        <FaInstagram className='coaches-icon' />
                        <FaTwitter className='coaches-icon' />
                        <FaGooglePlus className='coaches-icon' />
                        </div>
                        <div className='coaches-rate'>$50.00</div>
                    </div>

                    {/* coache 2 */}

                    <div className='coaches-card'>
                        <img src={Zion} alt="coach1" />
                        <div className='coaches-name'>Onyeka Kachifako</div>
                        <div className='coaches-title'>General Health</div>
                        <div className='coaches-social'>
                        <MdFacebook className='coaches-icon' />
                        <FaLinkedinIn className='coaches-icon' />
                        <FaInstagram className='coaches-icon' />
                        <FaTwitter className='coaches-icon' />
                        <FaGooglePlus className='coaches-icon' />
                        </div>
                        <div className='coaches-rate'>Free</div>
                    </div>

                    {/* coache 3 */}
                    <div className='coaches-card'>
                        <img src={Zion} alt="coach1" />
                        <div className='coaches-name'>Zion ReachDoc</div>
                        <div className='coaches-title'>General Health</div>
                        <div className='coaches-social'>
                        <MdFacebook className='coaches-icon' />
                        <FaLinkedinIn className='coaches-icon' />
                        <FaInstagram className='coaches-icon' />
                        <FaTwitter className='coaches-icon' />
                        <FaGooglePlus className='coaches-icon' />
                        </div>
                        <div className='coaches-rate'>Free</div>
                    </div>

                    {/* coache 4 */}

                    <div className='coaches-card'>
                        <img src={Zion} alt="coach1" />
                        <div className='coaches-name'>Bright ReachDoc</div>
                        <div className='coaches-title'>General Health</div>
                        <div className='coaches-social'>
                        <MdFacebook className='coaches-icon' />
                        <FaLinkedinIn className='coaches-icon' />
                        <FaInstagram className='coaches-icon' />
                        <FaTwitter className='coaches-icon' />
                        <FaGooglePlus className='coaches-icon' />
                        </div>
                        <div className='coaches-rate'>Free</div>
                    </div>

                    {/* coache 5 */}

                    <div className='coaches-card'>
                        <img src={Zion} alt="coach1" />
                        <div className='coaches-name'>G G ReachDoc</div>
                        <div className='coaches-title'>General Health</div>
                        <div className='coaches-social'>
                        <MdFacebook className='coaches-icon' />
                        <FaLinkedinIn className='coaches-icon' />
                        <FaInstagram className='coaches-icon' />
                        <FaTwitter className='coaches-icon' />
                        <FaGooglePlus className='coaches-icon' />
                        </div>
                        <div className='coaches-rate'>Free</div>
                    </div>
                </div>
                <div className='coache-next'>
                       <img src={Nextbg} alt="next bg" />
                       <img src={Next} alt="next" />
                    </div>
            </div>

        </div>
    )
}

export default TopHealthCoaches
