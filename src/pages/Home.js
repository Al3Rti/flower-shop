import React from 'react';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1>Добро пожаловать в Flower Shop</h1>
        <p>Самые свежие и красивые цветы для ваших особых моментов</p>
      </div>
      
      <div className={styles.features}>
        <div className={styles.feature}>
          <h3>🌸 Свежие цветы</h3>
          <p>Ежедневные поставки от лучших поставщиков</p>
        </div>
        <div className={styles.feature}>
          <h3>🚚 Быстрая доставка</h3>
          <p>Доставка в течение 2-х часов по городу</p>
        </div>
        <div className={styles.feature}>
          <h3>💝 Подарочная упаковка</h3>
          <p>Бесплатная упаковка для всех букетов</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
