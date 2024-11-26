"use client";
import CloseIcon from "@/app/icons/close";
import styles from "./styles.module.scss";

import { ReactNode, useEffect, useRef } from "react";

interface ModalProps {
  open: boolean;
  children?: ReactNode;
  onClose: () => void;
}

function Modal(props: ModalProps) {
  const { open, children, onClose } = props;

  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const modal = ref.current;
    if (open) {
      modal.showModal();
      document.body.classList.add("modal-open");
    } else {
      modal.close();
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [open]);

  return (
    <dialog
      ref={ref}
      className={styles.modal}
      onClick={(event) => {
        const target = event.target as HTMLDialogElement;
        if (target.nodeName === "DIALOG") {
          onClose();
        }
      }}
      onCancel={onClose}
    >
      <div className={styles.modalInner}>
        <button type="button" className={styles.modalClose} onClick={onClose}>
          <CloseIcon />
        </button>
        {children}
      </div>
    </dialog>
  );
}

export default Modal;
