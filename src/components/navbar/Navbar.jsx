import React, {useState}  from 'react';
import './navbar.css';
import { MdMenuOpen, MdClose, MdSearch} from "react-icons/md";

// import logo from '../../assets/logo.svg';



// creating a re-usable menu function
const Menu = () => (
    // wrapping it with react fragment
    <>
    <p><a href="#course">Home</a></p>
    <p><a href="#university">About Us</a></p>
    <p><a href="#certificate">Pricing</a></p>
    <p><a href="#library">How it Work</a></p>
    <p><a href="#library">Contact Us</a></p>
    </>
)


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState (false);

    return (
        <div className="ga-learning-navbar">
            <div className="ga-learning-navbar-links">
            
                {/* learning logo */}
                <div className="ga-learning-navbar-links-logo">
                    {/* <img src={logo} alt="ga-learning-logo" /> */}
                    <h2>ReachD<span>o</span>c</h2>
                </div>
                {/* links items */}
                <div className="ga-learning-navbar-links-container">
                    <p><a href="#course">Home</a></p>
                    <p><a href="#university">About Us</a></p>
                    <p><a href="#certificate">Pricing</a></p>
                    <p><a href="#library">How it Work</a></p>
                    <p><a href="#library">Contact Us</a></p>
                </div>
            </div>
            
            {/* search icon and button */}
            <div className="ga-learning-navbar-sign">
               <div className="search-box">
                    <input className="search-text" type="text" placeholder="Search for a Medical Doc" />
                    <a className="search-btn"  href="#search">
                        <MdSearch />
                    </a>
                </div>
                {/* <p>Login</p> */}
                <button type="button">Sign In</button>
            </div>
            {/* navbar mobile version */}
            <div className="ga-learning-navbar-menu">
            
            {toggleMenu
                ? <MdClose color="#006967" size={27} onClick={() => setToggleMenu(false)} />
                : <MdMenuOpen color="#006967" size={27} onClick={() => setToggleMenu(true)} />}
            {toggleMenu && (
             
            <div className="ga-learning-navbar-menu-container scale-up-center">
                <div className="search-box">
                    <input className="search-text" type="text" placeholder="Search Courses" />
                    <a className="search-btn"  href="#search">
                        <MdSearch />
                    </a>
                </div>
                <div className="ga-learning-navbar-menu-container-links">
                    {/* calling the menu function */}
                    <Menu />
                    <div className="ga-learning-navbar-menu-container-links-sign">
                        {/* <p>Sign In</p> */}
                        <button type="button">Sign In</button>
                    </div>
                    
                </div>
            </div>
            )}
            </div>
        </div>
    )
}

export default Navbar
