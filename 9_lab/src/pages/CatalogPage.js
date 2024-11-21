import React, { useState, useEffect } from 'react';
import Header from '../components/header/Header_search';
import Places from '../components/places_grid/Places';
import FilterButtons from '../components/buttons/FilterButtons';
import Footer from '../components/footer/Footer';
import { fetchPlaces } from '../api';
import Loader from '../components/loader/Loader';
import { useParams } from 'react-router-dom';

const CatalogPage = () => {
    const [places, setPlaces] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPrice, setSelectedPrice] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedMaxVisitors, setSelectedMaxVisitors] = useState('');
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    const handleSearchChange = (e) => setSearchTerm(e.target.value);

    const handleFilterChange = ({ price, location, maxVisitors }) => {
        setSelectedPrice(price);
        setSelectedLocation(location);
        setSelectedMaxVisitors(maxVisitors);
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const startTime = Date.now();
                const data = await fetchPlaces({
                    searchTerm: searchTerm.trim(),
                    price: selectedPrice,
                    location: selectedLocation,
                    maxVisitors: selectedMaxVisitors,
                });

                const delay = 2000 - (Date.now() - startTime);
                if (delay > 0) {
                    await new Promise((resolve) => setTimeout(resolve, delay));
                }

                if (id) {
                    const place = data.find((place) => place.id === parseInt(id, 10));
                    setFilteredPlaces(place ? [place] : []);
                } else {
                    setPlaces(data);
                    setFilteredPlaces(data);
                }
            } catch (error) {
                console.error('Error fetching places:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [searchTerm, selectedPrice, selectedLocation, selectedMaxVisitors, id]);

    return (
        <div>
            <Header searchTerm={searchTerm} onSearchChange={handleSearchChange} />
            <section className="filter-section">
                <FilterButtons onFilterChange={handleFilterChange} />
            </section>
            {loading ? <Loader /> : <Places places={filteredPlaces} />}
            <Footer />
        </div>
    );
};

export default CatalogPage;
