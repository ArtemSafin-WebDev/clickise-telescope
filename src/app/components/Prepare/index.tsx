import styles from "./styles.module.scss";
import Image from "next/image";
interface PrepareProps {}

function Prepare(props: PrepareProps) {
  const {} = props;

  return (
    <div className={styles.prepare}>
      <div className="inner-container">
        <div className={styles.row}>
          <h2 className={styles.heading}>
            Готовьтесь к запуску
            <br /> рекламы
          </h2>

          <ul className={styles.list}>
            <li className={styles.item}>
              <div className={styles.card}>
                <div className={styles.cardTitleWrapper}>
                  <Image
                    className={styles.icon}
                    src="/prepare/1.svg"
                    alt="Card icon"
                    width={36}
                    height={36}
                    priority
                  />
                  <h3 className={styles.cardTitle}>Планируйте кампании</h3>
                </div>
                <div className={styles.cardText}>
                  и прогнозируйте бюджет проще и точнее
                </div>
              </div>
            </li>
            <li className={styles.item}>
              <div className={styles.card}>
                <div className={styles.cardTitleWrapper}>
                  <Image
                    className={styles.icon}
                    src="/prepare/2.svg"
                    alt="Card icon"
                    width={36}
                    height={36}
                    priority
                  />
                  <h3 className={styles.cardTitle}>Анализируйте данные</h3>
                </div>
                <div className={styles.cardText}>
                  чтобы выбирать лучшее время для рекламы
                </div>
              </div>
            </li>
            <li className={styles.item}>
              <div className={styles.card}>
                <div className={styles.cardTitleWrapper}>
                  <Image
                    className={styles.icon}
                    src="/prepare/3.svg"
                    alt="Card icon"
                    width={36}
                    height={36}
                    priority
                  />
                  <h3 className={styles.cardTitle}>Стройте прогнозы</h3>
                </div>
                <div className={styles.cardText}>
                  по стоимости подписчика в Telegram (CPJ) и&nbsp;1000 показов
                  (CPM)
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Prepare;