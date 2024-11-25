import styles from "./intro.module.scss";
import Image from "next/image";

interface IntroProps {}

function Intro(props: IntroProps) {
  const {} = props;

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
          <a href="#" className={styles.callbackBtn}>
            Написать менеджеру
          </a>
        </div>
      </div>
    </div>
  );
}

export default Intro;
