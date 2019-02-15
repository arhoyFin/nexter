import React from 'react';
import './HomeItem.css';
const HomeItems = ({price, rooms,area, location}) => {
    return (
        <div className = "home__items">
                <div className="home__location">
                    <svg>
                        <use xlinkHref = "img/sprite.svg#icon-map-pin"></use>
                    </svg>
                    <p> {location} </p>
                </div>
                <div className="home__rooms">
                    <svg>
                        <use xlinkHref = "img/sprite.svg#icon-profile-male"></use>
                    </svg>
                    <p> {rooms <2 ? `${rooms} bedroom`: `${rooms}bedrooms` } </p>
                </div>
                <div className="home__area">
                    <svg>
                        <use xlinkHref = "img/sprite.svg#icon-expand"></use>
                    </svg>
                    <p> {area} sq feet </p>
                </div>
                <div className="home__price">
                    <svg>
                        <use xlinkHref = "img/sprite.svg#icon-key"></use>
                    </svg>
                    <p> {price} </p>
                </div>
        </div>
    );
};

export default HomeItems;