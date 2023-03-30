import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const ChartWidget = ({ data }) => {
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        setChartData({
            labels: data.map(item => item.label),
            datasets: [
                {
                    label: 'Metric',
                    data: data.map(item => item.value),
                    backgroundColor: 'rgba(75,192,192,0.2)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderWidth: 1
                }
            ]
        });
    }, [data]);

    return (
        <div>
            <Line data={chartData} />
        </div>
    );
};

export default ChartWidget;
