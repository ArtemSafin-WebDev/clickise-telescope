"use client";

import { useEffect, useState } from "react";
import styles from "./analytics.module.scss";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const monthNames = [
  "янв",
  "фев",
  "мар",
  "апр",
  "май",
  "июн",
  "июл",
  "авг",
  "сен",
  "окт",
  "ноя",
  "дек",
];

type AnalyticsData = {
  month: number;
  cpm: number;
  cps: number;
  cpc: number;
  ctr: number;
  avg_ads_per_cabinet: number;
  avg_spent_per_cabinet: number;
};

interface AnalyticsProps {}

function Analytics(props: AnalyticsProps) {
  const {} = props;
  const [data, setData] = useState<Array<AnalyticsData>>([]);

  const cpm = data.map((item) => item.cpm);
  const months = data.map((item) => monthNames[item.month - 1]);

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
        borderColor: "green",
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
        data: cpm,
        borderColor: "#2380FF",
        tension: 0.4,
        pointStyle: "circle",
        pointHoverRadius: 6,
        backgroundColor: "#2380FF",
        fill: "red",
      },
    ],
  };

  console.log("Months", months, cpm);

  const fetchData = async () => {
    console.log("Fetching data");
    const url = process.env.NEXT_PUBLIC_API_URL;
    const token = process.env.NEXT_PUBLIC_TOKEN;
    if (!url || !token) return;
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          filters: {
            has_photo: false,
            has_emoji: true,
            boarding: {
              site: true,
            },
            benchmark_id: 15,
          },
        }),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      const stats = json.stats as AnalyticsData[];
      if (stats) {
        setData(stats);
      }
      console.log(json);
    } catch (error) {
      console.error("Error while fetching data", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.analytics}>
      <div className="outer-container">
        <div className={styles.wrapper}>
          <div className="inner-container">
            <h2 className={styles.heading}>
              Аналитика рекламных кампаний по нишам
            </h2>
            <div className={styles.text}>
              В графиках использованы данные за период март – октябрь 2024 г.
            </div>
            <div className={styles.row}>
              <div className={styles.sidebar}>
                <div className={styles.filters}></div>
              </div>
              <div className={styles.main}>
                <div className={styles.charts}>
                  <div className={styles.chart} key={"CPM"}>
                    <h3 className={styles.chartTitle}>
                      Средний CPM (1 000 показов)
                    </h3>
                    <div className={styles.chartWrapper}>
                      <Line
                        options={options}
                        data={cpmData}
                        width={100}
                        height={80}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
