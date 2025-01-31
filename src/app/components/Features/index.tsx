import styles from "./styles.module.scss";

function Features() {
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
                <img
                  src="features/1.svg"
                  alt="Feature icon"
                  className={styles.icon}
                />
                <h3 className={styles.cardTitle}>Стройте гипотезы</h3>
                <div className={styles.cardText}>
                  на основе актуальных рыночных данных
                </div>
              </div>
            </li>
            <li className={styles.item}>
              <div className={styles.card}>
                <img
                  src="features/2.svg"
                  alt="Feature icon"
                  className={styles.icon}
                />
                <h3 className={styles.cardTitle}>Проверяйте эффективность</h3>
                <div className={styles.cardText}>
                  сопоставляйте свои показатели со&nbsp;средними по&nbsp;рынку
                </div>
              </div>
            </li>
            <li className={styles.item}>
              <div className={styles.card}>
                <img
                  src="features/3.svg"
                  alt="Feature icon"
                  className={styles.icon}
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
