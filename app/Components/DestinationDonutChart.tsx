import React, { useState, useEffect } from 'react';
import { useStore } from '../Store';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Lottie from "react-lottie-player";
import kanaloader from "@/app/kanaloader.json";

ChartJS.register(ArcElement, Tooltip, Legend);

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}

interface DestinationDonutChartProps {
  labels: string[];
  volumes: number[];
  colors: string[];
}

const DestinationDonutChart: React.FC<DestinationDonutChartProps> = ({ labels, volumes, colors }) => {
  const { isSelected } = useStore();
  const [data, setData] = useState<ChartData | null>(null);

  useEffect(() => {
    setData({
      labels: labels.map(label => label.charAt(0).toUpperCase() + label.slice(1)), // Capitalize first letter
      datasets: [
        {
          label: 'Chain Volume',
          data: volumes,
          backgroundColor: colors,
          borderColor: colors,
          borderWidth: 1,
        },
      ],
    });
  }, [labels, volumes, colors, isSelected]);

  if (!data) {
    return (
      <div className="flex justify-center items-center align-middle">
        <Lottie
          loop
          animationData={kanaloader}
          play
          style={{ width: 50, height: 50 }}
        />
      </div>
    );
  }

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
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '310.93px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
        }}
      >
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default DestinationDonutChart;