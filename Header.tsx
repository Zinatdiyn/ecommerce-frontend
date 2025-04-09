import React from "react";
import styles from "../assets/styles/Header.module.scss";

const Header = () => {
  return (
    <header>
      {/* Yuqori qism (Top bar) */}
      <div className={styles.topBar}>
        <span>Населенный пункт</span>
        <span>Оплата частями</span>
        <span>Для бизнеса</span>
        <span>Покупателям</span>
        <a href="https://t.me/yourtelegram">Telegram</a>
        <span>+375 29 302 10 21</span>
        <span>Еще</span>
        <span>Контакт-центр с 8:00 до 22:00</span>
      </div>

      {/* Asosiy header */}
      <div className={styles.mainHeader}>
        <h1 className={styles.mainH1}>Онлайн-гипермаркет 21vek.by</h1>
        <button className={styles.catalogButton}>Каталог товаров</button>
        <input type="text" placeholder="Поиск товаров" className={styles.searchInput} />
        <button className={styles.accountButton}>Аккаунт</button>
        <button className={styles.cartButton}>Корзинка</button>
      </div>
    </header>
  );
};

export default Header;
