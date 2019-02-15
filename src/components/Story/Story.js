import React, { Component } from 'react';
import Button from '../utils/Button/Button';
import './Story.css';

class Story extends Component {
    render() {
        return (
            <div className = "story">

                <div className="story__pictures">
                    <img 
                        src="img/story-1.jpeg" 
                        alt="couple with new house"
                        className = "story__img--1"
                    />
                    <img 
                        src="img/story-2.jpeg" 
                        alt="Brand New House"
                        className = "story__img--2"
                    />
                </div>

                <div className="story__content">
                    <div className="story__title">
                        Happy Customers
                    </div>
                    <div className="story__quote">
                       <span>&ldquo;</span>Best investment we have made<span>&rdquo;</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetu Aut omnis magnam a rerum cumque ratione eaque dolore corporis voluptatum libero quosaperiam?</p>
                    <Button className = "btn btn-primary" title = "Find your own home">
                    </Button>
                </div>
        
            </div>
        );
    }
}

export default Story;