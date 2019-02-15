import React, { Component } from 'react';
import './Homes.css';
import './Home/Home.css';
import Home from './Home/Home';
class Homes extends Component {
    render() {
        return (
            <div className = "homes" >
                <Home
                    title = "Cozy Downtown Living"
                    price = '$600,000'
                    location = "Downtown"
                    rooms = {1}
                    area = {1000}
                    imgSrc = "img/house-1.jpeg"
                    alt = "house1"
                />
                <Home
                    title = "Modern Villa"
                    price = '$2,700,000'
                    location = "Beverly"
                    rooms = {6}
                    area = {3600}
                    imgSrc = "img/house-2.jpeg"
                />
                <Home
                    title = "Classic Country Home"
                    price = '$1,100,000'
                    location = "Malibu"
                    rooms = {2}
                    area = {2000}
                    imgSrc = "img/house-3.jpeg"
                />
                <Home
                    title = "Grand Old Villa"
                    price = '$1,200,000'
                    location = "Brewery"
                    rooms = {3}
                    area = {2800}
                    imgSrc = "img/house-4.jpeg"
                />
                <Home
                    title = "Large Family Home"
                    price = '$900,000'
                    location = "Inglewood"
                    rooms = {4}
                    area = {2800}
                    imgSrc = "img/house-5.jpeg"
                />
                <Home
                    title = "Modern Apartment Style"
                    price = '$1,900,000'
                    location = "Sparewood"
                    rooms = {4}
                    area = {3000}
                    imgSrc = "img/house-6.jpeg"
                />
                
            </div>
        );
    }
}

export default Homes;