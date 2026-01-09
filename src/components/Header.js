import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          🌸 Flower Shop
        </Link>
        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink}>Главная</Link>
          <Link to="/catalog" className={styles.navLink}>Каталог</Link>
          <Link to="/about" className={styles.navLink}>О нас</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
