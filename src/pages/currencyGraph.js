// CurrencyGraph.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, LineController, PointElement, LineElement } from 'chart.js';
import 'chartjs-adapter-date-fns';

// Register necessary components with Chart.js
Chart.register(CategoryScale, LinearScale, LineController, PointElement, LineElement);

const CurrencyGraph = ({ chartData, handleTimeFrameChange }) => {
    return (
        <div className="currency-info">
            <p>Value: ${chartData.value.toFixed(2)}</p>
            <Line data={chartData.chartData} />
        </div>
    );
};

export default CurrencyGraph;