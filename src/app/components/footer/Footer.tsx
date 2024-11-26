"use client";

import useCallbackModalStore from "@/app/store/useCallbackModalStore";
import styles from "./footer.module.scss";
import Image from "next/image";

function Footer() {
  const open = useCallbackModalStore((state) => state.open);

  return (
    <footer className={styles.footer}>
      <div className="outer-container">
        <div className={styles.footerWrapper}>
          <div className="inner-container">
            <div className={styles.footerContent}>
              <div className={styles.leftCol}>
                <a href="#" className={styles.logoWrapper} target="_blank">
                  <Image
                    className={styles.logoImage}
                    src="/logo.svg"
                    alt="CLickise logo"
                    width={110}
                    height={28}
                    priority
                  />
                  <p className={styles.logoText}>Рекламное агентство</p>
                </a>
                <div className={styles.requisites}>
                  <p>ООО "Кликайс"</p>
                  <p>ИНН 1655496134</p>
                  <p>ОГРН 1231600032542</p>
                </div>
              </div>
              <div className={styles.navCol}>
                <nav className={styles.nav}>
                  <ul className={styles.navList}>
                    <li className={styles.navListItem}>
                      <a href="#" className={styles.navLink}>
                        Преимущества
                      </a>
                    </li>
                    <li className={styles.navListItem}>
                      <a href="#" className={styles.navLink}>
                        Аналитика рекламы 🔥
                      </a>
                    </li>
                    <li className={styles.navListItem}>
                      <a href="#" className={styles.navLink}>
                        Условия
                      </a>
                    </li>
                    <li className={styles.navListItem}>
                      <a href="#" className={styles.navLink}>
                        О Telegram Ads
                      </a>
                    </li>
                  </ul>
                </nav>
                <a href="#" className={styles.policy}>
                  Политика обработки
                  <br /> персональных данных
                </a>
              </div>
              <div className={styles.contactsCol}>
                <div className={styles.contacts}>
                  <h3 className={styles.contactsTitle}>Контакты</h3>
                  <ul className={styles.contactsList}>
                    <li className={styles.contactsListItem}>
                      <a
                        href="mailto:sales@clickise.org"
                        className={styles.contactsLink}
                      >
                        <Image
                          className={styles.contactsLinkIcon}
                          src="/mail.svg"
                          alt="E-mail icon"
                          width={24}
                          height={24}
                          priority
                        />
                        sales@clickise.org
                      </a>
                    </li>
                    <li className={styles.contactsListItem}>
                      <a href="#" className={styles.contactsLink}>
                        <Image
                          className={styles.contactsLinkIcon}
                          src="/tg.svg"
                          alt="Telegram icon"
                          width={24}
                          height={24}
                          priority
                        />
                        alex_clickise
                      </a>
                    </li>
                  </ul>
                </div>
                <a href="#" className={styles.contract}>
                  Договор оферты
                </a>
              </div>
              <div className={styles.consultationCol}>
                <h3 className={styles.consultationTitle}>
                  Нужна консультация по сервису или&nbsp;рекламе в&nbsp;
                  <b>Telegram Ads?</b>
                </h3>
                <div className={styles.consultationText}>
                  Мы с радостью ответим! Оставьте заявку — специалист свяжется с
                  вами в рабочее время.
                </div>
                <button
                  className={styles.consultationBtn}
                  type="button"
                  onClick={() => open()}
                >
                  Оставить заявку
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
