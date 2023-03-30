import React, { useState, useEffect } from 'react';
import { getData } from '../api';
import Filter1 from './Filter1';
import Filter2 from './Filter2';
import TableWidget from './TableWidget';

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]); // Define filteredData state variable

    useEffect(() => {
        const fetchData = async () => {
            const result = await getData();
            setData(result.data);
            setFilteredData(result.data); // Set initial state of filteredData
        };
        fetchData();
    }, []);

    // Define filter functions and handleFilterChange functions here

    return (
        <div>
            <h1>Dashboard</h1>
            <Filter1 />
            <Filter2 />
            <TableWidget data={filteredData} /> {/* Pass filteredData to TableWidget */}
        </div>
    );
};

export default Dashboard;
