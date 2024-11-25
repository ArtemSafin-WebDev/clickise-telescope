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
import NoData from "../noData/noData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface CPMChartProps {
  data: number[];
  months: string[];
}

function CPMChart({ data, months }: CPMChartProps) {
  const hasData = !data.every((item) => item === 0);
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

  const cpmData: ChartData<"line"> = {
    labels: months,
    datasets: [
      {
        label: "CPM",
        data: hasData ? data : [],
        borderColor: "#2380FF",
        tension: 0.4,
        pointStyle: "circle",
        pointHoverRadius: 6,
        backgroundColor: "#2380FF",
      },
    ],
  };

  return (
    <ChartCard title="Средний CPM (1 000 показов)">
      <Line options={options} data={cpmData} width={100} height={80} />
      {!hasData ? <NoData /> : null}
    </ChartCard>
  );
}

export default CPMChart;