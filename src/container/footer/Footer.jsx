import React from 'react';
import { MdFacebook, MdMap } from 'react-icons/md';
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import './footer.css';

const Footer = () => {
    return (
        <div className="ga-footer section-padding section-padding">
            <div className="ga-footer-content">
                <div className="f1">
                    <h3>ReachDoc</h3>
                    <p><a href="#">About Us</a></p>
                    <p><a href="#">Facilities</a></p>
                    <p><a href="#">Staff</a></p>
                    <p><a href="#">Meet our Team</a></p>
                </div>
                <div className="f2">
                    <h3>HEALTH CATEGORY</h3>
                    <p><a href="#">General Health</a></p>
                    <p><a href="#">Maternity</a></p>
                    <p><a href="#">Fitness</a></p>
                    <p><a href="#">Dentist</a></p>
                </div>
                <div>
                    <h3>QUICK LINKS</h3>
                    <p><a href="#">About Us</a></p>
                    <p><a href="#">Contact Us</a></p>
                    <p><a href="#">Terms of Use</a></p>
                    <p><a href="#">Privacy Policy</a></p>
                </div>
                <div>
                    <h3>CONNECT</h3>
                    <p> Lagos State, Nigeria </p>
                    <a className="email" href="mailto:godwincahua@gmail.com">godwin@ahuagodwin.com</a>
                    <div className="social-icons">
                    <MdMap />
                    <MdFacebook />
                    <FaLinkedinIn />
                    <FaInstagram />
                    </div>
                </div>
            </div>
            <hr></hr>
            <p className="copy-right">(c) ReachDoc 2021. All right reserved.</p>
        </div>
    )
}

export default Footer
