import React, { useState, useEffect } from 'react';
import Header from '../components/header/Header_search';
import Places from '../components/places_grid/Places';
import { usePlaces } from '../components/place_context/PlaceContext';
import FilterButtons from '../components/buttons/FilterButtons';
import Footer from '../components/footer/Footer';

const CatalogPage = () => {
    const { places } = usePlaces();

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPlaces, setFilteredPlaces] = useState(places);
    const [selectedPrice, setSelectedPrice] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedMaxVisitors, setSelectedMaxVisitors] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleFilterChange = ({ price, location, maxVisitors }) => {
        setSelectedPrice(price);
        setSelectedLocation(location);
        setSelectedMaxVisitors(maxVisitors)
    };

    const applyFilters = () => {
        const normalizedSearchTerm = searchTerm.trim().toLowerCase();
        let filtered = places.filter(place =>
            place.location.toLowerCase().includes(normalizedSearchTerm)
        );

        if (selectedPrice) {
            const priceValue = parseInt(selectedPrice, 10);
            filtered = filtered.filter(place => place.price <= priceValue);
        }

        if (selectedLocation) {
            filtered = filtered.filter(place => place.location === selectedLocation);
        }

        if (selectedMaxVisitors) {
            const maxVisitorsValue = parseInt(selectedMaxVisitors, 10);
            filtered = filtered.filter(place => place.maxVisitors <= maxVisitorsValue);
        }

        setFilteredPlaces(filtered);
    };

    useEffect(() => {
        applyFilters();
    }, [searchTerm, selectedPrice, selectedLocation, selectedMaxVisitors, places]);

    return (
        <div>
            <Header searchTerm={searchTerm} onSearchChange={handleSearchChange} />

            <section className="filter-section">
                <FilterButtons onFilterChange={handleFilterChange} />
            </section>

            <Places places={filteredPlaces} />
            <Footer />
        </div>
    );
};

export default CatalogPage;