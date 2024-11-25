"use client";

import { useEffect, useState } from "react";
import styles from "./analytics.module.scss";
import { monthNames } from "@/app/constants";
import CPMChart from "../cpmChart/cpmChart";
import CPSChart from "../cpsChart/cpsChart";
import AdsChart from "../adsChart/adsChart";
import CPCChart from "../cpcChart/cpcChart";

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
  const [data, setData] = useState<AnalyticsData[]>([]);

  const months = data.map((item) => monthNames[item.month - 1]);

  // ADS
  const adsPerCabinet = data.map((item) => item.avg_ads_per_cabinet);
  const spentPerCabinet = data.map((item) => item.avg_spent_per_cabinet);

  // CPM
  const cpm = data.map((item) => item.cpm);
  const hasCpm = !cpm.every((item) => item === 0);
  // CPS
  const cps = data.map((item) => item.cps);

  // CPC
  const cpc = data.map((item) => item.cpc);
  const hasCpc = !cpc.every((item) => item === 0);

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
                  <AdsChart
                    months={months}
                    spentPerCabinet={spentPerCabinet}
                    adsPerCabinet={adsPerCabinet}
                  />
                  {hasCpm ? <CPMChart data={cpm} months={months} /> : null}
                  <CPSChart data={cps} months={months} />
                  <CPCChart data={cpc} months={months} />
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
