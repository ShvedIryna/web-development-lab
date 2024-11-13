import React from 'react';
import './Places.css';
import place1 from '../../assets/place1.jpg';
import place2 from '../../assets/place2.jpg';
import place3 from '../../assets/place3.jpg';
import place4 from '../../assets/place4.jpg';
import place5 from '../../assets/place5.jpg';
import place6 from '../../assets/place6.jpg';
import place7 from '../../assets/place7.jpg';
import place8 from '../../assets/place8.jpg';
import Place from '../place/Place';

const defaultPlaces = [
    { "id": 1, image: place1, location: 'Lviv', price: 5000, description: 'A beautiful city known for its rich history and architecture.', maxVisitors: 10 },
    { "id": 2, image: place2, location: 'Bakota', price: 4040, description: 'A serene destination perfect for relaxation and nature lovers.', maxVisitors: 5 },
    { "id": 3, image: place3, location: 'Truskavets', price: 5300, description: 'Famous for its healing mineral waters and spa resorts.', maxVisitors: 8 },
    { "id": 4, image: place4, location: 'Skhidnytsia', price: 3100, description: 'A picturesque town with therapeutic mineral springs.', maxVisitors: 20 },
    { "id": 5, image: place5, location: 'Polyanicya', price: 6000, description: 'A charming place ideal for skiing and winter sports.', maxVisitors: 17 },
    { "id": 6, image: place6, location: 'Urych', price: 4500, description: 'A quaint village surrounded by breathtaking landscapes.', maxVisitors: 23 },
    { "id": 7, image: place7, location: 'Kamianets-Podilskyi', price: 5200, description: 'Home to a stunning medieval fortress and beautiful scenery.', maxVisitors: 10 },
    { "id": 8, image: place8, location: 'Mukachevo', price: 4100, description: 'A cultural hub with a mix of history and modernity.', maxVisitors: 3 }
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