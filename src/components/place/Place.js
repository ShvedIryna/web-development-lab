import React from 'react';
import { Link } from 'react-router-dom';
import './Place.css';

const Place = ({ image, location, price }) => {
    return (
        <div className="place-card">
            <img src={image} alt="Place" className="place-img" />
            <div className="place-info">
                <p><strong>Location:</strong> {location}</p>
                <p><strong>Price:</strong> {price} $</p>
                <Link to="/place-details" state={{ image, location, price }} className="learn-more-btn">
                    Learn More
                </Link>
            </div>
        </div>
    );
};

export default Place;

