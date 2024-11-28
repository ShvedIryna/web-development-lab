import React, { useState, useEffect } from 'react';
import './PlaceDetails.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions';
import { fetchItemById } from '../../api';

const PlaceDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [place, setPlace] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [selectedDays, setSelectedDays] = useState(1); 
    const [selectedVisitors, setSelectedVisitors] = useState(1);

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

    const handleAddToCart = () => {
        const item = {
            ...place,
            days: selectedDays,
            visitors: selectedVisitors,
            totalPrice: place.price * selectedDays * selectedVisitors,
        };
        dispatch(addToCart(item));
        alert('Item added to cart!');
    };

    return (
        <div className="place-details">
            <img src={place.image} alt={place.location} className="place-details-img" />
            <div className="place-hero">
                <h2>{place.name}</h2>
                <p><strong>About: </strong> {place.description}</p>
                <p><strong>Max Visitors: </strong> {place.maxVisitors}</p>
                <p><strong>Location: </strong> {place.location}</p>

                <div className="selectors">
                    <label>
                        Select days:
                        <select
                            value={selectedDays}
                            onChange={(e) => setSelectedDays(Number(e.target.value))}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </label>
                    <label>
                        Select visitors:
                        <select
                            value={selectedVisitors}
                            onChange={(e) => setSelectedVisitors(Number(e.target.value))}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </label>
                </div>
            </div>

            <p className="price">Price per day per visitor: {place.price} UAH</p>
            <div className="buttons">
                <button className="go-back" onClick={() => navigate('/catalog')}>Return to catalog</button>
                <button className="add-to-cart" onClick={handleAddToCart}>Add to cart</button>
            </div>
        </div>
    );
};

export default PlaceDetails;
