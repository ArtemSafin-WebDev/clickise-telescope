"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import {
  benchmarkOptions,
  emojiOptions,
  monthNames,
  photoOptions,
} from "@/app/constants";

import CheckmarkIcon from "@/app/icons/checkmark";
import Select from "../Select";
import LineChart from "../LineChart";
import BarChart from "../BarChart";

type AnalyticsData = {
  month: number;
  cpm: number;
  cps: number;
  cpc: number;
  ctr: number;
  avg_ads_per_cabinet: number;
  avg_spent_per_cabinet: number;
  avg_spent_per_ad: number;
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

  // Network data
  const [data, setData] = useState<AnalyticsData[]>([]);

  // Filters state
  const [bot, setBot] = useState(false);
  const [channels, setChannels] = useState(true);
  const [emoji, setEmoji] = useState<string>("all");
  const [site, setSite] = useState(false);
  const [photo, setPhoto] = useState<string>("all");
  const [benchmarkId, setBenchmarkId] = useState<number>(
    benchmarkOptions[0].value
  );
  const [loading, setLoading] = useState(false);

  // Derived state
  const months = data.map((item) => monthNames[item.month - 1]);
  const adsPerCabinet = data.map((item) => item.avg_ads_per_cabinet);
  const spentPerCabinet = data.map((item) => item.avg_spent_per_cabinet);
  const spentPerAd = data.map((item) => item.avg_spent_per_ad);
  const cpm = data.map((item) => item.cpm);
  const cps = data.map((item) => item.cps);
  const cpc = data.map((item) => item.cpc);
  const ctr = data.map((item) => item.ctr);

  console.log("Months", months, cpm);

  const fetchData = async (signal?: AbortSignal) => {
    console.log("Fetching data");

    const url = process.env.NEXT_PUBLIC_API_URL;
    const token = process.env.NEXT_PUBLIC_TOKEN;

    console.log("Token", "url", token, url);
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
                    <LineChart
                      datasetOne={spentPerAd}
                      datasetOneTitle="Затраты на одно объявление"
                      datasetOneTooltipName="Затраты"
                      yUnits="€"
                      xLabels={months}
                      datasetTwo={adsPerCabinet}
                      datasetTwoTitle="Количество объявлений на рекламодателя"
                      datasetTwoTooltipName="Объявлений"
                      title="Количество объявлений на рекламодателя"
                    />
                    <LineChart
                      datasetOne={spentPerCabinet}
                      datasetOneTitle="Затраты на рекламодателя"
                      datasetOneTooltipName="Затраты"
                      yUnits="€"
                      xLabels={months}
                      title="Средние затраты на рекламодателя"
                    />
                    <BarChart
                      data={ctr}
                      xLabels={months}
                      title="Средний CTR (кликабельность объявления)"
                      dataLabel="CTR"
                    />
                    <LineChart
                      datasetOne={cpm}
                      datasetOneTitle="CPM"
                      xLabels={months}
                      title="Средний CPM (1 000 показов)"
                    />
                    <LineChart
                      datasetOne={cps}
                      datasetOneTitle="CPS"
                      xLabels={months}
                      title="Средний CPS (цена подписчика)"
                    />
                    <LineChart
                      datasetOne={cpc}
                      datasetOneTitle="CPC"
                      xLabels={months}
                      title="Средний CPC (цена за клик)"
                    />
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
