import React, { Component } from 'react';
import './Gallery.css';

class Gallery extends Component {
    render() {
        return (
        <div className = "gallery">

            <figure className="gallery__item gallery__item--1">
                 <img src="img/gal-1.jpeg" alt="" className="gallery__img gallery__img-1"/>
            </figure>
            <figure className="gallery__item gallery__item--2">
                <img src="img/gal-2.jpeg" alt="" className="gallery__img gallery__img-2"/>
            </figure>
            <figure className="gallery__item gallery__item--3">
                 <img src="img/gal-3.jpeg" alt="" className="gallery__img gallery__img-3"/>
            </figure>
            <figure className="gallery__item gallery__item--4">
                <img src="img/gal-4.jpeg" alt="" className="gallery__img gallery__img-4"/>
            </figure>
            <figure className="gallery__item gallery__item--5">
                 <img src="img/gal-5.jpeg" alt="" className="gallery__img gallery__img-5"/>
            </figure>
            <figure className="gallery__item gallery__item--6">
                <img src="img/gal-6.jpeg" alt="" className="gallery__img gallery__img-6"/>
            </figure>
            <figure className="gallery__item gallery__item--7">
                 <img src="img/gal-7.jpeg" alt="" className="gallery__img gallery__img-7"/>
            </figure>
            <figure className="gallery__item gallery__item--8">
                 <img src="img/gal-8.jpeg" alt="" className="gallery__img gallery__img-8"/>
            </figure>
            <figure className="gallery__item gallery__item--9">
                <img src="img/gal-9.jpeg" alt="" className="gallery__img gallery__img-9"/>
            </figure>
            <figure className="gallery__item gallery__item--10">
                <img src="img/gal-10.jpeg" alt="" className="gallery__img gallery__img-10"/>
            </figure>
            <figure className="gallery__item gallery__item--11">
                <img src="img/gal-11.jpeg" alt="" className="gallery__img gallery__img-11"/>
            </figure>
            <figure className="gallery__item gallery__item--12">
                 <img src="img/gal-12.jpeg" alt="" className="gallery__img gallery__img-12"/>
            </figure>
            <figure className="gallery__item gallery__item--13">
                <img src="img/gal-13.jpeg" alt="" className="gallery__img gallery__img-13"/>
            </figure>
            <figure className="gallery__item gallery__item--14">
              <img src="img/gal-14.jpeg" alt="" className="gallery__img gallery__img-14"/>
            </figure>
            <figure className="gallery__item gallery__item--title">
               Modern Homes
            </figure> 
                  
        </div>
        );
    }
}

export default Gallery;