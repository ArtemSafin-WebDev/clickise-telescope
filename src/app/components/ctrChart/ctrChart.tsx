"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartCard from "../chartCard/chartCard";
import NoData from "../noData/noData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface CPMChartProps {
  data: number[];
  months: string[];
}

function CTRChart({ data, months }: CPMChartProps) {
  const hasData = !data.every((item) => item === 0);
  const options: ChartOptions<"bar"> = {
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

  const ctrData: ChartData<"bar"> = {
    labels: months,
    datasets: [
      {
        label: "CTR",
        data: hasData ? data : [],
        borderColor: "#52CA01",
        backgroundColor: "#52CA01",
        borderRadius: 10,
      },
    ],
  };

  return (
    <ChartCard title="Средний CTR (кликабельность объявления)">
      <Bar options={options} data={ctrData} width={100} height={80} />
      {!hasData ? <NoData /> : null}
    </ChartCard>
  );
}

export default CTRChart;
