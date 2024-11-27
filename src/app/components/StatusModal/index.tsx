"use client";
import useSuccessModalStore from "@/app/store/useSuccessModalStore";
import styles from "./styles.module.scss";
import Modal from "../Modal";
import { useEffect } from "react";
interface StatusModalProps {
  title?: string;
  text?: string;
  btnText?: string;
}

function StatusModal({ title, text, btnText }: StatusModalProps) {
  const close = useSuccessModalStore((state) => state.close);
  const open = useSuccessModalStore((state) => state.open);
  const isOpen = useSuccessModalStore((state) => state.isOpen);

  // useEffect(() => {
  //   setTimeout(() => {
  //     open();
  //   }, 1000);
  // }, []);

  return (
    <Modal open={isOpen} onClose={() => close()}>
      <div className={styles.statusModal}>
        {title?.trim() && <h3 className={styles.heading}>{title}</h3>}
        {text?.trim() && <div className={styles.text}>{text}</div>}
        {btnText?.trim() && (
          <button
            type="button"
            className={styles.btn}
            onClick={() => close()}
            autoFocus
          >
            {btnText}
          </button>
        )}
      </div>
    </Modal>
  );
}

export default StatusModal;
