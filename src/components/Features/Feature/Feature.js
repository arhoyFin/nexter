import React from 'react';
import './Feature.css'

const Features = (props) => {
    return (
        <div className="feature">
            <h4>{props.header}</h4>
            <p>{props.text}</p>
        </div>
    );
};

export default Features;