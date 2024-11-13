import { useState } from 'react';
import FilterSelect from './FilterSelect';
import './FilterButtons.css';

function FilterButtons({ onFilterChange }) {
    const [priceRange, setPriceRange] = useState('');
    const [locationRange, setLocationRange] = useState('');
    const [maxVisitorsRange, setMaxVisitorsRange] = useState('');

    const handleFilterChange = () => {
        onFilterChange({
            price: priceRange,
            location: locationRange,
            maxVisitors: maxVisitorsRange,
        });
    };

    const handleResetFilters = () => {
        setPriceRange('');
        setLocationRange('');
        setMaxVisitorsRange('');
        onFilterChange({ price: '', location: '', maxVisitors: '' });
    };

    return (
        <div className="filters">
            <FilterSelect
                label="Price    "
                options={[
                    { value: '', label: 'Price' },
                    { value: '2000', label: 'До 2000' },
                    { value: '5000', label: 'До 5000' },
                    { value: '6000', label: 'До 6000' },
                ]}
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
            />

            <FilterSelect
                label="Location                                  "
                options={[
                    { value: '', label: 'Location' },
                    { value: 'Urych', label: 'Urych' },
                    { value: 'Bakota', label: 'Bakota' },
                    { value: 'Lviv', label: 'Lviv' },
                    { value: 'Truskavets', label: 'Truskavets' },
                    { value: 'Skhidnytsia', label: 'Skhidnytsia' },
                    { value: 'Polyanicya', label: 'Polyanicya' },
                    { value: 'Kamianets-Podilskyi', label: ' Kamianets-Podilskyi' },
                    { value: 'Mukachevo', label: ' Mukachevo' },
                ]}
                value={locationRange}
                onChange={(e) => setLocationRange(e.target.value)}
            />

            <FilterSelect
                label="Max Visitors    "
                options={[
                    { value: '', label: 'Max Visitors' },
                    { value: '5', label: 'До 5' },
                    { value: '15', label: 'До 15' },
                    { value: '50', label: 'До 50' },
                ]}
                value={maxVisitorsRange}
                onChange={(e) => setMaxVisitorsRange(e.target.value)}
            />

            <button className="apply-button" onClick={handleFilterChange}>
                Apply
            </button>
            <button className="reset-button" onClick={handleResetFilters}>
                Reset
            </button>
        </div>
    );
}

export default FilterButtons;
