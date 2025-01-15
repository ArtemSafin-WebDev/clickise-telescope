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
import ChartCard from "../ChartCard";
import NoData from "../NoData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  data: number[];
  dataLabel: string;
  xLabels: string[];
  title?: string;
}

function BarChart({ data, xLabels, title, dataLabel }: BarChartProps) {
  const hasData = !data.every((item) => item === 0);
  const options: ChartOptions<"bar"> = {
    responsive: true,
    aspectRatio: 1 / 0.8,
    interaction: {
      intersect: false,
      mode: "index",
    },
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
          usePointStyle: true,
        },
      },
      tooltip: {
        backgroundColor: "#FBFFFB",
        bodyColor: "rgba(27, 31, 24, 1)",
        titleColor: "rgba(27, 31, 24, 1)",
        borderColor: "#ABD7A3",
        borderWidth: 1,
        padding: 8,
        boxPadding: 4,
        cornerRadius: 10,
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
        ticks: {
          color: "#9d9d9d",
          callback: function (value) {
            let monthNumber = Number(value);
            return xLabels[monthNumber].substring(0, 3);
          },
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
        ticks: {
          color: "#9d9d9d",
        },
      },
    },
  };

  const ctrData: ChartData<"bar"> = {
    labels: xLabels,
    datasets: [
      {
        label: dataLabel,
        data: hasData ? data : [],
        borderColor: "#52CA01",

        // backgroundColor: "#52CA01",
        borderRadius: 8,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            return;
          }
          const { top, bottom } = chartArea;

          const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
          gradientBg.addColorStop(0, "rgba(82, 202, 1, 1)");
          gradientBg.addColorStop(1, "rgba(82, 202, 1, 0.3)");
          return gradientBg;
        },
      },
    ],
  };

  return (
    <ChartCard title={title}>
      <Bar options={options} data={ctrData} width={100} height={80} />
      {!hasData ? <NoData /> : null}
    </ChartCard>
  );
}

export default BarChart;
