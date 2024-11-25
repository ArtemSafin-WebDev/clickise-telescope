import CheckmarkIcon from "@/app/icons/checkmark";
import styles from "./callback.module.scss";

interface CallbackProps {}

function Callback(props: CallbackProps) {
  const {} = props;

  return (
    <div className={styles.callback}>
      <div className="inner-container">
        <div className={styles.row}>
          <div className={styles.leftCol}>
            <h2 className={styles.heading}>
              Оставьте заявку и мы поможем подключить Telegram&nbsp;Ads!
            </h2>
          </div>
          <div className={styles.rightCol}>
            <div className={styles.wrapper}>
              <form action="" method="GET" className={styles.form}>
                <div className={styles.fields}>
                  <div className={styles.field}>
                    <input
                      type="text"
                      className={styles.textInput}
                      placeholder="Имя"
                      required
                    />
                  </div>
                  <div className={styles.field}>
                    <input
                      type="text"
                      className={styles.textInput}
                      placeholder="Телефон или логин в Telegram"
                      required
                    />
                  </div>
                </div>
                <div className={styles.radioGroup}>
                  <h3 className={styles.radioGroupTitle}>
                    Планирую запустить Telegram Ads
                  </h3>
                  <div className={styles.radioItems}>
                    <label className={styles.radioBox}>
                      <input
                        type="radio"
                        name="forwho"
                        value="Для клиентов"
                        className={styles.radioInput}
                        defaultChecked
                      />
                      <span className={styles.radioBullet}></span>
                      <span className={styles.radioText}>Для клиентов</span>
                    </label>
                    <label className={styles.radioBox}>
                      <input
                        type="radio"
                        name="forwho"
                        value="Для своего бизнеса"
                        className={styles.radioInput}
                      />
                      <span className={styles.radioBullet}></span>
                      <span className={styles.radioText}>
                        Для своего бизнеса
                      </span>
                    </label>
                  </div>
                </div>
                <div className={styles.client}>
                  <label className={styles.clientCheckbox}>
                    <input
                      type="checkbox"
                      name="policy"
                      value="Y"
                      className={styles.clientCheckboxInput}
                      defaultChecked
                    />
                    <span className={styles.clientCheckboxMark}>
                      <CheckmarkIcon />
                    </span>
                    <span className={styles.clientCheckboxText}>
                      Я — клиент Clickise
                    </span>
                  </label>
                </div>
                <button type="submit" className={styles.submitBtn}>
                  Оставить заявку
                </button>
                <div className={styles.policy}>
                  Отправляя заявку, вы <a href="#">соглашаетесь</a> с обработкой
                  персональных данных
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Callback;
