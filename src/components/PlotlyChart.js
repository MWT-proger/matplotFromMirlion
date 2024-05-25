import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';

const PlotlyChart = () => {
    const [figure, setFigure] = useState(null);

    useEffect(() => {
        axios.get('/figure.json')
            .then(response => {
                setFigure(response.data);
            })
            .catch(error => {
                console.error('Error fetching the figure data:', error);
            });
    }, []);

    if (!figure) return <div>Loading...</div>;

    return (
        <Plot
            data={figure.data}
            layout={figure.layout}
            config={figure.config}
        />
    );
};

export default PlotlyChart;
