import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartProps {
  tradeData: number;
  tradeTotalVolume: number;
  activeWallets: number;
  period: string;
  showTradeDataOnly?: boolean;
  showTotalVolumeOnly?: boolean;
  showActiveWalletsOnly?: boolean;
}

const LineChart: React.FC<LineChartProps> = ({ tradeData, tradeTotalVolume, period, activeWallets, showTradeDataOnly, showTotalVolumeOnly, showActiveWalletsOnly }) => {
  let labels = [];
  let tradeDataArray = [];
  let tradeTotalVolumeArray = [];
  let activeWalletsArray = [];
  
  switch (period) {
    case "Today":
      labels = ["12am-6am", "6am-12pm", "12pm-6pm", "6pm-12am"];
      tradeDataArray = [tradeData * 0.1, tradeData * 0.3, tradeData * 0.5, tradeData];
      tradeTotalVolumeArray = [tradeTotalVolume * 0.1, tradeTotalVolume * 0.2, tradeTotalVolume * 0.5, tradeTotalVolume];
      activeWalletsArray = [activeWallets * 0.2, activeWallets * 0.4, activeWallets * 0.5, activeWallets];
      break;
    case "This Week":
      labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      tradeDataArray = Array.from({ length: 7 }, (_, i) => tradeData * ((i + 1) / 7));
      tradeTotalVolumeArray = Array.from({ length: 7 }, (_, i) => tradeTotalVolume * ((i + 1) / 7));
      activeWalletsArray = Array.from({ length: 7 }, (_, i) => activeWallets * ((i + 1) / 7));
      break;
    case "This Month":
      labels = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"];
      tradeDataArray = Array.from({ length: 5 }, (_, i) => tradeData * ((i + 1) / 5));
      tradeTotalVolumeArray = Array.from({ length: 5 }, (_, i) => tradeTotalVolume * ((i + 1) / 5));
      activeWalletsArray = Array.from({ length: 5 }, (_, i) => activeWallets * ((i + 1) / 5));
      break;
    default:
      labels = ["Unknown"];
      tradeDataArray = [0];
      tradeTotalVolumeArray = [0];
      activeWalletsArray = [0];
      break;
  }

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: `${period} Trade Data`,
        backgroundColor: "#FFFFFF1A",
        borderColor: "rgba(75,192,192,1)",
        data: tradeDataArray,
      },
      {
        label: `${period} Total Volume`,
        backgroundColor: "#FFFFFF1A",
        borderColor: "rgba(153,102,255,1)",
        data: tradeTotalVolumeArray,
      },
      {
        label: `${period} Active Wallets`,
        backgroundColor: "#FFFFFF1A",
        borderColor: "rgba(255,159,64,1)",
        data: activeWalletsArray,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          filter: (legendItem: any) => {
            if (showTradeDataOnly) {
              return legendItem.text === `${period} Trade Data`;
            }
            if (showTotalVolumeOnly) {
              return legendItem.text === `${period} Total Volume`;
            }
            if (showActiveWalletsOnly) {
              return legendItem.text === `${period} Active Wallets`;
            }
            return true; 
          },
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: "#FFFFFF1A",
        },
      },
      y: {
        grid: {
          color: "#FFFFFF1A",
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default LineChart;
