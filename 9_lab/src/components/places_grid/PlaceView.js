import React, { useState, useEffect } from 'react';
import './Places.css';
import Place from '../place/Place';
import Loader from '../loader/Loader';
import { fetchPlaces } from '../../api';

function PlaceView() {
    const [places, setPlaces] = useState([]);
    const [visibleCount, setVisibleCount] = useState(4);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPlaces = async () => {
            try {
                setLoading(true);
                const startTime = Date.now();
                const data = await fetchPlaces();
                const delay = 1500 - (Date.now() - startTime);
                if (delay > 0) {
                    await new Promise(resolve => setTimeout(resolve, delay));
                }
                setPlaces(data);
            } catch (error) {
                setError('Failed to load places.');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        loadPlaces();
    }, []);

    const viewMore = () => {
        setVisibleCount(prevCount => prevCount + 4);
    };

    if (loading) return <Loader />;
    if (error) return <div>{error}</div>;

    return (
        <>
            <div id="place-grid">
                {places.slice(0, visibleCount).map((place) => (
                    <Place
                        key={place.id}
                        id={place.id}
                        image={place.image}
                        location={place.location}
                        price={place.price}
                        description={place.description}
                        maxVisitors={place.maxVisitors}
                    />
                ))}
            </div>
            {visibleCount < places.length && (
                <button onClick={viewMore} className="view_more">
                    View more
                </button>
            )}
        </>
    );
}

export default PlaceView;