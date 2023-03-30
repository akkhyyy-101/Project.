import React, { useState } from 'react';

function FilterComponent({ applyFilter }) {
    const [filterValue, setFilterValue] = useState('');

    const handleInputChange = (event) => {
        setFilterValue(event.target.value);
    };



    function Filter1(props) {
        const handleChange = (event) => {
            props.onChange(event.target.value);
        };
        return (
            <div>
                <form onSubmit={handleFilter}>
                    <input type="text" value={filterValue} onChange={handleInputChange} />
                    <button type="submit">Apply Filter</button>
                </form>
                <label>Filter 1:</label>
                <input type="text" value={props.value} onChange={handleChange} />
                <label>Filter 2:</label>
                <input type="text" value={props.value} onChange={handleChange} />
            </div>
        );
    }

    export default FilterComponent;

