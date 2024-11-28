const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));
const places = [
    { id: 1, image: '/assets/place1.jpg', location: 'Lviv', price: 5000, description: 'A beautiful city known for its rich history and architecture.', maxVisitors: 10 },
    { id: 2, image: '/assets/place2.jpg', location: 'Bakota', price: 4040, description: 'A serene destination perfect for relaxation and nature lovers.', maxVisitors: 5 },
    { id: 3, image: '/assets/place3.jpg', location: 'Truskavets', price: 5300, description: 'Famous for its healing mineral waters and spa resorts.', maxVisitors: 8 },
    { id: 4, image: '/assets/place4.jpg', location: 'Skhidnytsia', price: 3100, description: 'A picturesque town with therapeutic mineral springs.', maxVisitors: 20 },
    { id: 5, image: '/assets/place5.jpg', location: 'Polyanicya', price: 6000, description: 'A charming place ideal for skiing and winter sports.', maxVisitors: 17 },
    { id: 6, image: '/assets/place6.jpg', location: 'Urych', price: 4500, description: 'A quaint village surrounded by breathtaking landscapes.', maxVisitors: 23 },
    { id: 7, image: '/assets/place7.jpg', location: 'Kamianets-Podilskyi', price: 5200, description: 'Home to a stunning medieval fortress and beautiful scenery.', maxVisitors: 10 },
    { id: 8, image: '/assets/place8.jpg', location: 'Mukachevo', price: 4100, description: 'A cultural hub with a mix of history and modernity.', maxVisitors: 3 }
];

app.get('/api/places', (req, res) => {
    const { searchTerm = '', price, location, maxVisitors } = req.query;
    let filteredPlaces = places.filter(place =>
        place.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (price) filteredPlaces = filteredPlaces.filter(place => place.price <= parseInt(price, 10));
    if (location) filteredPlaces = filteredPlaces.filter(place => place.location === location);
    if (maxVisitors) filteredPlaces = filteredPlaces.filter(place => place.maxVisitors <= parseInt(maxVisitors, 10));

    res.json(filteredPlaces);
});

app.get('/api/places/:id', (req, res) => {
    const placeId = parseInt(req.params.id, 10);
    const place = places.find((p) => p.id === placeId);
    if (place) {
        res.json(place);
    } else {
        res.status(404).json({ error: "Place not found" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});