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
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import ChartCard from "../ChartCard";
import NoData from "../NoData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface LinechartProps {
  datasetOne: number[];
  datasetTwo?: number[];
  xLabels: string[];
  title?: string;
  yUnits?: string;
  zUnits?: string;
  datasetOneTitle: string;
  datasetTwoTitle?: string;
  datasetOneTooltipName?: string;
  datasetTwoTooltipName?: string;
}

function LineChart({
  datasetOne,
  datasetTwo,
  xLabels,
  title,
  yUnits = "",
  zUnits = "",
  datasetOneTitle,
  datasetTwoTitle,
  datasetOneTooltipName,
  datasetTwoTooltipName,
}: LinechartProps) {
  const hasDatasetOne = !datasetOne.every((item) => item === 0);
  const hasDatasetTwo = !datasetTwo?.every((item) => item === 0);
  const hasData = hasDatasetTwo || hasDatasetOne;
  const options: ChartOptions<"line"> = {
    responsive: true,
    aspectRatio: 1 / 0.8,
    maintainAspectRatio: true,
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
        position: "nearest",
        callbacks: {
          label: (item) => {
            console.log(item);
            const value = item.raw as number;
            if (item.datasetIndex === 0 && datasetOneTooltipName) {
              return `${datasetOneTooltipName}: ${value.toFixed(2)}${yUnits}`;
            } else if (item.datasetIndex === 1 && datasetTwoTooltipName) {
              return `${datasetTwoTooltipName}: ${value.toFixed(2)}${zUnits}`;
            }
            return item.dataset.label + ": " + value.toFixed(2);
          },
        },
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
        beginAtZero: true,
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

          callback: function (value) {
            return yUnits + Number(value).toFixed(2);
          },
        },
      },
    },
  };

  if (datasetTwo && options.scales) {
    options.scales.z = {
      type: "linear",
      position: "right",
      grid: {
        color: "#EBEAEA",
        drawTicks: false,
        display: false,
      },
      border: {
        color: "#EBEAEA",
        display: false,
        dash: [6, 6],
      },
      ticks: {
        color: "#9d9d9d",
        callback: function (value) {
          return zUnits + Number(value).toFixed(2);
        },
      },
    };
  }

  const lineChartData: ChartData<"line"> = {
    labels: xLabels,
    datasets: [
      {
        label: datasetOneTitle,
        data: hasDatasetOne ? datasetOne : [],
        borderColor: "#2380FF",
        tension: 0.3,
        cubicInterpolationMode: "monotone",
        pointStyle: "circle",
        // backgroundColor: "#2380FF",
        yAxisID: "y",
        pointRadius: 0,
        pointHoverRadius: 4,
        pointHoverBackgroundColor: "#2380FF",
        borderWidth: 2,

        fill: true,

        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            return;
          }
          const { top, bottom } = chartArea;

          const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
          gradientBg.addColorStop(0, "rgba(35, 128, 255, 0.3)");
          gradientBg.addColorStop(1, "rgba(35, 128, 255, 0)");
          return gradientBg;
        },
      },
    ],
  };
  if (datasetTwo) {
    lineChartData.datasets.push({
      label: datasetTwoTitle,
      data: datasetTwo && hasDatasetTwo ? datasetTwo : [],
      borderColor: "#52CA01",
      tension: 0.3,
      cubicInterpolationMode: "monotone",
      pointStyle: "circle",
      yAxisID: "z",
      pointRadius: 0,
      pointHoverRadius: 4,
      pointHoverBackgroundColor: "#52CA01",
      borderWidth: 2,
      fill: true,
      backgroundColor: (context) => {
        const chart = context.chart;
        const { ctx, chartArea } = chart;
        if (!chartArea) {
          return;
        }
        const { top, bottom } = chartArea;

        const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
        gradientBg.addColorStop(0, "rgba(82, 202, 1, 0.3)");
        gradientBg.addColorStop(1, "rgba(82, 202, 1, 0)");
        return gradientBg;
      },
    });
  }

  return (
    <ChartCard title={title}>
      <Line options={options} data={lineChartData} />
      {!hasData ? <NoData /> : null}
    </ChartCard>
  );
}

export default LineChart;
