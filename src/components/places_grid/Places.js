import React, { useState } from 'react';
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

const places = [
    { image: place1, location: 'Lviv', price: 5000, description: 'A beautiful city known for its rich history and architecture.' },
    { image: place2, location: 'Bakota', price: 4040, description: 'A serene destination perfect for relaxation and nature lovers.' },
    { image: place3, location: 'Truskavets', price: 5300, description: 'Famous for its healing mineral waters and spa resorts.' },
    { image: place4, location: 'Skhidnytsia', price: 3100, description: 'A picturesque town with therapeutic mineral springs.' },
    { image: place5, location: 'Polyanicya', price: 6000, description: 'A charming place ideal for skiing and winter sports.' },
    { image: place6, location: 'Urych', price: 4500, description: 'A quaint village surrounded by breathtaking landscapes.' },
    { image: place7, location: 'Kamianets-Podilskyi', price: 5200, description: 'Home to a stunning medieval fortress and beautiful scenery.' },
    { image: place8, location: 'Mukachevo', price: 4100, description: 'A cultural hub with a mix of history and modernity.' }
];

function Places() {
    const [visibleCount, setVisibleCount] = useState(4);

    const viewMore = () => {
        setVisibleCount(prevCount => prevCount + 4);
    };

    return (
        <>
            <div id="place-grid">
                {places.slice(0, visibleCount).map((place, index) => (
                    <Place
                        key={index}
                        image={place.image}
                        location={place.location}
                        price={place.price}
                        description={place.description}
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

export default Places;
