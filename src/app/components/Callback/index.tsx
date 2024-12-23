"use client";
import useSuccessModalStore from "@/app/store/useSuccessModalStore";
import CheckmarkIcon from "@/app/icons/checkmark";
import { useForm, Form } from "react-hook-form";
import styles from "./styles.module.scss";

enum ForWhoEnum {
  clients = "clients",
  business = "business",
}

type Inputs = {
  name: string;
  phoneOrLogin: string;
  isClient?: boolean;
  forWho?: ForWhoEnum;
};

function Callback() {
  const openSuccessModal = useSuccessModalStore((state) => state.open);
  const {
    register,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    defaultValues: {
      isClient: true,
      forWho: ForWhoEnum.clients,
    },
  });

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
              <Form
                className={styles.form}
                action={process.env.NEXT_PUBLIC_CALLBACK_URL}
                onSuccess={() => {
                  openSuccessModal();
                  reset();
                }}
                headers={{
                  "Content-Type": "application/json",
                }}
                control={control}
                onError={({ response, error }) => {
                  console.log("Response", response),
                    console.log("Error", error);
                  window.alert("Не удалось отправить форму");
                }}
              >
                <div className={styles.fields}>
                  <div className={styles.field}>
                    <input
                      type="text"
                      className={`${styles.textInput} ${
                        errors.name ? styles.textInputInvalid : ""
                      }`}
                      placeholder="Имя"
                      {...register("name", { required: true })}
                    />
                    {errors.name?.type === "required" && (
                      <div className={styles.validationError}>
                        {" "}
                        Обязательное поле
                      </div>
                    )}
                  </div>
                  <div className={styles.field}>
                    <input
                      type="text"
                      className={`${styles.textInput} ${
                        errors.phoneOrLogin ? styles.textInputInvalid : ""
                      }`}
                      placeholder="Телефон или логин в Telegram"
                      {...register("phoneOrLogin", { required: true })}
                    />
                    {errors.phoneOrLogin?.type === "required" && (
                      <div className={styles.validationError}>
                        Обязательное поле
                      </div>
                    )}
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
                        value={ForWhoEnum.clients}
                        className={styles.radioInput}
                        {...register("forWho")}
                      />
                      <span className={styles.radioBullet}></span>
                      <span className={styles.radioText}>Для клиентов</span>
                    </label>
                    <label className={styles.radioBox}>
                      <input
                        type="radio"
                        value={ForWhoEnum.business}
                        className={styles.radioInput}
                        {...register("forWho")}
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
                      className={styles.clientCheckboxInput}
                      {...register("isClient")}
                    />
                    <span className={styles.clientCheckboxMark}>
                      <CheckmarkIcon />
                    </span>
                    <span className={styles.clientCheckboxText}>
                      Я — клиент Clickise
                    </span>
                  </label>
                </div>
                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={isSubmitting}
                >
                  Оставить заявку
                </button>
                <div className={styles.policy}>
                  Отправляя заявку, вы соглашаетесь с обработкой персональных
                  данных
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Callback;
