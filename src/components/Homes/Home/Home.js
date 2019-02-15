import React, { Component } from 'react';
import './Home.css';
import HomeItems from './HomeItems';
import Button from '../../utils/Button/Button';

class Home extends Component {
    
    render() {
        const {price,location,area,rooms,imgSrc,alt,title} = this.props;
        return (
            <div className = "home">

                <img 
                    className = "home__image" 
                    style = {{
                        width: '100%',
                        gridRow: '1 / 2',
                        gridColumn: '1/ -1',
                        backgroundSize: 'cover'
                    }} 
                    src={imgSrc} 
                    alt={alt}
                />
                <svg className="home__like">
                    <use xlinkHref = "img/sprite.svg#icon-heart-full"></use>
                </svg>
                <h5 className="home__title">{title}</h5>
        
                <HomeItems
                    price = {price}
                    location = {location}
                    area = {area}
                    rooms = {rooms}
                />
                <Button className="btn btn-primary home__contact" title = "Contact Realtor"/>

            </div>
        );
    }
}

export default Home;