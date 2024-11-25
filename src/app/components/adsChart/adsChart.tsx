"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";
import ChartCard from "../chartCard/chartCard";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ADSChartProps {
  spentPerCabinet: number[];
  adsPerCabinet: number[];
  months: string[];
}

function AdsChart({ spentPerCabinet, adsPerCabinet, months }: ADSChartProps) {
  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          borderRadius: 2,
          useBorderRadius: true,
          boxWidth: 14,
          boxHeight: 14,
          font: {
            weight: "bold",
            size: 12,
          },
          color: "#1B1F18",
        },
      },
      tooltip: {
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        bodyColor: "black",
        titleColor: "black",
      },
    },

    scales: {
      B: {
        type: "linear",
        position: "right",
        grid: {
          color: "#EBEAEA",
          drawTicks: false,
        },
        border: {
          color: "#EBEAEA",
          display: false,
          dash: [6, 6],
        },
      },
      x: {
        grid: {
          color: "#EBEAEA",
          lineWidth: 1,
          drawTicks: false,
        },
        border: {
          color: "#EBEAEA",
          display: false,
          dash: [6, 6],
          dashOffset: 6,
        },
      },
      y: {
        grid: {
          color: "#EBEAEA",
          drawTicks: false,
        },
        border: {
          color: "#EBEAEA",
          display: false,
          dash: [6, 6],
        },
      },
    },
  };

  const cpsData: ChartData<"line"> = {
    labels: months,
    datasets: [
      {
        label: "Количество объявлений на рекламодателя",
        data: adsPerCabinet,
        borderColor: "#52CA01",
        tension: 0.4,
        pointStyle: "circle",
        pointHoverRadius: 6,
        backgroundColor: "#52CA01",
        yAxisID: "B",
      },
      {
        label: "Затраты на одно объявление",
        data: spentPerCabinet,
        borderColor: "#2380FF",
        tension: 0.4,
        pointStyle: "circle",
        pointHoverRadius: 6,
        backgroundColor: "#2380FF",
        yAxisID: "y",
      },
    ],
  };

  return (
    <ChartCard title="Количество объявлений на рекламодателя">
      <Line options={options} data={cpsData} width={100} height={80} />
    </ChartCard>
  );
}

export default AdsChart;
