import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';



class Footer extends Component {
    render() {
        return (
            <div className = "footer">
                    
                        <ul className="footer__ul">
                            <li className="footer__li">
                                <Link to = "find-dream-home" className = "footer__link"> Find Your Dream Home </Link>
                            </li>
                            <li className="footer__li">
                                <Link to = "find-dream-home" className = "footer__link"> Request Proposal </Link>
                            </li>
                            <li className="footer__li">
                                <Link to = "find-dream-home" className = "footer__link"> Download Home Planner </Link>
                            </li>
                            <li className="footer__li">
                                <Link to = "find-dream-home" className = "footer__link"> Contact Us </Link>
                            </li>
                        </ul>
                    <div className = "footer__copywrite">
                        <p>
                        &copy; Modern Homes copywrite {new Date().getFullYear()} | React Project with Modern CSS Flexbox and Grid
                        </p>
                    </div>
                    
            </div>
        );
    }
}


export default Footer;