import React, { useState } from 'react';
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faInfoCircle, faTrophy, faEnvelope, faSignOutAlt, faTimes, faOutdent } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/Logo.png'

const Navbar = () => {
    const [isNavActive, setIsNavActive] = useState(false);
    const location = useLocation();

    const handleBarClick = () => {
        setIsNavActive(true);
    };

    const handleCloseClick = () => {
        setIsNavActive(false);
    };

    return (
        <div className="pr1-body">
            <section id="header">
                <a href="/"><img src={logo} alt="Logo" className="logo" /></a>
                <div>
                    <ul id="navbar" className={isNavActive ? 'active' : ''}>
                        <li><Link className={location.pathname === '/Home' ? 'active' : ''} to="/Home"><FontAwesomeIcon icon={faHome} /> Home</Link></li>
                        <li><Link className={location.pathname === '/About' ? 'active' : ''} to="/About"><FontAwesomeIcon icon={faInfoCircle} /> About Us</Link></li>
                        <li><Link className={location.pathname === '/Profile' ? 'active' : ''} to="/Profile"><FontAwesomeIcon icon={faUser} /> Profile</Link></li>
                        <li><Link className={location.pathname === '/Contact' ? 'active' : ''} to="/Contact"><FontAwesomeIcon icon={faEnvelope} /> Contact Us</Link></li>
                        <li><Link className={location.pathname === '/Log out' ? 'active' : ''} to="/SignIn"><button><FontAwesomeIcon icon={faSignOutAlt} /> Log out</button></Link></li>
                        <a href="#" id="close" onClick={handleCloseClick}><FontAwesomeIcon icon={faTimes} /></a>
                    </ul>
                </div>
                <div id="mobile">
                    <FontAwesomeIcon id="bar" icon={faOutdent} onClick={handleBarClick} />
                </div>
            </section>
        </div>
    );
};
export default Navbar;
