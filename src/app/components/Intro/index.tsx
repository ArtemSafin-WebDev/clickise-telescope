"use client";

import useCallbackModalStore from "@/app/store/useCallbackModalStore";
import styles from "./styles.module.scss";

function Intro() {
  const open = useCallbackModalStore((state) => state.open);

  return (
    <div className={styles.intro}>
      <picture>
        <source
          srcSet="/intro-illustration-mobile.svg"
          media="(max-width: 640px)"
        />
        <img
          src="/intro-illustration.svg"
          alt=""
          className={styles.illustration}
        />
      </picture>
      <div className="inner-container">
        <div className={styles.content}>
          <h1 className={styles.heading}>Аналитика Telegram Ads</h1>
          <div className={styles.text}>
            Мы проанализировали более 3 000 рекламных кампаний, чтобы ваша
            реклама стала эффективнее
          </div>
          <button className={styles.callbackBtn} onClick={() => open()}>
            Написать менеджеру
          </button>
        </div>
      </div>
    </div>
  );
}

export default Intro;
