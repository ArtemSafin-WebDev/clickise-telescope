import styles from "./features.module.scss";
import Image from "next/image";

interface FeaturesProps {}

function Features(props: FeaturesProps) {
  const {} = props;

  return (
    <div className={styles.features}>
      <div className="inner-container">
        <div className={styles.row}>
          <div className={styles.leftCol}>
            <h2 className={styles.heading}>
              Находите точки роста для работающих кампаний
            </h2>
          </div>
          <ul className={styles.list}>
            <li className={styles.item}>
              <div className={styles.card}>
                <Image
                  className={styles.icon}
                  src="features/1.svg"
                  alt="Feature icon"
                  width={36}
                  height={36}
                  priority
                />
                <h3 className={styles.cardTitle}>Стройте гипотезы</h3>
                <div className={styles.cardText}>
                  на основе актуальных рыночных данных
                </div>
              </div>
            </li>
            <li className={styles.item}>
              <div className={styles.card}>
                <Image
                  className={styles.icon}
                  src="features/2.svg"
                  alt="Feature icon"
                  width={36}
                  height={36}
                  priority
                />
                <h3 className={styles.cardTitle}>Проверяйте эффективность</h3>
                <div className={styles.cardText}>
                  сопоставляйте свои показатели со&nbsp;средними по&nbsp;рынку
                </div>
              </div>
            </li>
            <li className={styles.item}>
              <div className={styles.card}>
                <Image
                  className={styles.icon}
                  src="features/3.svg"
                  alt="Feature icon"
                  width={36}
                  height={36}
                  priority
                />
                <h3 className={styles.cardTitle}>Сравнивайте показатели</h3>
                <div className={styles.cardText}>
                  при разных типах таргетинга, чтобы настраивать более
                  эффективную рекламу
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Features;
