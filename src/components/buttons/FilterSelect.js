import React from 'react';

const FilterSelect = ({ label, options, value, onChange }) => (
    <div className="filter-select">
        <label>{label}</label>
        <select value={value} onChange={onChange}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    </div>
);

export default FilterSelect;