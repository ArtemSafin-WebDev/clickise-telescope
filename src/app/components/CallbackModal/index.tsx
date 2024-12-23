"use client";

import Modal from "../Modal";
import styles from "./styles.module.scss";
import useCallbackModalStore from "@/app/store/useCallbackModalStore";
import { useForm, Form } from "react-hook-form";
import useSuccessModalStore from "@/app/store/useSuccessModalStore";
type Inputs = {
  name: string;
  phoneOrLogin: string;
};

function CallbackModal() {
  const isOpen = useCallbackModalStore((state) => state.isOpen);
  const close = useCallbackModalStore((state) => state.close);
  const openSuccessModal = useSuccessModalStore((state) => state.open);

  const {
    register,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({});
  return (
    <Modal open={isOpen} onClose={() => close()}>
      <div className={styles.callbackModal}>
        <h3 className={styles.heading}>
          Получите индивидуальные условия для запуска рекламы в Telegram Ads
        </h3>
        <div className={styles.text}>
          Заполните заявку на бесплатную консультацию. Мы составим для вас план
          продвижения, подберём тип таргетинга для тематики и предложим
          индивидуальные условия
        </div>
        <Form
          className={styles.form}
          action={process.env.NEXT_PUBLIC_CALLBACK_URL}
          headers={{
            "Content-Type": "application/json",
          }}
          onSuccess={() => {
            close();
            openSuccessModal();
            reset();
          }}
          control={control}
          onError={({ response, error }) => {
            console.log("Response", response), console.log("Error", error);
            window.alert("Не удалось отправить форму");
          }}
        >
          <div className={styles.fields}>
            <div className={styles.field}>
              <input
                type="text"
                className={`${styles.input} ${
                  errors.name ? styles.inputInvalid : ""
                }`}
                placeholder="Имя"
                {...register("name", { required: true })}
              />
              {errors.name?.type === "required" && (
                <div className={styles.validationError}> Обязательное поле</div>
              )}
            </div>
            <div className={styles.field}>
              <input
                type="text"
                className={`${styles.input} ${
                  errors.phoneOrLogin ? styles.inputInvalid : ""
                }`}
                placeholder="Телефон или логин в Telegram"
                {...register("phoneOrLogin", { required: true })}
              />
              {errors.phoneOrLogin?.type === "required" && (
                <div className={styles.validationError}>Обязательное поле</div>
              )}
            </div>
          </div>
          <button
            type="submit"
            className={styles.submit}
            disabled={isSubmitting}
          >
            Получить индивидуальные условия
          </button>
        </Form>
      </div>
    </Modal>
  );
}

export default CallbackModal;
