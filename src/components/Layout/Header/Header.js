import React from 'react';
import './Header.css'
const Header = () => {
    return (
  
            <div className = "header">
                <img src="img/logo.png" alt="Modern House React" className = "header__logo"/>
                <h3 className="heading-3">Your own home:</h3>
                <h1 className="heading-1">Modern Home Web App</h1>
                <button className="btn">View our properties</button>
                <div className="header__seenon-text">See on</div>
                <div className="header__seeon-logos">
                    <img src="img/logo-bbc.png" alt=""/>
                </div>
            </div>    
             
    );
};

export default Header;