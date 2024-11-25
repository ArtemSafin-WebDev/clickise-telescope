import Cross from "@/app/icons/cross";
import styles from "./header.module.scss";
import Image from "next/image";

interface HeaderProps {}

function Header(props: HeaderProps) {
  const {} = props;

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
          <a href="#" className={styles.callbackBtn}>
            Написать менеджеру
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
