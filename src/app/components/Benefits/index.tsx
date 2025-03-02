import InfoIcon from "@/app/icons/info";
import styles from "./styles.module.scss";

interface BenefitsProps {}

function Benefits(props: BenefitsProps) {
  const {} = props;

  return (
    <div className={styles.benefits}>
      <picture>
        <source srcSet="/benefits-bg-mobile.svg" media="(max-width: 640px)" />
        <img src="/benefits-bg.svg" alt="" className={styles.benefitsBg} />
      </picture>
      <div className="inner-container">
        <div className={styles.row}>
          <div className={styles.textContent}>
            <h2 className={styles.heading}>
              Запускайте рекламу с&nbsp;Clickise
            </h2>
            <div className={styles.firstClient}>
              Первое пополнение с комиссией 10%
            </div>
            <div className={styles.text}>
              <InfoIcon />
              Минимальное пополнение от 500 €
            </div>
          </div>
          <img
            src="/benefits.webp"
            alt="Illustration"
            className={styles.image}
          />
        </div>
        <div className={styles.bottom}>
          <h3 className={styles.secondaryHeading}>А ещё у нас:</h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <div className={styles.card}>
                <h4 className={styles.cardTitle}>
                  Открытие рекламного кабинета за 1 час, быстрое пополнение
                </h4>
              </div>
            </li>
            <li className={styles.item}>
              <div className={styles.card}>
                <h4 className={styles.cardTitle}>
                  Автоматическая маркировка рекламных объявлений
                </h4>
              </div>
            </li>
            <li className={styles.item}>
              <div className={styles.card}>
                <h4 className={styles.cardTitle}>
                  Самый удобный сервис аналитики
                </h4>
              </div>
            </li>
            <li className={styles.item}>
              <div className={styles.card}>
                <h4 className={styles.cardTitle}>
                  Удобный чат с поддержкой, поможем на всех этапах запуска
                  рекламы
                </h4>
              </div>
            </li>
            <li className={styles.item}>
              <div className={styles.card}>
                <h4 className={styles.cardTitle}>
                  Рекламный кабинет на выбор: запускайте объявления с медиа или
                  без них
                </h4>
              </div>
            </li>
            <li className={styles.item}>
              <div className={styles.card}>
                <h4 className={styles.cardTitle}>
                  Автоправила для управления ставками и автоматической работы
                  эффективных кампаний
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
