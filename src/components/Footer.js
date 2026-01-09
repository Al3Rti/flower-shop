import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© 2025 Flower Shop. Все права защищены.</p>
        <p>Контакты: info@flowershop.ru | +7 (999) 999-99-99</p>
      </div>
    </footer>
  );
}

export default Footer;
