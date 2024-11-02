import React from 'react';
import './Hero.css';
import first_photo from '../../assets/first_photo.jpg';

function Hero() {
    return (
        <div className="container hero">
            <div className="hero__inner">
                <h1 className="hero__title">Rest and enjoy your weekend</h1>
                <p className="hero__paragraph">
                    Looking for a place to relax? We can offer a great selection of vacation spots
                    with different price categories and number of people.
                </p>
                <img src={first_photo} alt="First_photo" className="first_photo" />
            </div>
        </div>
    );
}

export default Hero;