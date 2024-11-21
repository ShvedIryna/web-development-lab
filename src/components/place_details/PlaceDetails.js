import React, { useState, useEffect } from 'react';
import './PlaceDetails.css';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchItemById } from '../../api';

const PlaceDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [place, setPlace] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPlace = async () => {
            setLoading(true);
            try {
                const data = await fetchItemById(id);
                setPlace(data);
                setError(null);
            } catch (error) {
                setError('Item not found or an error occurred while fetching data.');
                console.error('Error fetching item:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPlace();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!place) {
        return <div>No place found with ID {id}</div>;
    }

    const goBackToCatalog = () => {
        navigate('/catalog');
    };

    return (
        <div className="place-details">
            <img src={place.image} alt={place.location} className="place-details-img" />
            <div className="place-hero">
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
                    <option value="2">2 and more</option>
                </select>
            </div>

            <p className="price">Price: {place.price} UAH/day</p>
            <div className="buttons">
                <button className="go-back" onClick={goBackToCatalog}>Return to catalog</button>
                <button className="add-to-cart">Add to cart</button>
            </div>
        </div>
    );
};

export default PlaceDetails;


