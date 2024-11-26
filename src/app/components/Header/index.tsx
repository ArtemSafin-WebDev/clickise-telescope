"use client";

import Cross from "@/app/icons/cross";
import styles from "./styles.module.scss";
import Image from "next/image";
import useCallbackModalStore from "@/app/store/useCallbackModalStore";

function Header() {
  const open = useCallbackModalStore((state) => state.open);
  return (
    <header className={styles.header}>
      <div className="inner-container">
        <div className={styles.row}>
          <div className={styles.logos}>
            <Image
              className={styles.clickiseLogo}
              src="/logo.svg"
              alt="CLickise logo"
              width={110}
              height={28}
              priority
            />
            <Cross fill="#353131" />
            <Image
              className={styles.tgBoosterLogo}
              src="/tg-booster-logo.svg"
              alt="TG Booster logo"
              width={120}
              height={28}
              priority
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
