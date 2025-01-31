"use client";

import Cross from "@/app/icons/cross";
import styles from "./styles.module.scss";
import useCallbackModalStore from "@/app/store/useCallbackModalStore";

function Header() {
  const open = useCallbackModalStore((state) => state.open);
  return (
    <header className={styles.header}>
      <div className="inner-container">
        <div className={styles.row}>
          <div className={styles.logos}>
            <img
              src="/logo.svg"
              alt="CLickise logo"
              className={styles.clickiseLogo}
            />
            <Cross fill="#353131" />

            <img
              src="/tg-booster-logo.svg"
              alt="TG Booster logo"
              className={styles.tgBoosterLogo}
            />
          </div>
          <button
            className={styles.callbackBtn}
            type="button"
            onClick={() => open()}
          >
            Написать менеджеру
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
