import React, { Component } from 'react';
import Feature from './Feature/Feature';
import './Features.css';

class Features extends Component {
    render() {
        return (
            <div className = "features">
                <Feature
                    header = "REACT"
                    text = "Base for building single page interactive UIs"
                />
                <Feature
                    header = "REDUX"
                    text = "Predictable state container for javascript apps."
                />
                <Feature
                    header = "Custom CSS"
                    text = "CSS3/ CSS Grids / flexbox and the latest and greatest web design techniques"
                />
                <Feature
                    header = "Analytics"
                    text = "Leverage your user data and email prospects after they sign up"
                />
                <Feature
                    header = "Mongo DB"
                    text = "The most popular database for modern app and web applications "
                />
                <Feature
                    header = "Express.js"
                    text = "Web application framework for creating full stack web applications"
                />
            </div>
        );
    }
}

export default Features;