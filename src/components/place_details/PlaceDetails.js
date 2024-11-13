import React from "react";
import './PlaceDetails.css';
import { useParams, useNavigate } from 'react-router-dom';
import { usePlaces } from '../place_context/PlaceContext';

const PlaceDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { places } = usePlaces();

    const place = places.find((place) => place.id === parseInt(id, 10));


    if (!place) {
        return <div>Place is undefined.</div>;
    }

    const goBackToCatalog = () => {
        navigate('/catalog');
    };

    return (
        <div className="place-details">
            <img src={place.image} alt={place.location} className="place-details-img" />
            <div className="place-hero">
                <div className="characteristics">
                    <span className="characteristic">1 characteristic</span>
                    <span className="characteristic">2 characteristic</span>
                </div>
                <h2>{place.name}</h2>
                <p><strong>About: </strong> {place.description}</p>
                <p><strong>Max Visitors for this place: </strong> {place.maxVisitors}</p>
                <p><strong>Location: </strong> {place.location}</p>

                <select className="PlacesFilter">
                    <option value="">Days for weekend</option>
                    <option value="1">1</option>
                    <option value="2">2 and more</option>
                </select>
                <select className="PlacesFilter">
                    <option value="">Visitors</option>
                    <option value="1">1</option>
                    <option value=''>2 and more</option>
                </select>
            </div>

            <p className="price">Price: {place.price} UAH/day</p>
            <div className="buttons">
                <button className="go-back" onClick={goBackToCatalog}>Return to catalog</button>
                <button className="add-to-cart">Add to card</button>
            </div>
        </div>
    );
};

export default PlaceDetails;

