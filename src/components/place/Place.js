import React from 'react';
import { Link } from 'react-router-dom';
import './Place.css';

const Place = ({ id, image, location, price, maxVisitors }) => {
    return (
        <div className="place-card">
            <img src={image} alt="Place" className="place-img" />
            <div className="place-info">
                <p><strong>Location:</strong> {location}</p>
                <p><strong>Price:</strong> {price} $</p>
                <p><strong>Max Visitors:</strong> {maxVisitors}</p>
                <Link to={`/place/${id}`} className="learn-more-btn">
                    Learn More
                </Link>
            </div>
        </div>
    );
};

export default Place;