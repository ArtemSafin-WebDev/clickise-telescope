"use client";
// import { useEffect, useRef, useState } from "react";
import styles from "./callbackModal.module.scss";
import Modal from "../modal/Modal";
import useCallbackModalStore from "@/app/store/useCallbackModalStore";

function CallbackModal() {
  const isOpen = useCallbackModalStore((state) => state.isOpen);
  const close = useCallbackModalStore((state) => state.close);

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
        <form action="/" className={styles.form}>
          <div className={styles.fields}>
            <div className={styles.field}>
              <input
                type="text"
                className={styles.input}
                required
                placeholder="Имя"
                autoFocus
              />
            </div>
            <div className={styles.field}>
              <input
                type="text"
                className={styles.input}
                required
                placeholder="Телефон или логин в Telegram"
              />
            </div>
          </div>
          <button type="submit" className={styles.submit}>
            Получить индивидуальные условия
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default CallbackModal;
