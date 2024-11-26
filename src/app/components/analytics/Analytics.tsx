"use client";

import { useEffect, useState } from "react";
import styles from "./analytics.module.scss";
import {
  benchmarkOptions,
  emojiOptions,
  monthNames,
  photoOptions,
} from "@/app/constants";
import CPMChart from "../cpmChart/cpmChart";
import CPSChart from "../cpsChart/cpsChart";
import AdsChart from "../adsChart/adsChart";
import CPCChart from "../cpcChart/cpcChart";
import CheckmarkIcon from "@/app/icons/checkmark";
import Select from "../select/Select";
import SpentChart from "../spentChart/spentChart";
import CTRChart from "../ctrChart/ctrChart";

type AnalyticsData = {
  month: number;
  cpm: number;
  cps: number;
  cpc: number;
  ctr: number;
  avg_ads_per_cabinet: number;
  avg_spent_per_cabinet: number;
};

type Params = {
  filters: {
    has_photo?: boolean;
    has_emoji?: boolean;
    benchmark_id: number;
    boarding: {
      bot?: boolean;
      site?: boolean;
      channels?: boolean;
    };
  };
};

interface AnalyticsProps {}

function Analytics(props: AnalyticsProps) {
  const {} = props;
  const [data, setData] = useState<AnalyticsData[]>([]);
  const [bot, setBot] = useState(false);
  const [channels, setChannels] = useState(true);
  const [emoji, setEmoji] = useState<string>("all");
  const [site, setSite] = useState(false);
  const [photo, setPhoto] = useState<string>("all");
  const [benchmarkId, setBenchmarkId] = useState<number>(
    benchmarkOptions[0].value
  );
  const [loading, setLoading] = useState(false);
  const months = data.map((item) => monthNames[item.month - 1]);
  const adsPerCabinet = data.map((item) => item.avg_ads_per_cabinet);
  const spentPerCabinet = data.map((item) => item.avg_spent_per_cabinet);
  const cpm = data.map((item) => item.cpm);
  const cps = data.map((item) => item.cps);
  const cpc = data.map((item) => item.cpc);
  const ctr = data.map((item) => item.ctr);

  console.log("Months", months, cpm);

  const fetchData = async (signal?: AbortSignal) => {
    console.log("Fetching data");

    const url = process.env.NEXT_PUBLIC_API_URL;
    const token = process.env.NEXT_PUBLIC_TOKEN;
    if (!url || !token) return;

    const params: Params = {
      filters: {
        benchmark_id: 15,
        boarding: {},
      },
    };
    if (benchmarkId) params.filters.benchmark_id = benchmarkId;
    if (bot) params.filters.boarding.bot = true;
    if (site) params.filters.boarding.site = true;
    if (channels) params.filters.boarding.channels = true;
    if (photo !== "all") {
      if (photo === "photo") {
        params.filters.has_photo = true;
      } else if (photo === "nophoto") {
        params.filters.has_photo = false;
      }
    }
    if (emoji !== "all") {
      if (emoji === "emoji") {
        params.filters.has_emoji = true;
      } else if (emoji === "noemoji") {
        params.filters.has_emoji = false;
      }
    }
    setLoading(true);
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(params),
        signal,
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
      setLoading(false);
      console.log(json);
    } catch (error) {
      console.error("Error while fetching data", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // const controller = new AbortController();
    // const signal = controller.signal;
    fetchData();

    // return () => {
    //   controller.abort();
    // };
  }, [bot, channels, site, emoji, photo, benchmarkId]);

  return (
    <div className={styles.analytics}>
      <div className="outer-container">
        <div className={styles.wrapper}>
          <div className="inner-container">
            <div className={styles.content}>
              <h2 className={styles.heading}>
                Аналитика рекламных кампаний по нишам
              </h2>
              <div className={styles.text}>
                В графиках использованы данные за период март – октябрь 2024 г.
              </div>
              <div className={styles.row}>
                <div className={styles.sidebar}>
                  <div className={styles.filters}>
                    <div className={styles.filtersBlock}>
                      <h3 className={styles.filtersBlockTitle}>
                        Тематика бизнеса
                      </h3>
                      <Select
                        placeholder="Тематика бизнеса"
                        options={benchmarkOptions}
                        onOptionSelect={(option) => {
                          setBenchmarkId(option.value as number);
                        }}
                      />
                    </div>
                    <div className={styles.filtersBlock}>
                      <h3 className={styles.filtersBlockTitle}>Посадочная</h3>
                      <div className={styles.filtersCheckboxes}>
                        <button
                          className={`${styles.filtersCheckbox} ${
                            channels ? styles.active : ""
                          }`}
                          onClick={() => setChannels((prevState) => !prevState)}
                        >
                          <span className={styles.filtersCheckmark}>
                            <CheckmarkIcon />
                          </span>
                          Каналы
                        </button>
                        <button
                          className={`${styles.filtersCheckbox} ${
                            bot ? styles.active : ""
                          }`}
                          onClick={() => setBot((prevState) => !prevState)}
                        >
                          <span className={styles.filtersCheckmark}>
                            <CheckmarkIcon />
                          </span>
                          Бот
                        </button>
                        <button
                          className={`${styles.filtersCheckbox} ${
                            site ? styles.active : ""
                          }`}
                          onClick={() => setSite((prevState) => !prevState)}
                        >
                          <span className={styles.filtersCheckmark}>
                            <CheckmarkIcon />
                          </span>
                          Сайт
                        </button>
                      </div>
                    </div>
                    <div className={styles.filtersBlock}>
                      <h3 className={styles.filtersBlockTitle}>
                        Эмоджи в объявлении
                      </h3>
                      <Select
                        options={emojiOptions}
                        placeholder="Эмоджи в объявлении"
                        onOptionSelect={(option) => {
                          setEmoji(option.value as string);
                        }}
                      />
                    </div>
                    <div className={styles.filtersBlock}>
                      <h3 className={styles.filtersBlockTitle}>
                        Картинки и видео в объявлении
                      </h3>
                      <Select
                        placeholder="Картинки и видео в объявлении"
                        options={photoOptions}
                        onOptionSelect={(option) => {
                          setPhoto(option.value as string);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.main}>
                  <div
                    className={`${styles.charts} ${
                      loading ? styles.loading : ""
                    }`}
                  >
                    <AdsChart
                      months={months}
                      spentPerCabinet={spentPerCabinet}
                      adsPerCabinet={adsPerCabinet}
                    />
                    <SpentChart months={months} data={spentPerCabinet} />
                    <CTRChart data={ctr} months={months} />
                    <CPMChart data={cpm} months={months} />
                    <CPSChart data={cps} months={months} />
                    <CPCChart data={cpc} months={months} />
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
