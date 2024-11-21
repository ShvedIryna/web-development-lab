import React from 'react';
import './Places.css';
import Place from '../place/Place';

const defaultPlaces = [
    { "id": 1, image: `${process.env.PUBLIC_URL}/assets/image/place1.jpg`, location: 'Lviv', price: 5000, description: 'A beautiful city known for its rich history and architecture.', maxVisitors: 10 },
    { "id": 2, image: `${process.env.PUBLIC_URL}/assets/image/place2.jpg`, location: 'Bakota', price: 4040, description: 'A serene destination perfect for relaxation and nature lovers.', maxVisitors: 5 },
    { "id": 3, image: `${process.env.PUBLIC_URL}/assets/image/place3.jpg`, location: 'Truskavets', price: 5300, description: 'Famous for its healing mineral waters and spa resorts.', maxVisitors: 8 },
    { "id": 4, image: `${process.env.PUBLIC_URL}/assets/image/place4.jpg`, location: 'Skhidnytsia', price: 3100, description: 'A picturesque town with therapeutic mineral springs.', maxVisitors: 20 },
    { "id": 5, image: `${process.env.PUBLIC_URL}/assets/image/place5.jpg`, location: 'Polyanicya', price: 6000, description: 'A charming place ideal for skiing and winter sports.', maxVisitors: 17 },
    { "id": 6, image: `${process.env.PUBLIC_URL}/assets/image/place6.jpg`, location: 'Urych', price: 4500, description: 'A quaint village surrounded by breathtaking landscapes.', maxVisitors: 23 },
    { "id": 7, image: `${process.env.PUBLIC_URL}/assets/image/place7.jpg`, location: 'Kamianets-Podilskyi', price: 5200, description: 'Home to a stunning medieval fortress and beautiful scenery.', maxVisitors: 10 },
    { "id": 8, image: `${process.env.PUBLIC_URL}/assets/image/place8.jpg`, location: 'Mukachevo', price: 4100, description: 'A cultural hub with a mix of history and modernity.', maxVisitors: 3 }
];


function Places({ places = defaultPlaces }) {
    return (
        <div id="place-grid">
            {places.map((place) => (
                <Place
                    key={place.id}
                    id={place.id}
                    image={place.image}
                    location={place.location}
                    price={place.price}
                    maxVisitors={place.maxVisitors}
                />
            ))}
        </div>
    );
}

export default Places;