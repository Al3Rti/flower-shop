import React, { useState, useEffect } from 'react';
import { fetchFlowers } from '../services/api';
import styles from './Catalog.module.css';

function Catalog() {
  const [flowers, setFlowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadFlowers = async () => {
      try {
        const data = await fetchFlowers();
        setFlowers(data);
      } catch (err) {
        setError('Ошибка загрузки каталога');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadFlowers();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Загрузка цветов...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.container}>
      <h1>Каталог цветов</h1>
      <p className={styles.subtitle}>Выберите идеальный букет</p>
      
      <div className={styles.flowerGrid}>
        {flowers.map((flower) => (
          <div key={flower.id} className={styles.flowerCard}>
            <div className={styles.flowerImage} style={{ backgroundColor: flower.color }}>
              {flower.emoji}
            </div>
            <h3>{flower.name}</h3>
            <p>{flower.description}</p>
            <div className={styles.price}>${flower.price}</div>
            <button className={styles.buyButton}>Добавить в корзину</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
