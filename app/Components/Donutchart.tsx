// components/DonutChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const DonutChart = () => {
  const data = {
    labels: ['Data', 'Data', 'Data', 'Data', 'Data'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [300, 50, 100, 80, 120, 60],
        backgroundColor: [
          '#8B59B4B2',
          '#CF6B00B2',
          '#00D971B2',
          '#006BD1B2',
          '#A43F82B2',
        ],
        borderColor: [
          '#8B59B4B2',
          '#CF6B00B2',
          '#00D971B2',
          '#006BD1B2',
          '#A43F82B2',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '310.93px', 
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        height: '100%', 
        width: '100%' 
      }}>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default DonutChart;
