import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
        <section className="search-section">
            <input
                type="text"
                placeholder="Search by place title..."
                value={searchTerm}
                onChange={onSearchChange}
            />
        </section>
    );
};

export default SearchBar;