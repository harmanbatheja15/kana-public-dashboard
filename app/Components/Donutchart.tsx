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
    labels: ['Aptos', 'Klatyn', 'Ethereum', 'Polygon', 'base','Zksync'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [300, 50, 100, 80, 120, 60,15],
        backgroundColor: [
          '#00B3FF',
          '#FF007A',
          '#FFC700',
          '#FF8400',
          '#00FF85',
          '#8E00FF',
        ],
        borderColor: [
          '#00B3FF',
          '#FF007A',
          '#FFC700',
          '#FF8400',
          '#00FF85',
          '#8E00FF',
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
